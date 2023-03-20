<template>
    <div v-if="field" class="checkbox" :class="{ 'is-disabled': disabled }">
        <label class="label" :for="keyID">
            <div v-if="$slots.checkmark">
                <slot name="checkmark" :label="field.label" />
            </div>

            <template v-else>
                <div class="checkmark">
                    <JIconTickCheckbox />
                </div>
                <span>
                    {{ field.label }}
                </span>
            </template>

            <input type="checkbox" class="input" :id="keyID" :value="modelValue" @input="onInput" />
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
            console.log('onInput', e)
            this.$emit('update:modelValue', e.target.checked)
        },
    },
}
</script>
