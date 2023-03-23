<template>
    <div class="checkbox" :class="{ 'is-disabled': disabled }">
        <label class="label" :for="fieldId">
            <input
                type="checkbox"
                class="input"
                :id="fieldId"
                :value="modelValue"
                @input="onInput"
                :checked="modelValue"
            />
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
            <p v-if="field.help" class="help">{{ field.help }}</p>
        </label>
    </div>
</template>
<script>
import JIconTickCheckbox from '../JIcon/TickCheckbox.vue'
export default {
    components: { JIconTickCheckbox },
    props: ['field', 'modelValue', 'disabled'],
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
