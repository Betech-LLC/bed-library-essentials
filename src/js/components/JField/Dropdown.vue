<template>
    <input
        class="input dropdown"
        :id="field.name"
        :name="field.name"
        type="text"
        :value="modelValue"
        autocomplete="off"
        :readonly="true"
        :placeholder="fieldPlaceholder"
        v-bind="{ ...$attrs }"
    />
    <!-- Dropdown menu -->
    <div class="dropdown-menu">
        <JMenu class="max-h-[320px] overflow-y-auto">
            <JMenuItem @click="$emit('update:modelValue', 'Phoenix Baker')"> Phoenix Baker 1</JMenuItem>
            <JMenuItem @click="$emit('update:modelValue', 'Phoenix Baker 2')"> Phoenix Baker 2</JMenuItem>
            <JMenuItem @click="$emit('update:modelValue', 'Phoenix Baker 3')">Phoenix Baker 3</JMenuItem>
            <JMenuItem @click="$emit('update:modelValue', 'Phoenix Baker 4')"> Phoenix Baker 4</JMenuItem>
            <JMenuItem @click="$emit('update:modelValue', 'Phoenix Baker 5')"> Phoenix Baker 5</JMenuItem>
            <JMenuItem @click="$emit('update:modelValue', 'Phoenix Baker 6')"> Phoenix Baker 6</JMenuItem>
            <JMenuItem @click="$emit('update:modelValue', 'Phoenix Baker 7')"> Phoenix Baker 7</JMenuItem>
            <JMenuItem @click="$emit('update:modelValue', 'Phoenix Baker 8')"> Phoenix Baker 8</JMenuItem>
        </JMenu>
    </div>
</template>
<script>
export default {
    emits: ['update:modelValue'],
    props: ['modelValue', 'field'],

    computed: {
        fieldPlaceholder() {
            return this.field.placeholder || `Chọn ${this.field.label.toLowerCase()}`
        },
    },
}
</script>
