<template>
    <div class="vlog-detail">
        <div class="vlog-detail-video">
            <JVideo :isPlay="isPlay" @change="change" :src="item.video_url" />
        </div>
        <div class="vlog-detail-title">{{ item.title }}</div>
        <div class="vlog-detail-information">
            <div class="item">
                <span class="label">Ngày đăng: </span>
                <span class="title">{{ toDate(item.published_at, 'vi', false) }}</span>
            </div>
            <div class="item">
                <span class="label">Thời lượng: </span>
                <span class="title">{{ item.time }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { toDate } from '@core/utils'
import JVideo from '@core/components/JVideo.vue'

export default {
    components: { JVideo },

    props: {
        item: {
            type: Object,
        },

        isPlay: {
            type: Boolean,
            default: false,
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
