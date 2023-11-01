<template>
    <input
        class="input"
        :id="field.name"
        :name="field.name"
        @input="onInput"
        :type="fieldType"
        :value="modelValue"
        autocomplete="off"
        :readonly="fieldReadonly"
        :placeholder="fieldPlaceholder"
        v-bind="fieldAttrs"
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
        fieldAttrs() {
            return this.field.attrs || {}
        },
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
