<template>
    <main>
        <section class="page-vlog-category">
            <div class="page-vlog-category-body">
                <div class="page-vlog-category-items">
                    <JCardVlog class="item" :item="item" v-for="(item, index) in vlog" :key="index" />
                </div>
                <div class="page-vlog-category-button">
                    <button class="btn-see-more">Xem thêm 16 bài viết</button>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import JCardVlog from '@core/components/JCardVlog.vue'

export default {
    components: { JCardVlog },
    props: ['vlog'],
}
</script>
