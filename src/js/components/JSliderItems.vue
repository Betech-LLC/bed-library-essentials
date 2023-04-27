<template>
    <div class="slider-items">
        <h2 v-if="title" class="slider-title">{{ title }}</h2>
        <ClientOnly
            ><JSlider
                :config="{
                    ...config,
                    total: total,
                }"
                :breakpoints="{ ...breakpoints }"
                :autoplay="autoplay"
                :slidesPerView="slidesPerView"
                class="slider"
            >
                <JSlide v-for="(item, index) in items" :key="index">
                    <slot name="slide-item" :item="item" />
                </JSlide>
                <template #arrows="{ navigate }" v-if="total > rowItems">
                    <button class="rotate-180 btn-slide btn-prev" @click="navigate('prev')">
                        <JIconChevronRight />
                    </button>
                    <button class="btn-slide btn-next" @click="navigate('next')">
                        <JIconChevronRight />
                    </button>
                </template> </JSlider
        ></ClientOnly>
    </div>
</template>

<script>
import JSlide from '@core/components/JSlide.vue'
import JSlider from '@core/components/JSlider.vue'
import JIconChevronRight from '@core/components/JIcon/ChevronRight.vue'
export default {
    components: { JSlide, JSlider, JIconChevronRight },
    props: {
        title: {
            type: String,
        },
        items: {
            type: Array,
            default: [],
        },
        config: {
            type: Object,
            default: { cols: '1.6', gutter: '8px', align: 'start' },
        },
        breakpoints: {
            type: Object,
            default: {
                md: {
                    cols: '2.5',
                    gutter: '10px',
                },
                lg: {
                    cols: '3',
                    gutter: '10px',
                },
                xl: {
                    cols: '3',
                    gutter: '16px',
                },
            },
        },
        autoplay: {
            type: [Number, Boolean, Object],
            default: true,
        },
        slidesPerView: {
            type: Number,
            default: 1,
        },
    },

    computed: {
        total() {
            return this.items.length
        },
        rowItems() {
            const quantity = this.breakpoints.xl?.cols || this.breakpoints.lg?.cols || this.breakpoints.md?.cols
            return Number(quantity)
        },
    },
}
</script>
