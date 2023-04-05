<template>
    <div class="notify">
        <JIconFeatured />
        <div class="notify-title">{{ title }}</div>
        <div class="notify-desc">{{ description }}</div>
    </div>
</template>
<script>
import JIconFeatured from '@core/components/JIcon/Featured.vue'
export default {
    components: { JIconFeatured },
    props: {
        title: {
            type: String,
            default: 'Ứng tuyển thành công',
        },
        description: {
            type: String,
            default: 'Chúng tôi đã nhận hồ sơ ứng tuyển. Phòng Nhân sự sẽ liên hệ đến bạn trong thời gian sớm nhất.',
        },
    },
}
</script>
