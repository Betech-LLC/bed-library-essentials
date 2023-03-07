<template>
    <fieldset>
        <label v-if="field.label" :for="field.name" class="text-gray-700 label-2 mb-1 md:b-1.5">{{
            field.label
        }}</label>

        <div
            class="field"
            :class="{
                'has-prefix': !!$slots.prefix,
                'has-suffix': !!$slots.suffix,
                disabled: !!disabled,
                'is-error': isError,
            }"
        >
            <template v-if="$slots.prefix">
                <slot name="prefix"></slot>
            </template>
            <!--  -->
            <JFieldText
                v-if="!field.type || field.type === 'text' || field.type === 'email' || field.type === 'password'"
                :field="field"
                :modelValue="modelValue"
                @update:modelValue="$emit('update:modelValue', $event)"
            />
            <JFieldText
                v-if="field.type === 'number'"
                :field="field"
                inputmode="numeric"
                :modelValue="modelValue"
                @update:modelValue="$emit('update:modelValue', $event)"
                onkeypress="return event.charCode >= 48 && event.charCode =< 57"
                onkeydown="return event.keyCode !== 69 && event.keyCode !== 190"
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
