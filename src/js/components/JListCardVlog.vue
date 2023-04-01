<template>
    <div class="list-card-vlog" v-if="items && items.length">
        <div class="list-card-vlog-title">{{ staticContent.youWillLike }}</div>
        <div class="list-card-vlog-body">
            <JCardVlog @viewVideo="viewVideo" class="item" :item="item" v-for="(item, index) in items" :key="index" />
        </div>
    </div>
</template>
<script>
import JCardVlog from '@core/components/JCardVlog.vue'

export default {
    components: { JCardVlog },

    props: {
        items: Array,
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
        viewVideo(currentItem) {
            this.$emit('viewVideo', currentItem)
        },
    },
}
</script>
