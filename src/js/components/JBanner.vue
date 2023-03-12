<template>
    <section class="banner">
        <div class="banner-image">
            <JPicture
                :src="item.image?.url || item.image_url"
                :mobileSrc="item.image_mobile?.url || item.image_mobile_url"
                :alt="item.image?.alt || item.alt || item.title"
                loading="eager"
                wrapperClass="picture-cover"
            />
            <slot />
        </div>
    </section>
</template>
<script>
import JPicture from '@core/components/JPicture.vue'
export default {
    components: { JPicture },
    props: {
        item: {
            type: Object,
            default: () => {
                return {}
            },
        },
    },
}
</script>
