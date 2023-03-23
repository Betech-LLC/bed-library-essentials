<template>
    <!-- TODO: Component này chuyển qua Library -->
    <div class="inline-flex items-center h-8 bg-white border border-gray-300 rounded-lg shadow-xs md:h-10">
        <button
            @click="decrease"
            :class="quantity === 1 && 'pointer-events-none opacity-50'"
            class="inline-flex items-center justify-center w-8 h-full md:w-11"
        >
            <JIconMinus />
        </button>
        <input
            type="number"
            ref="inputQuantity"
            inputmode="numeric"
            :value="quantity"
            autocomplete="off"
            @blur="onBlur($event.target.value)"
            onkeypress="return event.charCode >= 48 && event.charCode =< 57"
            onkeydown="return event.keyCode !== 69 && event.keyCode !== 190"
            class="block w-10 h-full text-center text-gray-700 md:w-12 border-x-gray-300 border-x focus:outline-0 label-2"
        />
        <button @click="increase" class="inline-flex items-center justify-center w-8 h-full md:w-11">
            <JIconPlus />
        </button>
    </div>
</template>
<script>
import JIconPlus from '@core/components/JIcon/Plus.vue'
import JIconMinus from '@core/components/JIcon/Minus.vue'
export default {
    emits: ['update:quantity'],
    props: ['quantity'],

    methods: {
        increase() {
            this.$emit('update:quantity', Number(this.quantity) + 1)
        },
        decrease() {
            this.$emit('update:quantity', Number(this.quantity) - 1)
        },
        onBlur(quantity) {
            quantity = Number(quantity)
            if (quantity === 0 || quantity < 0) {
                quantity = 1
                this.$refs.inputQuantity.value = quantity
            }
            this.$emit('update:quantity', quantity)
        },
    },
}
</script>
