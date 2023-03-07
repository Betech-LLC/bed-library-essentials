<template>
    <input
        class="input"
        :id="field.name"
        :name="field.name"
        @input="onInput"
        :type="fieldType"
        autocomplete="off"
        :readonly="fieldReadonly"
        :placeholder="fieldPlaceholder"
        v-bind="{ ...$attrs }"
    />
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
            const fieldLabel = this.field.label ? `Nhập ${this.field.label.toLowerCase()}` : 'Nhập...'
            return this.field.placeholder || fieldLabel
        },
    },
}
</script>
