<template>
    <div class="radio" :class="{ 'is-disabled': disabled }">
        <label class="label" :for="fieldId">
            <input
                class="input"
                type="radio"
                :id="fieldId"
                :value="field.value"
                :checked="isChecked"
                @input="$emit('update:modelValue', $event.target.value)"
            />
            <div class="checkmark"></div>
            <template v-if="$slots.default"> <slot /> </template>
            <template v-else>
                {{ field.label }}
                <p v-if="field.help" class="help">{{ field.help }}</p>
            </template>
        </label>
    </div>
</template>
<script>
export default {
    props: ['field', 'modelValue', 'disabled'],
    emits: ['update:modelValue'],
    computed: {
        isChecked() {
            return this.modelValue?.toString() === this.field.value?.toString()
        },

        fieldId() {
            return 'ID' + Math.random().toString(36).substr(2, 9).toUpperCase()
        },
    },
}
</script>
