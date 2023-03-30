<template>
    <main>
        <section class="page-project-category">
            <div class="page-project-category-wrap">
                <div v-if="categories && categories.length" class="page-project-category-head">
                    <JTab :categories="categories" />
                </div>

                <div class="page-project-category-body">
                    <div class="page-project-category-card-items">
                        <JCardProject
                            class="card-item"
                            v-for="(project, index) in projects_data"
                            :key="index"
                            :item="project"
                        />
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
    components: { JCardProject, JTab },

    props: ['projects', 'projects_data', 'categories', 'category'],
}
</script>
