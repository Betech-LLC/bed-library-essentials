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
                <JMenuItem v-for="option in field.options" @click="onSelect(option.name)"> {{ option.name }}</JMenuItem>
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
