<template>
    <main>
        <section class="jobs">
            <div class="jobs-wrap">
                <div class="jobs-filters">
                    <div class="filter">
                        <p class="title">Ngành nghề</p>
                    </div>
                </div>

                <div class="jobs-body">
                    <h2 class="jobs-title">Khám phá cơ hội việc làm</h2>
                    <p class="jobs-count">{{ jobs.total }} công việc</p>

                    <div class="jobs-list">
                        <JCardJob v-for="(job, index) in jobs_data" :key="index" :item="job" />
                    </div>

                    <div v-if="jobs.current_page < jobs.last_page" class="jobs-button">
                        <button @click.prevent="$emit('seeMore', jobs.next_page_url)" class="btn-see-more">
                            <a :href="jobs.next_page_url"> Xem thêm {{ jobs.total - jobs.to }} việc làm </a>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import JCardJob from '@core/components/JCardJob.vue'

export default {
    components: { JCardJob },
    props: ['jobs_data', 'jobs'],
}
</script>
