<template>
    <main>
        <section class="page-project-category">
            <div class="page-project-category-wrap">
                <div class="page-project-category-head">
                    <JTab />
                </div>

                <div class="page-project-category-body">
                    <div class="page-project-category-card-items">
                        <JCardProject class="card-item" v-for="(item, index) in projects" :key="index" :item="item" />
                    </div>
                    <div class="page-project-category-button">
                        <button class="btn-see-more">Xem thêm 16 bài viết</button>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import JCardProject from '@core/components/JCardProject.vue'
import JTab from '@core/components/JTab.vue'

export default {
    components: { JCardProject },

    props: ['projects'],
}
</script>
