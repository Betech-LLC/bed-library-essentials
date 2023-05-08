<template>
    <div class="slider-items">
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
                    <button class="btn-slide btn-next" @click="navigate('next')"><JIconChevronRight /></button>
                </template>

                <template v-if="pagination" #dots="{ dots, current, navigate }">
                    <slot name="slide-pagination" :dots="dots" :current="current" :navigate="navigate">
                        <div class="slider-pagination">
                            <div class="slider-pagination-wrap">
                                <div
                                    v-for="(_, index) in dots"
                                    :key="index"
                                    @click="navigate(index)"
                                    class="slider-pagination-item"
                                    :class="current === index ? 'active' : ''"
                                ></div>
                            </div></div
                    ></slot>
                </template>
            </JSlider>
        </ClientOnly>
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
            default: { cols: '1.2', gutter: '8px', align: 'start', loop: true },
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
            default: false,
        },
        pagination: {
            type: Boolean,
            default: false,
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
            const quantity =
                this.breakpoints.xl?.cols || this.breakpoints.lg?.cols || this.breakpoints.md?.cols || this.config?.cols
            return Number(quantity)
        },
    },
}
</script>
