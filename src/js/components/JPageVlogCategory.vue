<template>
    <main>
        <section class="page-vlog-category">
            <div class="page-vlog-category-body">
                <JListCardVlog @viewVideo="viewVideo" :vlogs="vlogs" />
                <div class="page-vlog-category-button">
                    <button class="btn-see-more">Xem thêm 16 bài viết</button>
                </div>
            </div>
        </section>

        <JPopupVlog @viewVideo="viewVideo" @close="close" :vlogs="vlogs" :isShow="isShow" :currentItem="currentItem" />
    </main>
</template>

<script>
import JPopupVlog from '@core/components/JPopupVlog.vue'
import JListCardVlog from '@core/components/JListCardVlog.vue'

export default {
    components: { JListCardVlog, JPopupVlog },
    props: ['vlogs'],

    data() {
        return {
            isShow: false,
            currentItem: null,
            currentUrl: null,
        }
    },

    mounted() {
        this.currentUrl = window.location.href
    },

    methods: {
        viewVideo(currentItem) {
            this.isShow = true
            this.currentItem = currentItem
        },

        close() {
            this.isShow = false
            window.history.pushState({}, '', this.currentUrl)
        },
    },
}
</script>
