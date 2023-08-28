<template>
    <fieldset>
        <label :for="field.name">
            <span v-if="field.label" class="label"> {{ fieldLabel }}</span>
            <div
                class="field"
                :class="{
                    'is-disabled': !!disabled,
                    'is-error': !!isError,
                    'is-success': isSuccess,
                    'has-prefix': !!$slots.prefix,
                    'has-suffix': !!$slots.suffix,
                }"
            >
                <div v-if="$slots.prefix" class="prefix">
                    <slot name="prefix"></slot>
                </div>

                <JFieldText
                    v-if="!field.type || field.type === 'text' || field.type === 'email'"
                    :field="field"
                    :modelValue="modelValue"
                    @update:modelValue="onInput"
                />
                <JFieldPassword
                    v-else-if="field.type === 'password'"
                    :field="field"
                    :modelValue="modelValue"
                    @update:modelValue="onInput"
                />

                <JFieldCheckbox
                    v-else-if="field.type === 'checkbox'"
                    :modelValue="modelValue"
                    :field="field"
                    @update:modelValue="onInput"
                />

                <JFieldUploadFile
                    v-else-if="field.type === 'upload_file'"
                    :modelValue="modelValue"
                    :field="field"
                    @update:modelValue="onInput"
                />

                <JFieldCheckboxMultiple
                    v-else-if="field.type === 'checkbox_multiple'"
                    :modelValue="modelValue"
                    :field="field"
                    @update:modelValue="onInput"
                />
                <JFieldPhone
                    v-else-if="field.type === 'number'"
                    :modelValue="modelValue"
                    :field="field"
                    @update:modelValue="onInput"
                />

                <JFieldDropdown
                    v-else-if="field.type === 'dropdown'"
                    :field="field"
                    :modelValue="modelValue"
                    @update:modelValue="onInput"
                />

                <JFieldTextarea
                    v-else-if="field.type === 'textarea'"
                    :field="field"
                    :modelValue="modelValue"
                    @update:modelValue="onInput"
                />

                <div v-if="$slots.suffix" class="suffix">
                    <slot name="suffix"></slot>
                </div>

                <small v-if="field.help || isError" class="help">
                    {{ isError ? message : field.help }}
                </small>
            </div>
        </label>
    </fieldset>
</template>

<script>
import { useValidateField } from '@core/composables'
import JFieldText from '@core/components/JField/Text.vue'
import JFieldPhone from '@core/components/JField/Phone.vue'
import JFieldDropdown from '@core/components/JField/Dropdown.vue'
import JFieldTextarea from '@core/components/JField/Textarea.vue'
import JFieldCheckbox from '@core/components/JField/Checkbox.vue'
import JFieldCheckboxMultiple from '@core/components/JField/CheckboxMultiple.vue'
import JFieldUploadFile from '@core/components/JField/UploadFile.vue'
// TODO
import JFieldPassword from '@core/components/JField/Password.vue'
export default {
    components: {
        JFieldText,
        JFieldPhone,
        JFieldDropdown,
        JFieldTextarea,
        JFieldUploadFile,
        JFieldCheckbox,
        JFieldCheckboxMultiple,
        JFieldPassword,
    },
    emits: ['update:modelValue'],
    props: {
        modelValue: { type: Object },
        field: {
            type: Object,
            default: () => {
                return {}
            },
        },
        rules: {
            type: Object,
            default: () => {
                return {}
            },
        },
        errors: {
            type: Object,
            default: () => {
                return {}
            },
        },
        disabled: { type: Boolean, default: false },
    },
    data() {
        return {
            isError: false,
            isSuccess: false,
        }
    },

    computed: {
        fieldLabel() {
            return this.field.label + ` ${this.rules[this.field.name]?.includes('required') ? '*' : ''}`
        },
        message() {
            const fieldError = Array.isArray(this.errors[this.field.name]) ? this.errors[this.field.name][0] : null
            return fieldError || this.field.error || `${this.field.label} không hợp lệ`
        },
    },
    watch: {
        modelValue(newVal) {
            if (!newVal && this.isSuccess) {
                this.isSuccess = false
            }
        },
        errors(newErrors) {
            this.isError = newErrors.hasOwnProperty(this.field.name)
        },
    },
    methods: {
        onInput(fieldValue) {
            this.$emit('update:modelValue', fieldValue)
            const isValid = useValidateField({
                value: fieldValue,
                rule: this.rules[this.field.name] || '',
            })
            this.isError = !isValid

            if (fieldValue && isValid) {
                this.isSuccess = true
            } else {
                this.isSuccess = false
            }
        },
    },
}
</script>
