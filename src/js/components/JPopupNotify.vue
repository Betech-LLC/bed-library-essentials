<template>
    <JModal :show="show" @close="$emit('close')" maxWidth="xl">
        <template #close-inner>
            <button
                class="absolute top-0 right-0 flex items-center justify-center px-2 py-1 text-gray-500 md:top-4 md:right-4 w-11 h-11"
            >
                <JIconXClose /></button
        ></template>
        <div class="notify">
            <JIconFeatured />
            <div class="notify-title">{{ title }}</div>
            <div class="notify-desc">{{ description }}</div>
        </div>
    </JModal>
</template>

<script>
import JModal from '@core/components/JModal.vue'
import JIconXClose from '@core/components/JIcon/XClose.vue'
import JIconFeatured from '@core/components/JIcon/Featured.vue'
export default {
    components: { JIconFeatured, JIconXClose, JModal },
    props: {
        show: { type: Boolean, default: false },
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
