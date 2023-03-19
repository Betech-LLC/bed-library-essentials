<template>
    <div @click="$event.stopPropagation()" class="dropdown">
        <input
            type="text"
            class="input"
            :readonly="true"
            :id="field.name"
            :name="field.name"
            @click="onToggle"
            :value="selectedOption"
            :placeholder="fieldPlaceholder"
        />
        <div v-show="isShow" class="dropdown-content">
            <ul class="dropdown-items max-h-[320px] overflow-y-auto">
                <li
                    class="dropdown-item"
                    v-for="option in field.options"
                    @click="onSelect(option[keyBy])"
                    :class="{ active: modelValue && modelValue.toString() === option[keyBy].toString() }"
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
            const option = this.field.options.find((option) => {
                return this.modelValue === option[this.keyBy]
            })
            return option ? option[this.labelBy] : null
        },
        fieldPlaceholder() {
            return this.field.placeholder || `Chọn ${this.field.label.toLowerCase()}`
        },
    },
    mounted() {
        document.addEventListener('click', this.closeMenuDropdown)
    },
    unmounted() {
        document.removeEventListener('click', this.closeMenuDropdown)
    },
    data() {
        return { isShow: false }
    },
    methods: {
        onToggle() {
            this.isShow = !this.isShow
        },
        onSelect(value) {
            this.$emit('update:modelValue', value)
            this.isShow = false
        },
        closeMenuDropdown() {
            this.isShow = false
        },
    },
}
</script>
