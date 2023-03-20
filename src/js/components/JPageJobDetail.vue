<template>
    <main>
        <section class="container py-3 xl:py-6 md:py-4">
            <JBreadcrumb :items="breadcrumb">
                <template #icon>
                    <JIconArrowRight />
                </template>
            </JBreadcrumb>

            <div class="grid grid-cols-12 mt-3 xl:mt-6 md:mt-4 xl:gap-x-8 lg:gap-x-6">
                <div class="p-3 lg:col-span-8 col-span-full xl:p-6 md:p-4 bg-primary-50">
                    <h1 class="headline-2 text-primary-dark">{{ job.title }}</h1>
                    <ul
                        class="flex mt-2 space-x-4 xl:space-x-8 md:space-x-6 xl:mt-4 md:mt-3 flex-nowrap max-md:justify-between"
                    >
                        <li>
                            <label class="text-gray-700 body-1">Nơi làm việc</label>
                            <p class="mt-0.5 title-3 text-primary-dark">{{ job.location }}</p>
                        </li>
                        <li class="flex-none">
                            <label class="text-gray-700 body-1">Số lượng</label>
                            <p class="mt-0.5 title-3 text-primary-dark">{{ addLeadingZero(job.quantity) }}</p>
                        </li>
                        <li class="flex-none">
                            <label class="text-gray-700 body-1">Hạn nộp</label>
                            <p class="mt-0.5 title-3 text-primary-dark">
                                {{ toDate(job.expected_time, 'vi', false) }}
                            </p>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="grid grid-cols-12 xl:mt-2 md:mt-1.5 mt-1 xl:gap-x-8 lg:gap-x-6 max-lg:gap-y-4">
                <div class="space-y-4 lg:col-span-8 col-span-full xl:space-y-8 md:space-y-6">
                    <div class="p-2 prose xl:p-4 md:p-3" v-html="job.content"></div>
                    <div class="border-b border-solid border-zinc-300"></div>
                    <div class="flex justify-between">
                        <button class="btn btn-primary btn-lg">Nộp hồ sơ</button>

                        <JSocialShare zaloOAId="1111640952861619960" />
                    </div>
                </div>
                <div class="lg:col-span-4 col-span-full">
                    <h2 class="my-2 text-black xl:my-4 md:my-3 title-1">Vị trí khác</h2>
                    <div class="xl:space-y-2 md:space-y-1.5 space-y-1">
                        <JCardJob class="card-job-col" v-for="(job, index) in relatedJobs" :key="index" :item="job" />
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import JSocialShare from '@core/components/JSocialShare.vue'
import { addLeadingZero, toDate } from '@core/utils'

export default {
    components: { JSocialShare },

    props: ['job', 'relatedJobs', 'breadcrumb'],

    methods: {
        addLeadingZero,
        toDate,
    },
}
</script>

<style lang="scss">
.prose {
    h3 {
        @apply xl:mt-8 md:mt-6 mt-4;
    }
}
</style>
