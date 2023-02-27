<template>
    <picture>
        <source media="(max-width: 767px)" :srcset="srcMbEncode" />
        <source media="(max-width: 1439px)" :srcset="srcEncode" />
        <img :class="classCustom" :src="encodeURI(src)" :alt="alt || src || srcMb" :loading="loading" />
    </picture>
</template>

<script>
export default {
    props: {
        src: {
            type: String,
            default: '',
        },
        srcMb: {
            type: String,
            default: '',
        },
        alt: {
            type: String,
            default: '',
        },
        loading: {
            type: String,
            default: 'lazy',
        },
        width: {
            type: Number,
        },
        widthMb: {
            type: Number,
        },
        classCustom: {
            type: String,
        },
    },

    computed: {
        srcEncode() {
            const width = this.width ? `?w=${this.width}` : null
            const src = encodeURI(this.src)

            return width ? src + width : `${src}?w=1000`
        },
        srcMbEncode() {
            const width = this.widthMb ? `?w=${this.widthMb}` : this.width ? `?w=${this.width}` : null
            const src = encodeURI(this.srcMb || this.src)

            return width ? src + width : `${src}?w=500`
        },
    },
}
</script>
