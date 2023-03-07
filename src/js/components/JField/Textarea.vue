<template>
    <textarea
        class="input"
        :rows="field.rows ?? 3"
        :id="field.name"
        :name="field.name"
        :value="modelValue"
        @input="onInput"
        type="textarea"
        autocomplete="off"
        :readonly="field.readonly ?? false"
        :placeholder="field.placeholder"
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
