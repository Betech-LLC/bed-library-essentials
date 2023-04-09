<template>
    <div class="container">
        <h2 v-if="title" class="mb-3 text-gray-900 headline-2">{{ title }}</h2>
        <div
            class="grid grid-cols-2"
            :class="{
                'md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-1 md:gap-x-2 xl:gap-x-3 gap-y-3 md:gap-y-4 xl:gap-y-6':
                    Number(cols) === 5,
                'lg:grid-cols-4 gap-y-3 md:gap-y-4 xl:gap-y-6 gap-x-4 md:gap-x-6 xl:gap-x-8': Number(cols) === 4,
            }"
        >
            <div class="col-span-1" v-for="(item, index) in items.slice(0, counter)" :key="index">
                <slot name="card" :item="item" />
            </div>
        </div>

        <div v-if="restItems > 0" class="flex justify-center mt-3 md:mt-4 xl:mt-6">
            <button @click="onPagination" class="btn btn-secondary">xem thêm {{ restItems }} {{ title }}</button>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        items: {
            type: Array,
            default: () => [],
        },
        title: {
            type: String,
        },
        cols: {
            type: Number,
            default: 5,
        },
    },
    data() {
        return {
            counter: Number(this.cols) * 2,
            counterDefault: Number(this.cols) * 2,
        }
    },
    computed: {
        restItems() {
            return this.items.length - this.counter
        },
    },
    mounted() {
        this.setInitScreen()
    },

    methods: {
        onPagination() {
            if (this.counter >= this.items.length) {
                return
            }
            this.counter = this.counter + this.counterDefault
        },
        setInitScreen() {
            const isScreenXL = window.matchMedia('(min-width: 1280px)').matches
            const isScreenLG = window.matchMedia('(min-width: 1024px)').matches
            const isScreenMD = window.matchMedia('(min-width: 768px)').matches
            if (Number(this.cols) === 5) {
                if (isScreenXL) {
                    this.counter = Number(this.cols) * 2
                    this.counterDefault = this.counter
                    return
                } else if (isScreenLG) {
                    this.counter = (Number(this.cols) - 1) * 3
                    this.counterDefault = this.counter
                    return
                } else if (isScreenMD) {
                    this.counter = (Number(this.cols) - 2) * 3
                    this.counterDefault = this.counter
                    return
                } else {
                    this.counter = (Number(this.cols) - 3) * 4
                    this.counterDefault = this.counter
                    return
                }
            }
        },
    },
}
</script>
