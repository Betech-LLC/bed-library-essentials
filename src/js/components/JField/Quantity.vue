<template>
    <fieldset class="quantity">
        <button
            @click="decrease"
            :class="modelValue === 1 && 'disable'"
            class="quantity-btn"
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
            class="quantity-input"
        />
        <button
            @click="increase"
            class="quantity-btn"
            aria-label="button-increase"
            :class="modelValue >= max && 'disable'"
        >
            <JIconPlus />
        </button>
    </fieldset>
</template>
<script>
import JIconPlus from '@core/components/JIcon/Plus.vue'
import JIconMinus from '@core/components/JIcon/Minus.vue'
export default {
    props: ['modelValue'],
    emits: ['update:modelValue'],
    components: { JIconPlus, JIconMinus },
    data() {
        return {
            max: this.$attrs.max || 99,
        }
    },
    methods: {
        increase() {
            if (this.modelValue >= this.max) return
            this.$emit('update:modelValue', Number(this.modelValue) + 1)
        },
        decrease() {
            this.$emit('update:modelValue', Number(this.modelValue) - 1)
        },
        onBlur(quantity) {
            quantity = Number(quantity)
            if (quantity <= 0 || quantity > this.max) {
                quantity = quantity <= 0 ? 1 : this.max
                this.$refs.inputQuantity.value = quantity
            }
            this.$emit('update:modelValue', quantity)
        },
    },
}
</script>
