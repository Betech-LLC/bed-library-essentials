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
            <JClientOnly>
                <JVideo :src="item.video" />
            </JClientOnly>
        </div>
    </div>
</template>

<script>
import JClientOnly from '@core/components/JClientOnly.vue'
export default {
    components: { JClientOnly },
    props: {
        item: {
            type: Object,
        },
    },
}
</script>
