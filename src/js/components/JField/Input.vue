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
        <input
            class="input"
            :value="modelValue"
            @input="onInput"
            v-bind="{ ...$attrs }"
            :type="field.type ?? 'text'"
            :placeholder="field.placeholder"
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
    methods: {
        onInput(event) {
            this.$emit('update:modelValue', event.target.value)
        },
    },
}
</script>
