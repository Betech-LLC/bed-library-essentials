<template>
    <fieldset>
        <label v-if="field.label" :for="field.name" class="label">{{ field.label }}</label>

        <div
            class="field"
            :class="{
                'is-disabled': !!disabled,
                'is-error': !!isError,
                'has-prefix': !!$slots.prefix,
                'has-suffix': !!$slots.suffix,
            }"
        >
            <div v-if="$slots.prefix" class="prefix">
                <slot name="prefix"></slot>
            </div>

            <JFieldText
                v-if="!field.type || field.type === 'text' || field.type === 'email' || field.type === 'password'"
                :field="field"
                :modelValue="getValue(field)"
                @update:modelValue="setValue(field, $event)"
            />

            <JFieldPhone
                v-if="field.type === 'number'"
                :field="field"
                :modelValue="getValue(field)"
                @update:modelValue="setValue(field, $event)"
            />

            <JFieldTextarea
                v-if="field.type === 'textarea'"
                :field="field"
                :modelValue="getValue(field)"
                @update:modelValue="setValue(field, $event)"
            />

            <div v-if="$slots.suffix" class="suffix">
                <slot name="suffix"></slot>
            </div>

            <small v-if="field.help || isError" class="message">
                {{ isError ? 'This is a error message.' : field.help }}
            </small>
        </div>
    </fieldset>
</template>

<script>
import { validateField } from '@core/utils'
export default {
    emits: ['update:modelValue'],
    props: {
        field: {
            type: Object,
            default: () => {},
        },
        disabled: { type: Boolean, default: false },
    },
    inject: {
        rules: { default: () => {} },
        errors: { default: () => {} },
        setValue: { default: () => () => ({}) },
        getValue: { default: () => () => ({}) },
    },
    data() {
        return {
            isError: false,
        }
    },
    computed: {
        error() {
            return this.errors[this.field.name] || ''
        },
        currentValue() {
            return this.getValue(this.field)
        },
    },
    watch: {
        error() {
            this.isError = this.errors[this.field.name]
        },
        currentValue(newVal) {
            this.isError = !validateField(newVal, this.rules[this.field.name])
        },
    },
}
</script>
