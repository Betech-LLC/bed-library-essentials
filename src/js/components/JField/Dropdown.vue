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
        <!-- Dropdown menu -->
        <div v-show="isShow" class="dropdown-wrapper">
            <ul class="dropdown-items max-h-[320px] overflow-y-auto">
                <li
                    v-for="option in field.options"
                    @click="onSelect(option[keyBy])"
                    class="dropdown-item"
                    :class="{ active: modelValue?.toString() === option[keyBy]?.toString() }"
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
        document.addEventListener('click', this.onClickOutSide)
    },
    unmounted() {
        document.removeEventListener('click', this.onClickOutSide)
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
        onClickOutSide() {
            this.isShow = false
        },
    },
}
</script>
