<template>
    <JSliderItems
        v-if="items && items.length"
        class="slider-ads"
        :items="items"
        :pagination="true"
        :autoplay="true"
        :config="{ cols: 1, gutter: '0px' }"
        :breakpoints="{}"
    >
        <template #slide-item="{ item }">
            <a
                :href="item.link"
                :rel="item.target === '_blank' ? 'nofollow noreferrer' : ''"
                :target="item.target || '_blank'"
                class="slider-ads-link"
            >
                <JPicture
                    :src="item.image?.url || item.image_url"
                    :mobileSrc="item.image_mobile?.url || item.image_mobile_url"
                    :alt="item.image?.alt || item.alt || item.title"
                    wrapperClass="slider-ads-image picture-cover "
                />
            </a>
        </template>
    </JSliderItems>
</template>

<script>
import JPicture from '@core/components/JPicture.vue'
import JSliderItems from '@core/components/JSliderItems.vue'

export default {
    components: { JPicture, JSliderItems },

    props: {
        items: {
            type: Array,
            default: null,
        },
    },
}
</script>
