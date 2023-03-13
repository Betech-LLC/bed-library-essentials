<template>
    <main class="tag-page" v-if="tag">
        <section class="tag-page-banner">
            <div class="content">
                <JBreadcrumb :items="breadcrumb">
                    <template #icon>
                        <JIconArrowRight />
                    </template>
                </JBreadcrumb>
                <div class="head">
                    <JIconHash />
                    <h1 class="title">{{ tag.title }}</h1>
                </div>
            </div>
        </section>

        <section class="tag-page-body">
            <div class="tag-page-title">Bài viết</div>
            <div class="tag-page-wrap">
                <div class="left">
                    <div class="card-items">
                        <JCardBlog
                            v-for="(item, index) in posts_data"
                            :key="index"
                            class="card-blog-row card-item"
                            :item="item"
                        />
                    </div>

                    <div class="tag-page-button">
                        <button class="btn-see-more">Xem thêm 16 bài viết</button>
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
import JIconHash from '@core/components/JIcon/Hash.vue'

export default {
    components: { JCardBlog, JBannerAds, JIconHash },
    props: ['breadcrumb', 'posts_data', 'tag', 'banner'],
}
</script>
