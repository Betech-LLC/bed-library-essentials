<template>
    <div @click="$event.stopPropagation()" class="dropdown">
        <input
            class="input"
            :id="field.name"
            :name="field.name"
            type="text"
            :value="selectedOption"
            :readonly="true"
            @focus="isFocus = true"
            :placeholder="fieldPlaceholder"
            v-bind="{ ...$attrs }"
        />
        <!-- Dropdown menu -->
        <div v-show="isFocus" class="dropdown-wrapper">
            <ul class="dropdown-menu max-h-[320px] overflow-y-auto">
                <li
                    v-for="option in field.options"
                    @click="onSelect(option[keyBy])"
                    class="dropdown-menu-item"
                    :class="{ active: modelValue === option[keyBy] }"
                >
                    {{ option[labelBy] }}
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    emits: ['update:modelValue'],
    props: ['modelValue', 'field'],

    computed: {
        keyBy() {
            return this.field.keyBy || 'id'
        },
        labelBy() {
            return this.field.labelBy || 'name'
        },
        selectedOption() {
            const option = this.field.options.find((o) => {
                return this.modelValue === o[this.keyBy]
            })
            return option ? option[this.labelBy] : null
        },
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
