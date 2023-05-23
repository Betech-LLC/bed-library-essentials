<template>
    <main class="page-blog-category" :class="`layout-${layout}`">
        <JBanner v-if="layout === 1" class="banner-sm" :item="bannerTop">
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

        <section class="page-blog-category-head">
            <div v-if="layout === 2" class="page-blog-category-breadcrumb">
                <JBreadcrumb :isH1="true" :items="breadcrumb">
                    <template #icon>
                        <slot name="icon">
                            <JIconArrowRight />
                        </slot>
                    </template>
                </JBreadcrumb>
            </div>

            <div v-if="categories && categories.length" class="page-blog-category-tab">
                <div class="page-blog-category-tab-wrap">
                    <JTabs :currentPath="currentPath" :categories="categories" />
                </div>
            </div>

            <JTopViewPosts v-if="layout === 2" :top_views="top_views" />
            <JTopPosts :layout="layout" :top_posts="top_posts" />
        </section>

        <div class="page-blog-category-body">
            <div class="left">
                <div class="card-items">
                    <JCardBlog
                        v-for="(post, index) in posts_data"
                        :key="index"
                        class="card-item"
                        :class="{ 'card-blog-md card-blog-row': layout === 1 }"
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

                <div v-if="banner" class="j-banner-ads-wrap">
                    <JBannerAds :item="banner" />
                </div>
            </div>
        </div>

        <JFormNotification :urlApiForm="urlApiForm" />
    </main>
</template>

<script>
import JIconArrowRight from '@core/components/JIcon/ArrowRight.vue'
import JBanner from '@core/components/JBanner.vue'
import JBannerAds from '@core/components/JBannerAds.vue'
import JBlogSideBar from '@core/components/JBlogSideBar.vue'
import JBreadcrumb from '@core/components/JBreadcrumb.vue'
import JCardBlog from '@core/components/JCardBlog.vue'
import JFormNotification from '@core/components/JFormNotification.vue'
import JTabs from '@core/components/JTabs.vue'
import JTopPosts from '@core/components/JTopPosts.vue'
import JTopViewPosts from '@core/components/JTopViewPosts.vue'
export default {
    components: {
        JIconArrowRight,
        JBanner,
        JBannerAds,
        JBlogSideBar,
        JBreadcrumb,
        JCardBlog,
        JFormNotification,
        JTabs,
        JTopPosts,
        JTopViewPosts,
    },
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
        urlApiForm: String,

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
        layout: {
            type: Number,
            default: 1,
        },
    },
}
</script>
