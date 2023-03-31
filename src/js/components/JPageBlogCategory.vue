<template>
    <main>
        <JBanner class="banner-sm" :item="bannerTop">
            <div class="page-blog-category-banner-body">
                <JBreadcrumb :items="breadcrumb">
                    <template #icon>
                        <slot name="icon">
                            <JIconArrowRight />
                        </slot>
                    </template>
                </JBreadcrumb>
                <h1 class="page-blog-category-banner-title">{{ staticContent.title }}</h1>
            </div>
        </JBanner>

        <section class="page-blog-category-tab">
            <div v-if="categories && categories.length" class="page-blog-category-tab-wrap">
                <JTabs :currentPath="currentPath" :categories="categories" />
            </div>
        </section>

        <section class="page-blog-category">
            <div class="page-blog-category-wrap">
                <div v-if="top_posts && top_posts.length" class="page-blog-category-top-posts">
                    <div class="left">
                        <JCardBlog class="card-item" :item="top_posts[0]" />
                    </div>

                    <div class="right">
                        <JCardBlog
                            v-for="(post, index) in top_posts.slice(1, 4)"
                            :key="index"
                            class="card-item card-blog-sm card-blog-row card-blog-no-description card-blog-mobile-row"
                            :item="post"
                        />
                    </div>
                </div>

                <div class="page-blog-category-body">
                    <div class="left">
                        <div class="card-items">
                            <JCardBlog
                                v-for="(post, index) in posts_data"
                                :key="index"
                                class="card-item card-blog-md card-blog-row"
                                :item="post"
                            />
                        </div>

                        <div v-if="posts.current_page < posts.last_page" class="page-blog-category-button">
                            <button @click.prevent="$emit('seeMore', posts.next_page_url)" class="btn-see-more">
                                <a :href="posts.next_page_url">
                                    {{ staticContent.seeMore }} {{ posts.total - posts.to }}
                                    {{ staticContent.type }}
                                </a>
                            </button>
                        </div>
                    </div>
                    <div class="right">
                        <JBlogSideBar :items="top_views">
                            <template #title>{{ staticContent.mostView }}</template></JBlogSideBar
                        >

                        <div v-if="banner" class="banner-ads-wrap">
                            <JBannerAds :item="banner" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import JBanner from '@core/components/JBanner.vue'
import JCardBlog from '@core/components/JCardBlog.vue'
import JBannerAds from '@core/components/JBannerAds.vue'
import JBlogSideBar from '@core/components/JBlogSideBar.vue'
import JBreadcrumb from '@core/components/JBreadcrumb.vue'
import JIconArrowRight from '@core/components/JIcon/ArrowRight.vue'
import JTabs from '@core/components/JTabs.vue'

export default {
    components: { JBanner, JCardBlog, JBannerAds, JBlogSideBar, JBreadcrumb, JIconArrowRight, JTabs },
    props: {
        bannerTop: Object,
        breadcrumb: Array,
        banner: Object,
        top_posts: Array,
        top_views: Array,
        posts_data: Array,
        posts: Object,
        categories: Array,
        currentPath: String,
        staticContent: {
            type: Object,
            default: () => {
                return {
                    title: 'Tin tức',
                    seeMore: 'Xem thêm',
                    type: 'bài viết',
                    mostView: 'Lượt xem nhiều nhất',
                }
            },
        },
    },
}
</script>
