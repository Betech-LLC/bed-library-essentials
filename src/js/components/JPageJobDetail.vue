<template>
    <main>
        <section class="container py-6">
            <JBreadcrumb :items="breadcrumb">
                <template #icon>
                    <JIconArrowRight />
                </template>
            </JBreadcrumb>

            <div class="grid grid-cols-12 mt-6 gap-x-8">
                <div class="col-span-8 p-6 bg-primary-50">
                    <h1 class="headline-2 text-primary-dark">{{ job.title }}</h1>
                    <ul class="flex mt-4 space-x-8 flex-nowrap">
                        <li>
                            <label class="text-gray-700 body-1">Nơi làm việc</label>
                            <p class="mt-0.5 title-3 text-primary-dark">{{ job.location }}</p>
                        </li>
                        <li class="flex-none">
                            <label class="text-gray-700 body-1">Số lượng</label>
                            <p class="mt-0.5 title-3 text-primary-dark">{{ job.quantity }}</p>
                        </li>
                        <li class="flex-none">
                            <label class="text-gray-700 body-1">Hạn nộp</label>
                            <p class="mt-0.5 title-3 text-primary-dark">{{ job.expected_time }}</p>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="grid grid-cols-12 mt-2 gap-x-8">
                <div class="col-span-8 space-y-8">
                    <div class="p-4 prose" v-html="job.content"></div>
                    <div class="border-b border-solid border-zinc-300"></div>
                    <div class="flex justify-between">
                        <button class="btn btn-primary btn-lg">Nộp hồ sơ</button>

                        <JSocialShare zaloOAId="1111640952861619960" />
                    </div>
                </div>
                <div class="col-span-4">
                    <h2 class="my-4 text-black title-1">Vị trí khác</h2>
                    <div class="space-y-2">
                        <JCardJob class="card-job-col" v-for="(job, index) in relatedJobs" :key="index" :item="job" />
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import JSocialShare from '@core/components/JSocialShare.vue'

export default {
    components: { JSocialShare },

    props: ['job', 'relatedJobs', 'breadcrumb'],
}
</script>

<style lang="scss">
.prose {
    h3 {
        @apply mt-8;
    }
}
</style>
