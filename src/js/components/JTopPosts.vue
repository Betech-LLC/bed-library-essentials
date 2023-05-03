<template>
    <div v-if="top_posts && top_posts.length" class="page-blog-category-top-posts">
        <div class="page-blog-category-top-posts-wrap">
            <div class="left">
                <JCardBlog class="card-item" :item="top_posts[0]" />
            </div>

            <div class="right">
                <JCardBlog
                    v-for="(post, index) in top_posts.slice(1, countItem + 1)"
                    :key="index"
                    class="card-item card-blog-sm card-blog-no-description"
                    :class="layout === 1 ? 'card-blog-row card-blog-mobile-row' : ''"
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
        top_posts: Array,
        layout: {
            type: Number,
            default: 1,
        },
    },

    data() {
        return {
            countItem: this.layout === 1 ? 3 : 4,
        }
    },
}
</script>
