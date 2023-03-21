<template>
    <JModal @close="close" maxWidth="80vw" :show="isShow" id="modal-vlog">
        <template v-slot:close>
            <div class="fixed top-0 text-white">Close</div>
        </template>
        <div class="p-8 bg-white rounded-lg">
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
                <JVideo src="https://www.youtube.com/watch?v=0xAgOv6u4nI&t=103s" />
            </div>

            <div class="mt-16 space-y-8">
                <div class="text-gray-900 uppercase title-1">Có thể bạn sẽ thích</div>
                <div class="page-vlog-category-items">
                    <JCardVlog
                        @changeUrl="changeUrl"
                        class="item"
                        :item="item"
                        v-for="(item, index) in items"
                        :key="index"
                    />
                </div>
            </div>
        </div>
    </JModal>
</template>

<script>
export default {
    props: {
        items: {
            type: Array,
        },

        isShow: {
            type: Boolean,
            default: false,
        },
    },

    data() {
        return {
            currentItem: {},
        }
    },

    computed: {
        test() {
            return window.location.href
        },
    },

    watch: {
        isShow(value) {
            if (!value) return
            console.log(window.location.href)
            this.currentItem = this.items.find((x) => x.url === window.location.href)
        },
    },

    methods: {
        close() {
            this.$emit('close')
        },
    },
}
</script>
