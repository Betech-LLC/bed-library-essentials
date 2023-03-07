<template>
    <fieldset>
        <label v-if="field.label" :for="field.name" class="text-gray-700 label-2 mb-1 md:b-1.5">{{
            field.label
        }}</label>

        <div
            class="field"
            :class="{
                disabled: !!disabled,
                'is-error': isError,
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

            <small v-if="field.hintText || isError" class="message">
                {{ isError ? 'This is a error message.' : field.hintText }}
            </small>
        </div>
    </fieldset>
</template>

<script>
import { validateField } from '../../lib/validator'
export default {
    emits: ['update:modelValue'],
    props: ['modelValue', 'field', 'disabled'],

    data() {
        return {
            isError: false,
        }
    },
    watch: {
        modelValue(newVal) {
            this.isError = !validateField(newVal, this.field.rules[this.field.fieldName])
        },
    },
}
</script>
