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
                    <div v-if="projects.current_page < projects.last_page" class="page-project-category-button">
                        <button @click.prevent="$emit('seeMore', projects.next_page_url)" class="btn-see-more">
                            <a :href="projects.next_page_url"> Xem thêm {{ projects.total - projects.to }} dự án </a>
                        </button>
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
