<template>
    <main class="tag-page" :class="`layout-${layout}`" v-if="tag">
        <section class="tag-page-banner">
            <div class="content">
                <JBreadcrumb :items="breadcrumb">
                    <template #icon>
                        <JIconArrowRight />
                    </template>
                </JBreadcrumb>
                <div class="head">
                    <div class="icon">
                        <JIconHash />
                    </div>
                    <h1 class="title">{{ tag.title }}</h1>
                </div>
            </div>
        </section>

        <section class="tag-page-body">
            <div class="tag-page-wrap">
                <div class="left">
                    <div class="card-items">
                        <JCardBlog
                            v-for="(item, index) in posts_data"
                            :key="index"
                            class="card-item"
                            :class="{ 'card-blog-row': layout === 1 }"
                            :item="item"
                        />
                    </div>

                    <div v-if="posts.current_page < posts.last_page" class="tag-page-button">
                        <button @click.prevent="$emit('seeMore', posts.next_page_url)" class="btn-see-more">
                            <a :href="posts.next_page_url">
                                {{ staticContent.seeMore }} {{ posts.total - posts.to }}
                                {{ staticContent.type }}
                            </a>
                        </button>
                    </div>
                </div>

                <div v-if="banner" class="right">
                    <JBannerAds :item="banner" />
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import JCardBlog from '@core/components/JCardBlog.vue'
import JBannerAds from '@core/components/JBannerAds.vue'
import JBreadcrumb from '@core/components/JBreadcrumb.vue'
import JIconHash from '@core/components/JIcon/Hash.vue'
import JIconArrowRight from '@core/components/JIcon/ArrowRight.vue'

export default {
    components: { JCardBlog, JBannerAds, JBreadcrumb, JIconHash, JIconArrowRight },

    props: {
        breadcrumb: Object,
        posts: Object,
        posts_data: Array,
        tag: Object,
        banner: Object,
        staticContent: {
            type: Object,
            default: () => {
                return {
                    seeMore: 'Xem thêm',
                    type: 'bài viết',
                }
            },
        },
        layout: {
            type: Number,
            default: 1,
        },
    },

    data() {
        return {}
    },

    created() {
        this.breadcrumb.push({ title: this.tag.title })
    },
}
</script>
