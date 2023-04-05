<template>
    <div class="slider-items">
        <h2 v-if="title" class="slider-title">{{ title }}</h2>
        <ClientOnly
            ><JSlider
                :config="{
                    ...config,
                    total: items.length,
                }"
                :breakpoints="{ ...breakpoints }"
                class="slider"
            >
                <JSlide v-for="(item, index) in items" :key="index">
                    <slot name="slide-item" :item="item" />
                </JSlide>
                <template #arrows="{ navigate }">
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
            default: { cols: '1.5', gutter: '8px', align: 'start' },
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
        rowItems: {
            type: Number,
            default: 3,
        },
    },
    data() {
        return {
            COUNTER_INIT: this.rowItems,
        }
    },
    mounted() {
        this.setInitScreen()
    },

    methods: {
        setInitScreen() {
            const isScreenXL = window.matchMedia('(min-width: 1280px)').matches
            const isScreenLG = window.matchMedia('(min-width: 1024px)').matches
            if (isScreenXL) {
                this.COUNTER_INIT = this.rowItems
                return
            } else if (isScreenLG) {
                this.COUNTER_INIT = this.rowItems - 1
                return
            } else {
                this.COUNTER_INIT = this.rowItems - 2
            }
        },
    },
}
</script>
