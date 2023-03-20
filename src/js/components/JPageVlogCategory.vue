<template>
    <main>
        <section class="page-vlog-category">
            <div class="page-vlog-category-body">
                <div class="page-vlog-category-items">
                    <JCardVlog
                        @changeUrl="changeUrl"
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

        <JPopupVlog @close="close" :items="vlogs" :isShow="isShow" />
    </main>
</template>

<script>
import JCardVlog from '@core/components/JCardVlog.vue'
import JPopupVlog from '@core/components/JPopupVlog.vue'

export default {
    components: { JCardVlog, JPopupVlog },
    props: ['vlogs'],

    data() {
        return {
            isShow: false,
        }
    },

    methods: {
        changeUrl() {
            this.isShow = true
        },

        close() {
            this.isShow = false
        },
    },
}
</script>
