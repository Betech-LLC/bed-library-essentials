<template>
    <a
        class="j-banner-ads"
        v-if="item"
        :href="item.link"
        :rel="item.target === '_blank' ? 'nofollow noreferrer' : ''"
        :target="item.target || '_blank'"
    >
        <JPicture
            wrapperClass="picture-contain"
            :src="item.image?.url || item.image_url"
            :mobileSrc="item.image_mobile?.url || item.image_mobile_url"
            :alt="item.image?.alt || item.alt || item.title"
        />
    </a>
</template>

<script>
import JPicture from '@core/components/JPicture.vue'

export default {
    components: { JPicture },

    props: {
        item: {
            type: Object,
            default: null,
        },
    },
}
</script>
