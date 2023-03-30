<template>
    <main>
        <JBanner class="banner-sm" v-if="bannerTop" :item="bannerTop">
            <div class="page-blog-category-banner-body">
                <JBreadcrumb :items="breadcrumb">
                    <template #icon>
                        <JIconArrowRight />
                    </template>
                </JBreadcrumb>
                <h1 class="page-blog-category-banner-title">Vlog</h1>
            </div>
        </JBanner>
        <section class="page-vlog-category">
            <div class="page-vlog-category-body">
                <JListCardVlog @viewVideo="viewVideo" :vlogs="vlogs" />
                <div class="page-vlog-category-button">
                    <button class="btn-see-more">Xem thêm 16 bài viết</button>
                </div>
            </div>
        </section>

        <JPopupVlog
            @change="change"
            @viewVideo="viewVideo"
            @close="close"
            :isPlay="isPlay"
            :vlogs="vlogs"
            :isShow="isShow"
            :currentItem="currentItem"
        />
    </main>
</template>

<script>
import JPopupVlog from '@core/components/JPopupVlog.vue'
import JListCardVlog from '@core/components/JListCardVlog.vue'
import JIconArrowRight from '@core/components/JIcon/ArrowRight.vue'
import JBreadcrumb from '@core/components/JBreadcrumb.vue'
import JBanner from '@core/components/JBanner.vue'

export default {
    components: { JListCardVlog, JPopupVlog, JIconArrowRight, JBreadcrumb, JBanner },
    props: ['vlogs', 'breadcrumb', 'bannerTop'],

    data() {
        return {
            isShow: false,
            currentItem: null,
            currentUrl: null,
            isPlay: false,
        }
    },

    mounted() {
        this.currentUrl = window.location.href
    },

    methods: {
        viewVideo(currentItem) {
            this.isShow = true
            this.currentItem = currentItem
        },

        close() {
            this.isShow = false
            this.isPlay = false
            window.history.pushState({}, '', this.currentUrl)
        },

        change(play) {
            this.isPlay = play
        },
    },
}
</script>
