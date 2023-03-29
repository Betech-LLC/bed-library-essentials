<template>
    <div class="checkbox checkbox-custom" :class="{ 'is-disabled': disabled }">
        <label class="label" :for="fieldId">
            <input
                type="checkbox"
                class="input"
                :id="fieldId"
                :value="modelValue"
                @input="onInput"
                :checked="modelValue"
            />
            <slot />
        </label>
    </div>
</template>
<script>
export default {
    props: ['modelValue', 'disabled'],
    emits: ['update:modelValue'],
    computed: {
        fieldId() {
            return 'ID' + Math.random().toString(36).substr(2, 9).toUpperCase()
        },
    },
    methods: {
        onInput(event) {
            let value = event.target.value
            if (
                value.toString() === 'false' ||
                value.toString() === 'true' ||
                this.modelValue === undefined ||
                this.modelValue === null
            ) {
                value = event.target.checked
            }
            this.$emit('update:modelValue', value)
        },
    },
}
</script>
