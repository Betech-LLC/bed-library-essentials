<template>
    <div v-if="field" class="radio" :class="{ 'is-disabled': disabled }">
        <label class="label" :for="keyID">
            <input
                class="input"
                type="radio"
                :id="keyID"
                :value="field.value"
                :checked="isChecked"
                @input="$emit('update:modelValue', $event.target.value)"
            />
            <div class="checkmark"></div>
            {{ field.label }}
        </label>

        <p v-if="field.help" class="help">{{ field.help }}</p>
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
        keyID() {
            return `radio-${this.field.label}`
        },
    },
}
</script>
