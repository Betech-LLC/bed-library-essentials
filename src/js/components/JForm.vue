<template lang="">
    <form>
        <slot />
    </form>
</template>
<script>
import { reactive } from 'vue'
export default {
    name: 'Form',
    props: {
        modelValue: {
            type: Object,
            default: () => ({}),
        },
        config: {
            type: Object,
            default: () => ({}),
        },
    },
    provide() {
        return {
            setValue: (field, value) => {
                this.form[field.name] = value
            },
            getValue: (field) => {
                return this.form[field.name]
            },
            form: reactive(this.form),
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
            handler(value) {
                this.$emit('update:modelValue', value)
            },
        },
    },
}
</script>
