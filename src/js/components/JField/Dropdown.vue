<template>
    <input
        class="input"
        :id="field.name"
        :name="field.name"
        @input="onInput"
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
            <JMenuItem> Phoenix Baker </JMenuItem>
            <JMenuItem> Phoenix Baker </JMenuItem>
            <JMenuItem> Phoenix Baker </JMenuItem>
            <JMenuItem> Phoenix Baker </JMenuItem>
            <JMenuItem> Phoenix Baker </JMenuItem>
            <JMenuItem> Phoenix Baker </JMenuItem>
            <JMenuItem> Phoenix Baker </JMenuItem>
            <JMenuItem> Phoenix Baker </JMenuItem>
            <JMenuItem> Phoenix Baker </JMenuItem>
            <JMenuItem> Phoenix Baker </JMenuItem>
            <JMenuItem> Phoenix Baker </JMenuItem>
        </JMenu>
    </div>
</template>
<script>
export default {
    emits: ['update:modelValue'],
    props: ['modelValue', 'field'],
    methods: {
        onInput(event) {
            this.$emit('update:modelValue', event.target.value)
        },
    },
    computed: {
        fieldType() {
            return this.field.type || 'text'
        },
        fieldReadonly() {
            return this.field.readonly || false
        },
        fieldPlaceholder() {
            return this.field.placeholder || `Nhập ${this.field.label.toLowerCase()}`
        },
    },
}
</script>
