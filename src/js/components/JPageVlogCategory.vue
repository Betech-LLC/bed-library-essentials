<template>
    <main>
        <JBanner class="banner-sm" v-if="bannerTop" :item="bannerTop">
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
        <section class="page-vlog-category">
            <div class="page-vlog-category-body">
                <JListCardVlog @viewVideo="viewVideo" :vlogs="vlogs_data" />
                <div v-if="vlogs.current_page < vlogs.last_page" class="page-vlog-category-button">
                    <button @click.prevent="$emit('seeMore', vlogs.next_page_url)" class="btn-see-more">
                        <a :href="vlogs.next_page_url">
                            {{ staticContent.seeMore }} {{ vlogs.total - vlogs.to }}
                            {{ staticContent.type }}
                        </a>
                    </button>
                </div>
            </div>
        </section>

        <JPopupVlog
            @change="change"
            @viewVideo="viewVideo"
            @close="close"
            :isPlay="isPlay"
            :vlogs="vlogs_data"
            :isShow="isShow"
            :currentItem="currentItem"
            :staticContent="staticContent"
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
    props: ['vlogs', 'vlogs_data', 'breadcrumb', 'bannerTop'],

    props: {
        vlogs: Object,
        vlogs_data: Array,
        breadcrumb: Array,
        bannerTop: Object,
        staticContent: {
            type: Object,
            default: () => {
                return {
                    title: 'Vlog',
                    seeMore: 'Xem thêm',
                    type: 'bài viết',
                    publishedAt: 'Ngày đăng:',
                    time: 'Thời lượng:',
                    youWillLike: 'Có thể bạn sẽ thích',
                    close: 'Đóng',
                }
            },
        },
    },

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
