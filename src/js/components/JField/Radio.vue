<template>
    <div v-if="field" class="radio" :class="{ 'is-disabled': disabled }">
        <label class="label" :for="`radio-${field.name}`">
            <input
                class="input"
                type="radio"
                :name="field.name"
                :id="`radio-${field.name}`"
                :value="modelValue"
                @input="onchange"
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

    methods: {
        onchange(e) {
            this.$emit('update:modelValue', e.target.checked)
        },
    },
}
</script>
