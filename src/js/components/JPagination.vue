<template>
    <div class="pagination-card">
        <h2 v-if="title" class="pagination-card-title">{{ title }}</h2>
        <div class="pagination-card-grid">
            <div class="pagination-card-grid-item" v-for="(item, index) in items.slice(0, counter)" :key="index">
                <slot name="card" :item="item" :index="index" />
            </div>
        </div>

        <div v-if="restItems > 0" class="pagination-card-button">
            <button @click="onPagination" class="btn btn-secondary">
                <slot name="button" :quantity="restItems" :title="title"> xem thêm {{ restItems }} {{ title }} </slot>
            </button>
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
