<template lang="">
    <form>
        <slot />
    </form>
</template>
<script>
export default {
    name: 'Form',
    props: {
        modelValue: {
            type: Object,
            default: () => ({}),
        },
        rules: {
            type: Object,
            default: () => ({}),
        },
        errors: {
            type: Object,
            default: () => ({}),
        },
    },
    provide() {
        return {
            form: this.form,
            rules: this.rules,
            errors: this.errors,
            setValue: (field, value) => {
                this.form[field.name] = value
            },
            getValue: (field = {}) => {
                return this.form[field.name]
            },
        }
    },
    data() {
        return {
            form: this.modelValue,
        }
    },
    watch: {
        form: {
            deep: true,
            handler(newForm) {
                this.$emit('update:modelValue', newForm)
            },
        },
    },
}
</script>
