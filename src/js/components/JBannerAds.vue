<template>
    <a v-if="item" :href="item.link" :target="item.target || '_blank'">
        <JPicture
            wrapperClass="picture-contain"
            :src="item.image.url || item.image || '/placeholder.png'"
            :mobileSrc="item.image_mobile?.url || item.image_mobile"
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
