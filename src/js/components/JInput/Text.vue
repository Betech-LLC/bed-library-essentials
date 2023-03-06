<template>
    <input
        class="input"
        :value="modelValue"
        @input="onInput"
        :type="field?.type || 'text'"
        :placeholder="field?.placeholder ?? field?.label"
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
<style lang=""></style>
