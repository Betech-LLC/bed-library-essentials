<template>
    <main>
        <section class="page-vlog-detail">
            <JVlogDetail :item="item" />

            <div class="page-vlog-detail-related">
                <JListCardVlog @viewVideo="viewVideo" :vlogs="vlogs" />
            </div>
        </section>

        <JPopupVlog @viewVideo="viewVideo" @close="close" :vlogs="vlogs" :isShow="isShow" :currentItem="currentItem" />
    </main>
</template>

<script>
import JCardVlog from '@core/components/JCardVlog.vue'
import JPopupVlog from '@core/components/JPopupVlog.vue'
import JVlogDetail from '@core/components/JVlogDetail.vue'
import JListCardVlog from '@core/components/JListCardVlog.vue'

export default {
    components: { JCardVlog, JPopupVlog, JVlogDetail, JListCardVlog },
    props: ['item', 'vlogs'],

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
