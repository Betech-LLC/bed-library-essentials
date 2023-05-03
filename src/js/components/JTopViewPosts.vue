<template>
    <div v-if="top_views && top_views.length" class="page-blog-category-top-view">
        <div class="left">
            <JCardBlog class="card-item" :item="top_views[0]" />
        </div>

        <div class="right">
            <div class="title">Bài viết xem nhiều</div>
            <div class="list">
                <JCardBlog
                    v-for="(post, index) in top_views.slice(1, 6)"
                    :key="index"
                    class="card-item card-blog-no-description card-blog-no-image"
                    :item="post"
                />
            </div>
        </div>
    </div>
</template>

<script>
import JCardBlog from '@core/components/JCardBlog.vue'
export default {
    components: {
        JCardBlog,
    },
    props: {
        top_views: Array,
    },
}
</script>
