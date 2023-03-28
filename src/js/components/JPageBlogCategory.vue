<template>
    <main>
        <JBanner class="banner-sm" v-if="bannerTop" :item="bannerTop">
            <div class="blog-category-banner-body">
                <JBreadcrumb :items="breadcrumb">
                    <template #icon>
                        <JIconArrowRight />
                    </template>
                </JBreadcrumb>
                <h1 class="blog-category-banner-title">Tin tức</h1>
            </div>
        </JBanner>

        <section class="blog-category">
            <div class="blog-category-wrap">
                <div v-if="top_posts && top_posts.length" class="blog-category-top-posts">
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

                <div class="blog-category-body">
                    <div class="left">
                        <div class="card-items">
                            <JCardBlog
                                v-for="(post, index) in posts_data"
                                :key="index"
                                class="card-item card-blog-md card-blog-row"
                                :item="post"
                            />
                        </div>

                        <div class="blog-category-button">
                            <button class="btn-see-more">Xem thêm 16 bài viết</button>
                        </div>
                    </div>
                    <div class="right">
                        <JBlogSideBar :items="top_views" />

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

export default {
    components: { JBanner, JCardBlog, JBannerAds, JBlogSideBar, JBreadcrumb },
    props: ['bannerTop', 'breadcrumb', 'banner', 'top_posts', 'top_views', 'posts_data'],
}
</script>
