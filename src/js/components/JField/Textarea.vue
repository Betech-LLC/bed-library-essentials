<template>
    <textarea
        class="input"
        :rows="fieldRows"
        :id="field.name"
        :name="field.name"
        :value="modelValue"
        @input="onInput"
        type="textarea"
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
        fieldPlaceholder() {
            const fieldLabel = this.field.label ? `Nhập ${this.field.label.toLowerCase()}` : 'Nhập...'
            return this.field.placeholder || fieldLabel
        },
        fieldReadonly() {
            return this.field.readonly || false
        },
        fieldRows() {
            return this.field.rows || 3
        },
    },
}
</script>
