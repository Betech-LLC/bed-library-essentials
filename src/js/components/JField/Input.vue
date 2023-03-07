<template>
    <div
        class="field"
        :class="{
            'has-prefix': !!$slots.prefix,
            'has-suffix': !!$slots.suffix,
        }"
    >
        <template v-if="$slots.prefix">
            <slot name="prefix"></slot>
        </template>

        <JFieldInit
            v-if="!field.type || field.type === 'text' || field.type === 'email' || field.type === 'password'"
            :field="field"
            :modelValue="modelValue"
            @update:modelValue="$emit('update:modelValue', $event)"
        />

        <JFieldInit
            v-if="field.type === 'number'"
            :field="field"
            inputmode="numeric"
            :modelValue="modelValue"
            @update:modelValue="$emit('update:modelValue', $event)"
            onkeypress="return event.charCode >= 48 && event.charCode =< 57"
            onkeydown="return event.keyCode !== 69 && event.keyCode !== 190"
        />

        <template v-if="$slots.suffix">
            <slot name="suffix"></slot>
        </template>

        <!-- TODO: Chưa chuẩn hóa nội dung content cho từng field -->
        <small v-if="field.hintText || isError" class="message" :class="{ 'is-error': isError }">
            {{ isError ? 'This is a error message.' : field.hintText }}
        </small>
    </div>
</template>

<script>
import { validateField } from '../../lib/validator'
export default {
    emits: ['update:modelValue'],
    props: ['modelValue', 'field'],

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
