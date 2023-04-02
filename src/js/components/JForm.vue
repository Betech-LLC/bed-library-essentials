<template>
    <form @submit.prevent="submit">
        <slot />
    </form>
</template>
<script>
import { reactive } from 'vue'
import { validateForm } from '@core/utils'
export default {
    props: {
        modelValue: {
            type: Object,
            default: () => ({}),
        },
    },

    provide() {
        return {
            form: reactive(this.form),
        }
    },

    data() {
        return { form: this.modelValue, errors: {} }
    },
    watch: {
        form: {
            deep: true,
            handler(newForm) {
                this.$emit('update:modelValue', newForm)
            },
        },
    },
    methods: {
        async submit() {
            console.log('onsubmit run')
        },
        resetForm() {
            const keyFields = Object.keys(this.form)
            keyFields.forEach((keyField) => {
                this.form[keyField] = null
            })
        },
        validateForm() {
            const errors = validateForm(this.form, this.rules)
            const invalidFields = Object.keys(errors)
            const hasErrors = invalidFields.length > 0
            if (hasErrors) {
                invalidFields.forEach((field) => {
                    this.errors[field] = null
                })
            }
            return !hasErrors
        },
    },
}
</script>
