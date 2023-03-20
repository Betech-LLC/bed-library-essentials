<template>
    <div v-if="field" class="checkbox" :class="{ 'is-disabled': disabled }">
        <label class="label" :for="keyID">
            <input type="checkbox" class="input" :id="keyID" :value="modelValue" @input="onInput" />
            <template v-if="$slots.checkmark">
                <slot name="checkmark" :label="field.label" />
            </template>

            <template v-else>
                <div class="checkmark">
                    <JIconTickCheckbox />
                </div>
                <span>
                    {{ field.label }}
                </span>
            </template>
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

    methods: {
        onInput(e) {
            this.$emit('update:modelValue', e.target.value)
        },
    },
}
</script>
