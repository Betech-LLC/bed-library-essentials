<template>
    <JModal @close="close" maxWidth="80vw" :show="isShow" id="modal-vlog" class="popup-vlog">
        <template v-slot:close>
            <div @click="close" class="popup-vlog-close">
                <div class="icon">
                    <JIconXClose />
                </div>
                <div class="title">Đóng</div>
            </div>
        </template>
        <div v-if="currentItem" class="popup-vlog-body">
            <div class="popup-vlog-title">{{ currentItem.title }}</div>
            <div class="popup-vlog-information">
                <div class="item">
                    <span class="label">Ngày đăng: </span>
                    <span class="title">{{ currentItem.published_at }}</span>
                </div>
                <div class="item">
                    <span class="label">Thời lượng: </span>
                    <span class="title">{{ currentItem.time }}</span>
                </div>
            </div>
            <div class="popup-vlog-video">
                <JClientOnly>
                    <JVideo :src="currentItem.video" />
                </JClientOnly>
            </div>

            <div class="popup-vlog-related">
                <div class="title">Có thể bạn sẽ thích</div>
                <div class="items">
                    <template v-for="(item, index) in items">
                        <JCardVlog
                            :key="index"
                            v-if="item.slug !== currentItem.slug"
                            @viewVideo="viewVideo"
                            class="item"
                            :item="item"
                        />
                    </template>
                </div>
            </div>
        </div>
    </JModal>
</template>

<script>
import JIconXClose from '@core/components/JIcon/XClose.vue'
import JClientOnly from '@core/components/JClientOnly.vue'
export default {
    components: { JIconXClose, JClientOnly },
    props: {
        items: {
            type: Array,
        },

        isShow: {
            type: Boolean,
            default: false,
        },

        currentItem: {
            type: Object,
        },
    },

    watch: {
        currentItem() {
            const section = document.querySelector('#modal-vlog')

            if (section && section.scrollTop > 0) section.scrollTop = 0
        },
    },

    methods: {
        close() {
            this.$emit('close')
        },

        viewVideo(item) {
            this.$emit('viewVideo', item)
        },
    },
}
</script>
