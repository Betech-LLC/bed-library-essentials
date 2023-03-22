<template>
    <JModal @close="close" maxWidth="80vw" :show="isShow" id="modal-vlog">
        <template v-slot:close>
            <div @click="close" class="fixed text-center text-white cursor-pointer right-6 top-6 body-1">
                <div class="p-2.5">
                    <JIconXClose class="w-6 h-6 mx-auto" />
                </div>
                <div>Đóng</div>
            </div>
        </template>
        <div v-if="currentItem" class="p-8 bg-white rounded-lg">
            <div class="text-gray-700 title-2">{{ currentItem.title }}</div>
            <div class="flex space-x-6">
                <div>
                    <span class="text-gray-700 body-2">Ngày đăng: </span>
                    <span class="text-gray-900 label-2">{{ currentItem.published_at }}</span>
                </div>
                <div>
                    <span class="text-gray-700 body-2">Thời lượng: </span>
                    <span class="text-gray-900 label-2">{{ currentItem.time }}</span>
                </div>
            </div>
            <div class="mt-6">
                <JClientOnly>
                    <JVideo :src="currentItem.video" />
                </JClientOnly>
            </div>

            <div class="mt-12 space-y-8">
                <div class="text-gray-900 uppercase title-1">Có thể bạn sẽ thích</div>
                <div class="page-vlog-category-items">
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
export default {
    components: { JIconXClose },
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
