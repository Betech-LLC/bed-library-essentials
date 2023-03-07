<template>
    <input
        class="input"
        :id="field.name"
        :name="field.name"
        @input="onInput"
        :type="field.type ?? 'text'"
        autocomplete="off"
        :readonly="field.readonly ?? false"
        :placeholder="field.placeholder || 'Nhập...'"
        v-bind="{ ...$attrs }"
    />
</template>
<script>
export default {
    emits: ['update:modelValue'],
    props: ['modelValue', 'field'],
    methods: {
        onInput(event) {
            this.$emit('update:modelValue', event.target.value)
        },
    },
}
</script>
