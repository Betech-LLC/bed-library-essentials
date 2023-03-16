<template>
    <div v-if="field" class="checkbox">
        <label class="font-medium label-2" :for="field.name">
            <input type="checkbox" :name="field.name" :id="field.name" :value="modelValue" @input="onchange" />
            <div class="checkmark">
                <template v-if="$slots.icon">
                    <slot name="icon" />
                </template>
                <JIconTickCheckbox v-else />
            </div>
            {{ field.label }}
        </label>
        <p v-if="field.help" class="hint">{{ field.help }}</p>
    </div>
</template>
<script>
export default {
    props: ['field', 'modelValue'],
    emits: ['update:modelValue', 'pushToUrl'],

    methods: {
        onchange(e) {
            console.log('e.target.checked = ', e.target.checked)
            this.$emit('update:modelValue', e.target.checked)
            this.$emit('pushToUrl')
        },
    },
}
</script>
