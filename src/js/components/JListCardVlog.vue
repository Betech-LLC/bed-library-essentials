<template>
    <div class="vlog-items">
        <JCardVlog @viewVideo="viewVideo" class="item" :item="item" v-for="(item, index) in vlogs" :key="index" />
    </div>
</template>
<script>
import JCardVlog from '@core/components/JCardVlog.vue'

export default {
    components: { JCardVlog },

    props: ['vlogs'],

    methods: {
        viewVideo(currentItem) {
            this.$emit('viewVideo', currentItem)
        },
    },
}
</script>
