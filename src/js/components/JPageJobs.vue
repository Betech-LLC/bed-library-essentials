<template>
    <main>
        <section class="jobs">
            <div class="jobs-wrap">
                <div v-if="options && options.length" class="jobs-filters">
                    <div class="jobs-filter" v-for="(option, index) in options" :key="index">
                        <p class="jobs-filter-title">{{ option.title }}</p>
                        <div class="jobs-filter-items">
                            <JFieldCheckboxCustom
                                v-for="(node, subIndex) in option.nodes"
                                :key="subIndex"
                                v-model="node.active"
                                class="checkbox-button"
                                @update:modelValue="pushToUrl"
                            >
                                <span :class="{ active: node.active }" class="jobs-filter-item">
                                    {{ node.title }}
                                </span>
                            </JFieldCheckboxCustom>
                        </div>
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
import JFieldCheckboxCustom from '@core/components/JField/CheckboxCustom.vue'
import { serializeQuery, mappingOptions } from '@core/utils/filter-key'

export default {
    components: { JCardJob, JFieldCheckboxCustom },
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
