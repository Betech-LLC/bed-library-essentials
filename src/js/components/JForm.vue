<template>
    <form @submit.prevent="submit">
        <slot />
    </form>
</template>
<script>
import { reactive } from 'vue'
import { validateField, validateForm } from '@core/utils'
export default {
    props: {
        modelValue: {
            type: Object,
            default: () => ({}),
        },
        rules: {
            type: Object,
            default: () => ({}),
        },
    },
    provide() {
        return {
            form: reactive(this.form),
            errors: reactive(this.errors),
            setValue: (field, value) => {
                this.form[field.name] = value
            },
            getValue: (field) => {
                return this.form[field.name]
            },
            setErrors: (fieldName, fieldValue) => {
                const isValidField = validateField(fieldValue, this.rules[fieldName])
                if (isValidField) {
                    delete this.errors[fieldName]
                } else {
                    this.errors[fieldName] = ''
                }
            },
            resetForm: () => {
                const keyFields = Object.keys(this.form)
                keyFields.forEach((keyField) => {
                    this.form[keyField] = ''
                })
            },

            checkValidForm: () => {
                const errors = validateForm(this.form, this.rules)
                const keyFields = Object.keys(errors)
                const isError = keyFields.length > 0
                if (isError) {
                    Object.keys(errors).forEach((keyField) => {
                        this.errors[keyField] = ''
                    })
                }
                return !isError
            },
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
        submit() {
            const isValidForm = this.$.provides.checkValidForm()
            if (!isValidForm) return
            alert(`Submit Success ${JSON.stringify(this.form)}`)
            this.$.provides.resetForm()
        },
    },
}
</script>
