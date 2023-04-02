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
                :modelValue="modelValue"
                @update:modelValue="onInput"
            />

            <JFieldCheckbox
                v-else-if="field.type === 'checkbox'"
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
    </fieldset>
</template>

<script>
import { useForm } from '@core/composables'
import JFieldText from '@core/components/JField/Text.vue'
import JFieldPhone from '@core/components/JField/Phone.vue'
import JFieldDropdown from '@core/components/JField/Dropdown.vue'
import JFieldTextarea from '@core/components/JField/Textarea.vue'
const { useValidateField } = useForm()
export default {
    components: { JFieldText, JFieldPhone, JFieldDropdown, JFieldTextarea },
    emits: ['update:modelValue'],
    props: {
        modelValue: { type: Object, required: true },
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
        }
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
    },
    watch: {
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
        },
    },
}
</script>
