<template>
    <div class="field-quantity">
        <button
            @click="decrease"
            :class="modelValue === 1 && 'disable'"
            class="field-quantity-btn"
            aria-label="button-decrease"
        >
            <JIconMinus />
        </button>
        <input
            type="number"
            ref="inputQuantity"
            inputmode="numeric"
            :value="modelValue"
            autocomplete="off"
            @blur="onBlur($event.target.value)"
            onkeypress="return event.charCode >= 48 && event.charCode =< 57"
            onkeydown="return event.keyCode !== 69 && event.keyCode !== 190"
            class="field-quantity-input"
        />
        <button @click="increase" class="field-quantity-btn" aria-label="button-increase">
            <JIconPlus />
        </button>
    </div>
</template>
<script>
import JIconPlus from '@core/components/JIcon/Plus.vue'
import JIconMinus from '@core/components/JIcon/Minus.vue'
export default {
    emits: ['update:modelValue'],
    props: ['modelValue'],

    methods: {
        increase() {
            this.$emit('update:modelValue', Number(this.modelValue) + 1)
        },
        decrease() {
            this.$emit('update:modelValue', Number(this.modelValue) - 1)
        },
        onBlur(quantity) {
            quantity = Number(quantity)
            if (quantity === 0 || quantity < 0) {
                quantity = 1
                this.$refs.inputQuantity.value = quantity
            }
            this.$emit('update:modelValue', quantity)
        },
    },
}
</script>
