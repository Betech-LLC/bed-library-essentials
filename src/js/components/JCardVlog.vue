<template>
    <div v-if="item" class="card-vlog">
        <div class="card-vlog-head">
            <a @click.prevent="viewDetail" class="card-vlog-image" :href="item.url">
                <JPicture :src="item.image?.url" :alt="item.image?.alt || item.title"> </JPicture>
            </a>
            <a v-if="item.time" @click.prevent="viewDetail" :href="item.url" class="card-vlog-time">
                <div class="icon">
                    <JIconPlay />
                </div>
                <p class="time">{{ item.time }}</p>
            </a>
        </div>
        <div class="card-vlog-body">
            <h3 v-if="item.title" class="card-vlog-title">
                <a @click.prevent="viewDetail" :href="item.url">{{ item.title }}</a>
            </h3>
            <p v-if="item.description" class="card-vlog-description" v-html="item.description"></p>
        </div>
    </div>
</template>
<script>
import JPicture from '@core/components/JPicture.vue'
import JIconPlay from '@core/components/JIcon/Play.vue'
export default {
    components: { JPicture, JIconPlay },
    props: {
        item: {
            type: Object,
        },
    },

    methods: {
        viewDetail() {
            window.history.pushState({}, '', this.item.url)

            this.$emit('viewVideo', this.item)
        },
    },
}
</script>
