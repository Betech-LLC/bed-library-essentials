<template>
    <main>
        <section class="page-vlog-category">
            <div class="page-vlog-category-body">
                <div class="page-vlog-category-items">
                    <JCardVlog
                        @viewVideo="viewVideo"
                        class="item"
                        :item="item"
                        v-for="(item, index) in vlogs"
                        :key="index"
                    />
                </div>
                <div class="page-vlog-category-button">
                    <button class="btn-see-more">Xem thêm 16 bài viết</button>
                </div>
            </div>
        </section>

        <JPopupVlog @viewVideo="viewVideo" @close="close" :items="vlogs" :isShow="isShow" :currentItem="currentItem" />
    </main>
</template>

<script>
import JCardVlog from '@core/components/JCardVlog.vue'
import JPopupVlog from '@core/components/JPopupVlog.vue'

export default {
    components: { JCardVlog, JPopupVlog },
    props: ['vlog', 'vlogs'],

    data() {
        return {
            isShow: false,
            currentItem: null,
        }
    },

    methods: {
        viewVideo(currentItem) {
            this.isShow = true
            this.currentItem = currentItem
        },

        close() {
            this.isShow = false
            window.history.pushState({}, '', '/vlog')
        },
    },
}
</script>
