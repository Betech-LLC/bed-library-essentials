<template>
    <main>
        <section class="page-vlog-detail">
            <JVlogDetail @change="changeOnPage" :isPlay="isPlayOnPage" :item="item" />

            <div class="page-vlog-detail-related">
                <JListCardVlog @viewVideo="viewVideo" :vlogs="vlogs" />
            </div>
        </section>

        <JPopupVlog
            @change="change"
            @viewVideo="viewVideo"
            @close="close"
            :vlogs="vlogs"
            :isShow="isShow"
            :isPlay="isPlay"
            :currentItem="currentItem"
        />
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
            isPlay: false,
            isPlayOnPage: false,
        }
    },

    mounted() {
        this.currentUrl = window.location.href
    },

    methods: {
        viewVideo(currentItem) {
            this.isShow = true
            this.isPlayOnPage = false
            this.currentItem = currentItem
        },

        close() {
            this.isShow = false
            this.isPlay = false
            window.history.pushState({}, '', this.currentUrl)
        },

        change(play) {
            this.isPlay = play
        },

        changeOnPage(play) {
            this.isPlayOnPage = play
        },
    },
}
</script>
