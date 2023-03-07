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
                :modelValue="modelValue"
                @update:modelValue="$emit('update:modelValue', $event)"
            />

            <JFieldPhone
                v-if="field.type === 'number'"
                :field="field"
                :modelValue="modelValue"
                @update:modelValue="$emit('update:modelValue', $event)"
            />

            <JFieldTextarea
                v-if="field.type === 'textarea'"
                :field="field"
                :modelValue="modelValue"
                @update:modelValue="$emit('update:modelValue', $event)"
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
import { validateField } from '@core/utils/validator'
export default {
    emits: ['update:modelValue'],
    props: ['modelValue', 'field', 'disabled'],

    data() {
        return {
            isError: false,
        }
    },
    computed: {
        error() {
            return this.field.name ? this.field.errors[this.field.name] : ''
        },
    },
    watch: {
        modelValue(newVal) {
            this.isError = !validateField(newVal, this.field.rules[this.field.name])
        },
        error() {
            this.checkValidate()
        },
    },
    methods: {
        checkValidate() {
            this.isError = this.field.errors.hasOwnProperty(this.field.fieldName)
        },
    },
}
</script>
