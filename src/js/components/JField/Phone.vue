<template>
    <JFieldText
        :field="field"
        inputmode="numeric"
        :modelValue="modelValue"
        @update:modelValue="$emit('update:modelValue', $event)"
        onkeypress="return event.charCode >= 48 && event.charCode =< 57"
        onkeydown="return event.keyCode !== 69 && event.keyCode !== 190"
    />
</template>
<script>
export default { emits: ['update:modelValue'], props: ['modelValue', 'field'] }
</script>
