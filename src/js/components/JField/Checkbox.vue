<template>
    <div v-if="field" class="checkbox" :class="{ 'is-disabled': disabled }">
        <label class="label" :for="keyID">
            <input
                type="checkbox"
                class="input"
                :id="keyID"
                :value="modelValue"
                @input="$emit('update:modelValue', $event.target.checked)"
            />
            <div class="checkmark">
                <template v-if="$slots.icon">
                    <slot name="icon" />
                </template>
                <JIconTickCheckbox v-else />
            </div>
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
        keyID() {
            return `checkbox-${this.field.label}`
        },
    },
}
</script>
