<template>
    <JModal maxWidth="80vw" :show="isShow" id="modal-vlog" class="popup-vlog">
        <template v-slot:close>
            <div class="popup-vlog-close">
                <div class="icon">
                    <JIconXClose />
                </div>
                <div class="title">{{ staticContent.close }}</div>
            </div>
        </template>
        <div v-if="currentItem" class="popup-vlog-body">
            <JVlogDetail :staticContent="staticContent" :isPlay="isPlay" @change="change" :item="currentItem" />

            <div class="popup-vlog-related">
                <JListCardVlog @viewVideo="viewVideo" :items="vlogs_data" :staticContent="staticContent" />

                <div v-if="vlogs.current_page < vlogs.last_page" class="page-vlog-category-button">
                    <button @click.prevent="$emit('seeMoreWithApi', vlogs.next_page_url)" class="btn-see-more">
                        <a :href="vlogs.next_page_url">
                            {{ staticContent.seeMore }} {{ vlogs.total - vlogs.to }}
                            {{ staticContent.type }}
                        </a>
                    </button>
                </div>
            </div>
        </div>
    </JModal>
</template>

<script>
import JIconXClose from '@core/components/JIcon/XClose.vue'
import JClientOnly from '@core/components/JClientOnly.vue'
import JListCardVlog from '@core/components/JListCardVlog.vue'
import JVlogDetail from '@core/components/JVlogDetail.vue'
import JModal from '@core/components/JModal.vue'
export default {
    components: { JIconXClose, JClientOnly, JListCardVlog, JVlogDetail, JModal },
    props: {
        vlogs: {
            type: Object,
        },

        vlogs_data: Array,

        isShow: {
            type: Boolean,
            default: false,
        },

        isPlay: {
            type: Boolean,
            default: false,
        },

        currentItem: {
            type: Object,
        },

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

    watch: {
        currentItem() {
            const section = document.querySelector('#modal-vlog')

            if (section && section.scrollTop > 0) section.scrollTop = 0
        },
    },

    methods: {
        viewVideo(item) {
            this.$emit('viewVideo', item)
        },
        change(play) {
            this.$emit('change', play)
        },
    },
}
</script>
