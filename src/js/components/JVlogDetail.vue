<template>
    <div class="vlog-detail">
        <div class="vlog-detail-title">{{ item.title }}</div>
        <div class="vlog-detail-information">
            <div class="item">
                <span class="label">Ngày đăng: </span>
                <span class="title">{{ item.published_at }}</span>
            </div>
            <div class="item">
                <span class="label">Thời lượng: </span>
                <span class="title">{{ item.time }}</span>
            </div>
        </div>
        <div class="vlog-detail-video">
            <JVideo :isPlay="isPlay" @change="change" :options="{ controls: [] }" :src="item.video" />
        </div>
    </div>
</template>

<script>
export default {
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
        change(play) {
            this.$emit('change', play)
        },
    },
}
</script>
