<template>
    <main>
        <section class="blog-detail-page">
            <div class="left">
                <JBreadcrumb :items="breadcrumb">
                    <template #icon>
                        <JIconArrowRight />
                    </template>
                </JBreadcrumb>

                <div class="blog-detail-page-head">
                    <h1 class="blog-detail-page-title">{{ post.title }}</h1>
                    <div class="blog-detail-page-meta">
                        <JLink :href="post.category.url" v-if="post.category" class="blog-detail-page-badge">{{
                            post.category.title
                        }}</JLink>
                        <span class="blog-detail-page-date">{{ toDate(post.published_at, language) }}</span>
                    </div>
                </div>

                <div class="blog-detail-page-description" v-html="post.description"></div>

                <div class="blog-detail-page-toc" v-if="post.isToc">
                    <div class="head" @click="isOpenToc = !isOpenToc">
                        <span class="title"> Nội dung bài viết </span>
                        <span class="icon" :class="{ show: isOpenToc }">
                            <JIconChevron />
                        </span>
                    </div>
                    <div class="body" v-show="isOpenToc">
                        <div class="toc-1" v-for="(tab, index) in content.toc" :key="index">
                            <a class="toc-1-link" :href="`#${tab.slug}`" v-html="tab.content"> </a>
                            <template v-if="tab.children.length > 0">
                                <div
                                    v-for="(tabChildren, indexChildren) in tab.children"
                                    :key="indexChildren"
                                    class="toc-2"
                                >
                                    <a class="toc-2-link" :href="`#${tabChildren.slug}`" v-html="tabChildren.content">
                                    </a>
                                </div>
                            </template>
                        </div>
                    </div>
                </div>

                <div class="blog-detail-page-content" v-html="content.html"></div>

                <div class="blog-detail-page-bottom">
                    <div class="tags">
                        <a :href="tag.url" v-for="(tag, index) in post.tags" :key="index" class="tag">{{
                            tag.title
                        }}</a>
                    </div>
                    <JSocialShare zaloOAId="1111640952861619960" />
                </div>
            </div>
            <div class="right">
                <JBlogSideBar :items="top_posts">Tin nổi bật</JBlogSideBar>

                <div v-if="banner" class="banner-ads-wrap">
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
import JBlogSideBar from '@core/components/JBlogSideBar.vue'
import JSocialShare from '@core/components/JSocialShare.vue'
import JIconChevron from '@core/components/JIcon/ChevronDown.vue'
import { toDate } from '@core/utils'
import { useTransformContent } from '@core/utils'

export default {
    components: { JCardBlog, JBlogSideBar, JBannerAds, JBreadcrumb, JIconChevron, JSocialShare },
    props: ['breadcrumb', 'posts_data', 'tag', 'banner', 'post', 'isOpenToc', 'top_posts'],

    data() {
        return {
            content: this.useTransformContent(this.post.content, ['h3', 'h4']),
            isOpenToc: true,
        }
    },

    methods: {
        toDate,
        useTransformContent,
    },
}
</script>
