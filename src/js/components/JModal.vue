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
            <div @click="close" class="modal-popup-close">
                <slot name="close"></slot>
            </div>

            <transition
                enter-active-class="ease-out lg:duration-300"
                enter-from-class="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
                enter-to-class="translate-y-0 opacity-100 sm:scale-100"
                leave-active-class="ease-in lg:duration-200"
                leave-from-class="translate-y-0 opacity-100 sm:scale-100"
                leave-to-class="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
            >
                <div v-show="show" class="modal-popup-body" :class="[modalClass, maxWidthClass]">
                    <div @click="close" class="modal-popup-close">
                        <slot name="close-inner"></slot>
                    </div>

                    <slot @close="close" />
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
                sm: 'max-width-sm',
                md: 'max-width-md',
                lg: 'max-width-lg',
                xl: 'max-width-xl',
                '2xl': 'max-width-2xl',
                '3xl': 'max-width-3xl',
                '4xl': 'max-width-4xl',
                '5xl': 'max-width-5xl',
                '6xl': 'max-width-6xl',
                '7xl': 'max-width-7xl',
                '60vw': 'max-width-60vw',
                '70vw': 'max-width-70vw',
                '80vw': 'max-width-80vw',
                '90vw': 'max-width-90vw',
                screen: 'max-screen',
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
            console.log('close run')
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
