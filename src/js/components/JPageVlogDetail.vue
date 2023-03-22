<template>
    <main>
        <section class="page-vlog-category">
            <div class="page-vlog-category-body">
                <div class="popup-vlog-title">{{ vlog.title }}</div>
                <div class="popup-vlog-information">
                    <div class="item">
                        <span class="label">Ngày đăng: </span>
                        <span class="title">{{ vlog.published_at }}</span>
                    </div>
                    <div class="item">
                        <span class="label">Thời lượng: </span>
                        <span class="title">{{ vlog.time }}</span>
                    </div>
                </div>
                <div class="popup-vlog-video">
                    <JClientOnly>
                        <JVideo :src="vlog.video" />
                    </JClientOnly>
                </div>

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
