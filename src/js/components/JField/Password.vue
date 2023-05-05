<template>
    <JFieldText :field="field" :modelValue="modelValue" @update:modelValue="$emit('update:modelValue', $event)" />
    <div class="absolute left-0 text-gray-600">
        <JIconEyeOpen />
    </div>
</template>

<script>
import JFieldText from '@core/components/JField/Text.vue'
import JIconEyeOpen from '@core/components/JIcon/EyeOpen.vue'
import JIconEyeClose from '@core/components/JIcon/EyeClose.vue'
export default {
    components: { JFieldText, JIconEyeOpen, JIconEyeClose },
    emits: ['update:modelValue', 'update:togglePassword'],
    props: ['modelValue', 'field'],
}
</script>
