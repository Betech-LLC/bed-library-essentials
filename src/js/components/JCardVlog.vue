<template>
    <div v-if="item" class="card-vlog">
        <div class="card-vlog-head">
            <JLink @click="viewDetail" class="card-vlog-image" :href="item.url">
                <JPicture :src="item.image?.url" :alt="item.image?.alt || item.title"> </JPicture>
            </JLink>
            <JLink @click="viewDetail" :href="item.url" class="card-vlog-time">
                <div class="icon">
                    <JIconPlay />
                </div>
                <p class="time">{{ item.time }}</p>
            </JLink>
        </div>
        <div class="card-vlog-body">
            <h3 v-if="item.title" class="card-vlog-title">
                <JLink @click="viewDetail" :href="item.url">{{ item.title }}</JLink>
            </h3>
            <p v-if="item.description" class="card-vlog-description" v-html="item.description"></p>
        </div>
    </div>
</template>
<script>
import JPicture from '@core/components/JPicture.vue'
import JLink from '@core/components/JLink.vue'
import JIconPlay from '@core/components/JIcon/Play.vue'
export default {
    components: { JPicture, JLink, JIconPlay },
    props: {
        item: {
            type: Object,
        },
    },

    methods: {
        viewDetail(e) {
            e.preventDefault()

            window.history.pushState({}, '', this.item.url)

            this.$emit('viewVideo', this.item)
        },
    },
}
</script>
