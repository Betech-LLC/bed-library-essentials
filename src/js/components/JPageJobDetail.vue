<template>
    <main>
        <section class="page-job-detail">
            <JBreadcrumb :items="breadcrumb">
                <template #icon>
                    <JIconArrowRight />
                </template>
            </JBreadcrumb>

            <h1 class="page-job-detail-title">
                {{ job.title }}
            </h1>

            <div class="page-job-detail-body">
                <div class="left">
                    <JInformationJob class="mobile" :item="job" />
                    <div class="page-job-detail-content" v-html="job.content"></div>

                    <div class="page-job-detail-share">
                        <button class="button">Nộp hồ sơ</button>

                        <JSocialShare class="social-share" zaloOAId="1111640952861619960" />
                    </div>
                </div>
                <div class="right">
                    <JInformationJob :item="job" />

                    <div class="page-job-detail-other-jobs">
                        <h2 class="title">Vị trí khác</h2>
                        <div class="list-card">
                            <JCardJob
                                class="card-item card-job-col"
                                v-for="(job, index) in relatedJobs"
                                :key="index"
                                :item="job"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import JBreadcrumb from '@core/components/JBreadcrumb.vue'
import JCardJob from '@core/components/JCardJob.vue'
import JSocialShare from '@core/components/JSocialShare.vue'
import JIconArrowRight from '@core/components/JIcon/ArrowRight.vue'
import JIconHomeLine from '@core/components/JIcon/HomeLine.vue'
import JIconCalendar from '@core/components/JIcon/Calendar.vue'
import JIconBriefcase02 from '@core/components/JIcon/Briefcase02.vue'
import JIconUsers03 from '@core/components/JIcon/Users03.vue'
import JInformationJob from '@core/components/JInformationJob.vue'

export default {
    components: {
        JBreadcrumb,
        JCardJob,
        JSocialShare,
        JIconArrowRight,
        JIconHomeLine,
        JIconCalendar,
        JIconBriefcase02,
        JIconUsers03,
        JInformationJob,
    },

    props: ['job', 'relatedJobs', 'breadcrumb'],
}
</script>
