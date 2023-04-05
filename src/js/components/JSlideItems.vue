<template>
    <JSlider
        :config="{
            total: items.length,
            ...config,
        }"
        :breakpoints="{ ...breakpoints }"
    >
        <JSlide v-for="(item, index) in items" :key="index"> {{ item }} </JSlide>
        <template v-if="items && items.length > COUNTER_INIT" #arrows="{ navigate }">
            <button @click="navigate('prev')">
                <JIconChevronRight class="rotate-180" />
            </button>
            <button @click="navigate('next')"><JIconChevronRight /></button>
        </template>
    </JSlider>
</template>

<script>
export default {
    props: {
        items: {
            type: Array,
            default: [],
        },
        config: { cols: '1.8', align: 'start', gutter: '4px' },
        breakpoints: {
            sm: {
                cols: '2.2',
                gutter: '6px',
            },
            md: {
                cols: '3',
                gutter: '6px',
            },
            lg: {
                cols: '4',
                gutter: '6px',
            },
            xl: {
                cols: '5',
                gutter: '6px',
            },
        },
    },
    data() {
        return {
            COUNTER_INIT: 5,
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
                this.COUNTER_INIT = 5
                return
            } else if (isScreenLG) {
                this.COUNTER_INIT = 4
                return
            } else {
                this.COUNTER_INIT = 3
            }
        },
    },
}
</script>
