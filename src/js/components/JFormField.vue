<template>
    <fieldset>
        <label v-if="showLabel" :for="field.name" class="label">{{ field.label }}</label>
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
            <JFieldPhone v-else-if="field.type === 'number'" :field="field" @update:modelValue="onChangeField" />

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
                {{ isError ? errors[field.name] : field.help }}
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
    inject: {
        form: { default: () => {} },
        rules: { default: () => {} },
        errors: { default: () => {} },
    },
    computed: {
        showLabel() {
            return this.field.label && this.field.type !== 'checkbox' && this.field.type !== 'checkbox_multiple'
        },

        isError() {
            return this.errors.hasOwnProperty(this.field.name)
        },
        fieldValue() {
            return this.modelValue || this.form[this.field.name]
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
