<template>
    <main>
        <JBanner class="banner-sm" v-if="bannerTop && bannerTop.image" :image="bannerTop.image">
            <div class="container pt-8">
                <div>Breadcrumb</div>
                <h1 class="mt-6 text-white display-2">Tin tức</h1>
            </div>
        </JBanner>

        <section class="py-16">
            <div class="container">
                <div
                    v-if="top_posts && top_posts.length"
                    class="grid grid-cols-2 pb-8 border-b border-gray-200 gap-x-8"
                >
                    <JCardBlog :item="top_posts[0]" />

                    <div class="space-y-5">
                        <JCardBlog
                            v-for="(post, index) in top_posts.slice(1, 4)"
                            :key="index"
                            class="pb-5 border-b border-gray-200 card-blog-sm card-blog-row card-blog-no-description last:pb-0 last:border-none"
                            :item="post"
                        />
                    </div>
                </div>

                <div class="grid grid-cols-7 mt-8 gap-x-8">
                    <div class="col-span-5 space-y-8">
                        <JCardBlog
                            v-for="(post, index) in posts_data"
                            :key="index"
                            class="card-blog-md card-blog-row"
                            :item="post"
                        />
                    </div>
                    <div class="col-span-2 xl:space-y-12 lg:space-y-8">
                        <div class="space-y-2 xl:space-y-4 md:space-y-3">
                            <h2 class="pb-1 text-gray-700 border-b border-gray-500 title-2">Lượt xem nhiều nhất</h2>
                            <div
                                class="max-lg:grid max-lg:grid-cols-2 max-md:grid-cols-1 max-lg:gap-[22px] max-md:gap-0 space-y-2 xl:space-y-4 md:space-y-3"
                            >
                                <JCardBlog
                                    v-for="(item, index) in top_posts"
                                    :key="index"
                                    class="pb-4 border-b border-gray-200 card-blog-xs card-blog-row custom-image last:border-none last:pb-0 max-lg:border-none"
                                    :item="item"
                                />
                            </div>
                        </div>

                        <div class="max-lg:hidden">
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

export default {
    components: { JBanner, JCardBlog, JBannerAds },
    props: ['bannerTop', 'banner', 'top_posts', 'top_views', 'posts_data'],
}
</script>
