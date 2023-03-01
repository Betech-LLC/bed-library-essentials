<template>
    <div v-if="item" class="card-blog">
        <JLink :href="item.url">
            <JPicture :src="item.image?.url" :alt="item.image?.alt" wrapperClass="card-blog-image"> </JPicture>
        </JLink>
        <div class="card-blog-body">
            <div class="card-blog-meta">
                <JLink :href="item.category.url" v-if="item.category" class="card-blog-badge">{{
                    item.category.title
                }}</JLink>
                <span class="card-blog-date">{{ toDate(item.published_at) }}</span>
            </div>

            <h3 v-if="item.title" class="card-blog-title">
                <JLink :href="item.url">{{ item.title }}</JLink>
            </h3>
            <p v-if="item.description" class="card-blog-description" v-html="item.description"></p>
        </div>
    </div>
</template>
<script>
import { toDate } from '@core/utils'
import JPicture from '@core/components/JPicture.vue'
import JLink from '@core/components/JLink.vue'
export default {
    components: { JPicture, JLink },
    props: {
        item: {
            type: Object,
        },
    },

    methods: {
        toDate,
    },
}
</script>
