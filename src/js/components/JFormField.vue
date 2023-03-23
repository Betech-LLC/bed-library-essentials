<template>
    <fieldset>
        <label v-if="showLabel" :for="field.name" class="label">{{ fieldLabel }}</label>
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
                :modelValue="form[field.name]"
                @update:modelValue="onChangeField"
            />

            <JFieldCheckbox
                v-else-if="field.type === 'checkbox'"
                :modelValue="fieldValue"
                :field="field"
                @update:modelValue="onChangeField"
            />

            <JFieldCheckboxMultiple
                v-else-if="field.type === 'checkbox_multiple'"
                :modelValue="fieldValue"
                :field="field"
                @update:modelValue="onChangeField"
            />
            <JFieldPhone
                v-else-if="field.type === 'number'"
                :modelValue="form[field.name]"
                :field="field"
                @update:modelValue="onChangeField"
            />

            <JFieldDropdown
                v-else-if="field.type === 'dropdown'"
                :field="field"
                :modelValue="form[field.name]"
                @update:modelValue="onChangeField"
            />

            <JFieldTextarea
                v-else-if="field.type === 'textarea'"
                :field="field"
                :modelValue="form[field.name]"
                @update:modelValue="onChangeField"
            />

            <div v-if="$slots.suffix" class="suffix">
                <slot name="suffix"></slot>
            </div>

            <small v-if="field.help || isError" class="help">
                {{ isError ? message : field.help }}
            </small>
        </div>
    </fieldset>
</template>

<script>
import { validateField } from '@core/utils'
import JFieldText from '@core/components/JField/Text.vue'
import JFieldPhone from '@core/components/JField/Phone.vue'
import JFieldDropdown from '@core/components/JField/Dropdown.vue'
import JFieldTextarea from '@core/components/JField/Textarea.vue'

export default {
    components: { JFieldText, JFieldPhone, JFieldDropdown, JFieldTextarea },
    emits: ['update:modelValue', 'modelValue'],
    props: {
        field: {
            type: Object,
            default: () => {},
        },
        disabled: { type: Boolean, default: false },
    },
    data() {
        return {
            isError: false,
        }
    },
    inject: {
        form: { default: () => {} },
        rules: { default: () => {} },
        errors: { default: () => {} },
    },
    computed: {
        showLabel() {
            return this.field.label && this.field.type !== 'checkbox' && this.field.type !== 'checkbox_multiple'
        },
        fieldLabel() {
            return this.field.label + ` ${this.rules[this.field.name]?.includes('required') ? '*' : ''}`
        },
        message() {
            return this.field.error || `${this.field.label} không hợp lệ`
        },

        fieldValue() {
            return this.modelValue || this.form[this.field.name]
        },
    },
    watch: {
        errors: {
            handler(newErrors) {
                this.isError = newErrors.hasOwnProperty(this.field.name)
            },
            deep: true,
        },
    },
    methods: {
        onChangeField(fieldValue) {
            this.form[this.field.name] = fieldValue
            this.validateField(fieldValue)
        },
        validateField(fieldValue) {
            const isValidField = validateField(fieldValue, this.rules[this.field.name])
            if (isValidField) {
                delete this.errors[this.field.name]
            } else {
                this.errors[this.field.name] = null
            }
        },
    },
}
</script>
