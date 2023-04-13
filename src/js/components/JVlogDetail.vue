<template>
    <div class="vlog-detail">
        <div class="vlog-detail-video">
            <JVideo v-if="item.video_url" :isPlay="isPlay" @change="change" :src="item.video_url" />
            <JEmpty
                v-else
                name="empty-vlog"
                description="Chúng tôi đang cập nhật video, quý khách vui lòng quay lại sau."
            />
        </div>
        <div class="vlog-detail-title">{{ item.title }}</div>
        <div class="vlog-detail-information">
            <div v-if="item.published_at" class="item">
                <span class="label">{{ staticContent.publishedAt }} </span>
                <span class="title">{{ toDate(item.published_at, 'vi', false) }}</span>
            </div>
            <div v-if="item.time" class="item">
                <span class="label">{{ staticContent.time }} </span>
                <span class="title">{{ item.time }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { toDate } from '@core/utils'
import JVideo from '@core/components/JVideo.vue'
import JEmpty from '@core/components/JEmpty.vue'
export default {
    components: { JVideo, JEmpty },

    props: {
        item: {
            type: Object,
        },

        isPlay: {
            type: Boolean,
            default: false,
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

    methods: {
        toDate,
        change(play) {
            this.$emit('change', play)
        },
    },
}
</script>
