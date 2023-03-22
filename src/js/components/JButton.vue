<template>
    <button class="btn" :class="{ disabled: disabled }">
        <slot>
            <span>{{ label }}</span>
        </slot>
    </button>
</template>

<script>
export default {
    props: {
        onClick: {
            type: Function,
            required: false,
        },
        label: {
            type: String,
            default: null,
        },

        loading: {
            type: Boolean,
            default: false,
        },
    },

    computed: {
        disabled() {
            return this.$attrs.disabled || this.loading
        },
    },
}
</script>
