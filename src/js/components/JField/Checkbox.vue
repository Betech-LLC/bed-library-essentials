<template>
    <div v-if="field" class="checkbox">
        <label class="font-medium label-2" :for="field.name">
            <input type="checkbox" :name="field.name" :id="field.name" :value="modelValue" @change="onchange" />
            <div class="checkmark">
                <template v-if="$slots.icon">
                    <slot name="icon" />
                </template>
                <JIconTickCheckbox v-else />
            </div>
            {{ field.label }}
        </label>
        <p v-if="field.hint" class="hint">{{ field.hint }}</p>
    </div>
</template>
<script>
export default {
    props: ['field', 'modelValue'],
    emits: ['update:modelValue', 'pushToUrl'],

    methods: {
        onchange(e) {
            this.$emit('update:modelValue', e.target.checked)
            this.$emit('pushToUrl')
        },
    },
}
</script>
