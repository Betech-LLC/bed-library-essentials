<template>
    <transition leave-active-class="lg:duration-200">
        <div v-show="show" class="modal-popup">
            <transition
                enter-active-class="ease-out lg:duration-300"
                enter-from-class="opacity-0"
                enter-to-class="opacity-100"
                leave-active-class="ease-in lg:duration-200"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
            >
                <div v-show="show" class="modal-popup-layer" @click="close">
                    <div class="modal-popup-shape"></div>
                </div>
            </transition>
            <slot class="modal-popup-close" name="close"></slot>

            <transition
                enter-active-class="ease-out lg:duration-300"
                enter-from-class="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
                enter-to-class="translate-y-0 opacity-100 sm:scale-100"
                leave-active-class="ease-in lg:duration-200"
                leave-from-class="translate-y-0 opacity-100 sm:scale-100"
                leave-to-class="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
            >
                <div v-show="show" class="modal-popup-body" :class="[modalClass, maxWidthClass]">
                    <slot />
                </div>
            </transition>
        </div>
    </transition>
</template>

<script>
export default {
    props: {
        show: {
            type: Boolean,
        },
        maxWidth: {
            default: '2xl',
        },
        modalClass: {
            type: String,
            default: '',
        },
    },

    computed: {
        maxWidthClass() {
            return {
                sm: 'sm:max-w-sm',
                md: 'sm:max-w-md',
                lg: 'sm:max-w-lg',
                xl: 'sm:max-w-xl',
                '2xl': 'sm:max-w-2xl',
                '3xl': 'sm:max-w-3xl',
                '4xl': 'sm:max-w-4xl',
                '5xl': 'sm:max-w-5xl',
                '6xl': 'sm:max-w-6xl',
                '7xl': 'sm:max-w-7xl',
                '60vw': 'sm:max-w-60vw',
                '70vw': 'sm:max-w-70vw',
                '80vw': 'sm:max-w-80vw',
                '90vw': 'sm:max-w-90vw',
                screen: 'max-w-screen max-h-screen',
            }[this.maxWidth]
        },
    },

    watch: {
        show(value) {
            if (value) {
                document.body.style.overflow = 'hidden'
            } else {
                document.body.style.overflow = null
            }
        },
    },

    mounted() {
        document.addEventListener('keydown', this.closeOnEscape)
    },
    destroyed() {
        document.removeEventListener('keydown', this.closeOnEscape)
        document.body.style.overflow = null
    },

    methods: {
        close() {
            this.$emit('close')
        },
        closeOnEscape(e) {
            if (e.key === 'Escape' && this.show) {
                this.close()
            }
        },
    },
}
</script>
