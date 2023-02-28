<template>
    <div v-if="item" class="card-blog">
        <a href="#">
            <img
                class="card-blog-image-top"
                :src="item.image && item.image.url ? item.image.url : '/cover.jpg'"
                :alt="item.image.alt"
            />
        </a>
        <div class="card-blog-body">
            <div class="card-blog-meta">
                <span v-if="item.category" class="card-blog-badge badge badge-primary badge-sm">{{
                    item.category.title
                }}</span>
                <span class="card-blog-published-date">{{ formatDate(item.published_at) }}</span>
            </div>

            <h3 v-if="item.title" class="card-blog-title">
                <a href="#">{{ item.title }}</a>
            </h3>
            <p v-if="item.description" class="card-blog-description" v-html="item.description"></p>
        </div>
    </div>
</template>
<script>
import { formatDate } from '../utils/format'
export default {
    props: {
        item: {
            type: Object,
        },
    },

    methods: {
        formatDate,
    },
}
</script>
