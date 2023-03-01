<template>
    <picture :class="wrapperClass">
        <source media="(max-width: 767px)" :srcset="mobileImageSourceSet" />
        <source media="(max-width: 1439px)" :srcset="originImageSourceSet" />
        <img v-bind="$attrs" :src="originImageSource" :alt="altImage" :loading="loading" />
    </picture>
</template>

<script>
import { removeAccent, toBasename } from '@core/utils'

export default {
    inheritAttrs: false,
    props: {
        src: {
            type: String,
            require: false,
        },
        alt: {
            type: String,
            require: false,
        },
        mobileSrc: {
            type: String,
            require: false,
        },
        placeholderSrc: {
            type: String,
            default: '/placeholder.png',
        },
        wrapperClass: {
            type: String,
        },
        loading: {
            type: String,
            default: 'lazy',
        },
    },

    computed: {
        originImageSource() {
            return this.src || this.mobileSrc || this.placeholderSrc
        },
        originImageSourceSet() {
            const width = this.$attrs['width'] || '1000'
            return encodeURI(`${this.originImageSource}?w=${width}`)
        },
        mobileImageSourceSet() {
            const width = this.$attrs['mobile-width'] || '500'
            return encodeURI(`${this.mobileSrc || this.originImageSource}?w=${width}`)
        },
        altImage() {
            return removeAccent(toBasename(this.alt || this.originImageSource))
        },
    },
}
</script>
