<template>
    <JModal @close="close" maxWidth="80vw" :show="isShow" id="modal-vlog">
        <template v-slot:close>
            <div class="fixed top-0 text-white">Close</div>
        </template>
        <div class="bg-white rounded-lg h-[1000px]">
            <JVideo src="https://www.youtube.com/watch?v=0xAgOv6u4nI&t=103s" />
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
