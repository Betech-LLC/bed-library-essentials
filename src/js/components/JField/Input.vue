<template>
    <div
        class="field"
        :class="{
            'has-prefix': !!$slots.prefix,
            'has-suffix': !!$slots.suffix,
            'has-hint': !!field.hintText,
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

        <small class="message" :class="{ error: isError }">
            {{ field.hintText }}
        </small>
    </div>
</template>

<script>
export default {
    emits: ['update:modelValue'],
    props: ['modelValue', 'field'],

    data() {
        return {
            isError: false,
        }
    },
    methods: {
        onInput(event) {
            this.$emit('update:modelValue', event.target.value)
        },
    },
}
</script>
