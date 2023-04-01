<template>
    <main>
        <section class="page-vlog-detail">
            <JBreadcrumb :items="breadcrumb">
                <template #icon>
                    <JIconArrowRight />
                </template>
            </JBreadcrumb>

            <JVlogDetail @change="changeOnPage" :isPlay="isPlayOnPage" :item="item" />

            <div class="page-vlog-detail-related">
                <JListCardVlog @viewVideo="viewVideo" :items="relatedVlogs" />
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
            :vlogs="relatedVlogs"
            :isShow="isShow"
            :isPlay="isPlay"
            :currentItem="currentItem"
        />
    </main>
</template>

<script>
import JCardVlog from '@core/components/JCardVlog.vue'
import JPopupVlog from '@core/components/JPopupVlog.vue'
import JVlogDetail from '@core/components/JVlogDetail.vue'
import JListCardVlog from '@core/components/JListCardVlog.vue'
import JBreadcrumb from '@core/components/JBreadcrumb.vue'
import JIconArrowRight from '@core/components/JIcon/ArrowRight.vue'

export default {
    components: { JCardVlog, JPopupVlog, JVlogDetail, JListCardVlog, JBreadcrumb, JIconArrowRight },

    props: {
        item: Object,
        vlogs: Object,
        relatedVlogs: Array,
        breadcrumb: Array,
        staticContent: {
            type: Object,
            default: () => {
                return {
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
            isPlayOnPage: false,
        }
    },

    created() {
        this.breadcrumb.push({ title: this.item.title })
    },

    mounted() {
        this.currentUrl = window.location.href
    },

    methods: {
        viewVideo(currentItem) {
            this.isShow = true
            this.isPlayOnPage = false
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

        changeOnPage(play) {
            this.isPlayOnPage = play
        },
    },
}
</script>
