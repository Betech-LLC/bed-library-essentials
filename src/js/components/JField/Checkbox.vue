<template>
    <div v-if="field" class="checkbox">
        <label class="font-medium label-2">
            <input type="checkbox" :name="field.name" :id="field.id" :value="modelValue" @change="onchange" />
            <div class="checkmark">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path
                        d="M9 1L3.5 6.5L1 4"
                        stroke="currentColor"
                        stroke-width="1.6666"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
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
