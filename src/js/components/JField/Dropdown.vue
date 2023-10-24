<template>
    <div v-click-outside="closeMenuDropdown" class="dropdown" :class="isShow ? 'active' : ''">
        <input
            type="text"
            class="input"
            :id="field.name"
            :readonly="true"
            :name="field.name"
            @click="onToggle"
            :value="selectedOption"
            :placeholder="fieldPlaceholder"
        />
        <div v-show="isShow && field.options && field.options.length > 0" class="dropdown-content">
            <ul class="dropdown-items">
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
    directives: {
        'click-outside': {
            beforeMount: (el, binding) => {
                el.clickOutsideEvent = (event) => {
                    if (!(el == event.target || el.contains(event.target))) {
                        binding.value()
                    }
                }
                document.addEventListener('click', el.clickOutsideEvent)
            },
            unmounted: (el) => {
                document.removeEventListener('click', el.clickOutsideEvent)
            },
        },
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
