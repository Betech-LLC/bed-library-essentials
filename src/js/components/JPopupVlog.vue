<template>
    <JModal maxWidth="80vw" :show="isShow" id="modal-vlog" class="popup-vlog">
        <template v-slot:close>
            <div class="popup-vlog-close">
                <div class="icon">
                    <JIconXClose />
                </div>
                <div class="title">Đóng</div>
            </div>
        </template>
        <div v-if="currentItem" class="popup-vlog-body">
            <JVlogDetail :item="currentItem" />

            <div class="popup-vlog-related">
                <JListCardVlog @viewVideo="viewVideo" :vlogs="vlogs" />
            </div>
        </div>
    </JModal>
</template>

<script>
import JIconXClose from '@core/components/JIcon/XClose.vue'
import JClientOnly from '@core/components/JClientOnly.vue'
import JListCardVlog from '@core/components/JListCardVlog.vue'
import JVlogDetail from '@core/components/JVlogDetail.vue'
export default {
    components: { JIconXClose, JClientOnly, JListCardVlog, JVlogDetail },
    props: {
        vlogs: {
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
        viewVideo(item) {
            this.$emit('viewVideo', item)
        },
    },
}
</script>
