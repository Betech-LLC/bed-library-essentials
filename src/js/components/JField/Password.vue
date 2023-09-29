<template>
    <JFieldText :field="fieldCustom" :modelValue="modelValue" @update:modelValue="$emit('update:modelValue', $event)" />
    <div v-if="fieldCustom.toggleMask" class="fieldset-password-toggle-mask" @click="toggleValue()">
        <slot name="password-icon" :type="type"></slot>
    </div>
</template>

<script>
import JFieldText from '@core/components/JField/Text.vue'
import JIconEyeOpen from '@core/components/JIcon/EyeOpen.vue'
import JIconEyeClose from '@core/components/JIcon/EyeClose.vue'
export default {
    props: ['field', 'modelValue'],
    emits: ['update:modelValue', 'update:togglePassword'],
    components: { JFieldText, JIconEyeOpen, JIconEyeClose },
    data() {
        return {
            type: 'password',
        }
    },
    computed: {
        fieldCustom() {
            return {
                ...this.field,
                type: this.type,
            }
        },
    },
    methods: {
        toggleValue() {
            if (this.type === 'password') {
                this.type = 'text'
            } else {
                this.type = 'password'
            }
        },
    },
}
</script>
