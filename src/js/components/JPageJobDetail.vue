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

                    <JFormApplyJob
                        :job="job"
                        @onSuccess="onSuccessApply()"
                        @onError="onErrorApply()"
                        :apiURL="apiURL"
                    />
                </div>
                <div class="right">
                    <JInformationJob :item="job" />

                    <div v-if="relatedJobs && relatedJobs.length" class="page-job-detail-other-jobs">
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

        <JModal :show="isShow" @close="isShow = false">
            <JNotify
                title="Ứng tuyển thành công"
                description="Chúng tôi đã nhận hồ sơ ứng tuyển. Phòng Nhân sự sẽ liên hệ đến bạn trong thời gian sớm nhất."
            />
        </JModal>
    </main>
</template>

<script>
import JModal from '@core/components/JModal.vue'
import JBreadcrumb from '@core/components/JBreadcrumb.vue'
import JCardJob from '@core/components/JCardJob.vue'
import JSocialShare from '@core/components/JSocialShare.vue'
import JIconArrowRight from '@core/components/JIcon/ArrowRight.vue'
import JIconHomeLine from '@core/components/JIcon/HomeLine.vue'
import JIconCalendar from '@core/components/JIcon/Calendar.vue'
import JIconBriefcase02 from '@core/components/JIcon/Briefcase02.vue'
import JIconUsers03 from '@core/components/JIcon/Users03.vue'
import JInformationJob from '@core/components/JInformationJob.vue'
import JFormApplyJob from '@core/components/JFormApplyJob.vue'
import JNotify from '@core/components/JNotify.vue'

export default {
    components: {
        JModal,
        JNotify,
        JBreadcrumb,
        JCardJob,
        JSocialShare,
        JIconArrowRight,
        JIconHomeLine,
        JIconCalendar,
        JIconBriefcase02,
        JIconUsers03,
        JInformationJob,
        JFormApplyJob,
    },

    props: ['job', 'relatedJobs', 'breadcrumb', 'apiURL'],
    data() {
        return {
            isShow: false,
        }
    },
    methods: {
        onSuccessApply() {
            this.isShow = true
            setTimeout(() => {
                this.isShow = false
            }, 2000)
        },
        onErrorApply() {
            console.log('error')
        },
    },
}
</script>
