<template>
    <div class="list-card-vlog" v-if="vlogs && vlogs.length">
        <div class="list-card-vlog-title">Có thể bạn sẽ thích</div>
        <div class="list-card-vlog-body">
            <JCardVlog @viewVideo="viewVideo" class="item" :item="item" v-for="(item, index) in vlogs" :key="index" />
        </div>
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
