<template>
    <main>
        <section class="page-jobs">
            <div class="page-jobs-wrap">
                <div v-if="options && options.length" class="page-jobs-filters">
                    <div class="page-jobs-filter" v-for="(option, index) in options" :key="index">
                        <p class="page-jobs-filter-title">{{ option.title }}</p>
                        <div class="page-jobs-filter-items">
                            <JFieldCheckboxCustom
                                v-for="(node, subIndex) in option.nodes"
                                :key="subIndex"
                                v-model="node.active"
                                class="checkbox-button"
                                @update:modelValue="pushToUrl"
                            >
                                <span :class="{ active: node.active }" class="page-jobs-filter-item">
                                    {{ node.title }}
                                </span>
                            </JFieldCheckboxCustom>
                        </div>
                    </div>
                </div>

                <div class="page-jobs-body">
                    <h2 class="page-jobs-title">Khám phá cơ hội việc làm</h2>
                    <p class="page-jobs-count">{{ jobs.total }} công việc</p>

                    <div class="page-jobs-list">
                        <template v-if="jobs_data && jobs_data.length">
                            <JCardJob v-for="(job, index) in jobs_data" :key="index" :item="job" />
                        </template>
                        <JEmpty
                            v-else
                            name="empty-job"
                            description="Chưa có vị trí ứng tuyển, chúng tôi sẽ cập nhật thông tin tuyển dụng ngay khi có nhu cầu."
                        />
                    </div>

                    <div v-if="jobs.current_page < jobs.last_page" class="page-jobs-button">
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
import JEmpty from '@core/components/JEmpty.vue'
import JFieldCheckboxCustom from '@core/components/JField/CheckboxCustom.vue'
import { serializeQuery, mappingOptions } from '@core/utils'

export default {
    components: { JEmpty, JCardJob, JFieldCheckboxCustom },
    props: ['jobs_data', 'jobs', 'options'],

    data() {
        return {
            currentQuery: {},
        }
    },

    mounted() {
        if (this.options && this.options.length) {
            for (const [key, value] of new URLSearchParams(window.location.search).entries()) {
                this.currentQuery[key] = value
            }
            this.mappingOptions(this.options, this.currentQuery)
        }
    },

    methods: {
        serializeQuery,
        mappingOptions,
        pushToUrl() {
            const filters = this.serializeQuery(this.currentQuery, this.options)

            this.$emit('pushToUrl', filters)
        },
    },
}
</script>
