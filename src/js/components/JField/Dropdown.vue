<template>
    <div @click="$event.stopPropagation()">
        <input
            class="input dropdown"
            :id="field.name"
            :name="field.name"
            type="text"
            :value="modelValue"
            autocomplete="off"
            :readonly="true"
            @focus="isFocus = true"
            :placeholder="fieldPlaceholder"
            v-bind="{ ...$attrs }"
        />
        <!-- Dropdown menu -->
        <div v-show="isFocus" class="dropdown-menu">
            <JMenu class="max-h-[320px] overflow-y-auto">
                <JMenuItem @click="onSelect('Phoenix Baker 1')"> Phoenix Baker 1</JMenuItem>
                <JMenuItem @click="onSelect('Phoenix Baker 2')"> Phoenix Baker 2</JMenuItem>
                <JMenuItem @click="onSelect('Phoenix Baker 3')">Phoenix Baker 3</JMenuItem>
                <JMenuItem @click="onSelect('Phoenix Baker 4')"> Phoenix Baker 4</JMenuItem>
                <JMenuItem @click="onSelect('Phoenix Baker 5')"> Phoenix Baker 5</JMenuItem>
                <JMenuItem @click="onSelect('Phoenix Baker 6')"> Phoenix Baker 6</JMenuItem>
                <JMenuItem @click="onSelect('Phoenix Baker 7')"> Phoenix Baker 7</JMenuItem>
                <JMenuItem @click="onSelect('Phoenix Baker 8')"> Phoenix Baker 8</JMenuItem>
            </JMenu>
        </div>
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
    mounted() {
        document.addEventListener('click', this.onClickOutSide)
    },
    unmounted() {
        document.removeEventListener('click', this.onClickOutSide)
    },

    data() {
        return { isFocus: false }
    },

    methods: {
        onSelect(value) {
            this.$emit('update:modelValue', value)
            this.isFocus = false
        },
        onClickOutSide() {
            this.isFocus = false
        },
    },
}
</script>
