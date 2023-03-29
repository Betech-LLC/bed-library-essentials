<template>
    <JPageJobs @pushToUrl="pushToUrl" :jobs_data="jobs_data" :jobs="jobs" :options="options" />
</template>
<script>
export default {
    data() {
        return {
            jobs_data: [],

            jobs: {
                current_page: 1,
                data: [
                    {
                        id: 27,
                        title: 'Dolorem vel eum qui sunt.',
                        slug: 'dolorem-vel-eum-qui-sunt',
                        description: null,
                        working_position: 'Laboriosam vero.',
                        work_address: 'Qui error.',
                        working_time: 'Consectetur nihil.',
                        expected_time: '2023-03-31',
                        quantity: null,
                        url: 'http://localhost:8000/tuyen-dung/dolorem-vel-eum-qui-sunt',
                        tags: [
                            {
                                id: 1,
                                slug: 'bonus',
                                title: 'Bonus',
                                icon: null,
                                text_color: '#175CD3',
                                background_color: '#EFF8FF',
                                type: 'JOB',
                                url: null,
                            },
                            {
                                id: 2,
                                slug: 'con-han',
                                title: 'Còn hạn',
                                icon: null,
                                text_color: '#027A48',
                                background_color: '#ECFDF3',
                                type: 'JOB',
                                url: null,
                            },
                            {
                                id: 3,
                                slug: 'tuyen-gap',
                                title: 'Tuyển gấp',
                                icon: null,
                                text_color: '#B42318',
                                background_color: '#FEF3F2',
                                type: 'JOB',
                                url: null,
                            },
                        ],
                        options: [],
                    },
                    {
                        id: 25,
                        title: 'Illum exercitationem.',
                        slug: 'illum-exercitationem',
                        description: null,
                        working_position: 'Excepturi.',
                        work_address: 'Fugiat.',
                        working_time: 'Dignissimos.',
                        expected_time: '2023-03-29',
                        quantity: null,
                        url: null,
                        tags: [],
                        options: [],
                    },
                    {
                        id: 23,
                        title: 'Magni et qui ducimus.',
                        slug: 'magni-et-qui-ducimus',
                        description: null,
                        working_position: 'Voluptatem nulla.',
                        work_address: 'Consequatur.',
                        working_time: 'Deserunt atque.',
                        expected_time: '2023-03-29',
                        quantity: null,
                        url: null,
                        tags: [],
                        options: [],
                    },
                    {
                        id: 22,
                        title: 'Hic qui quam.',
                        slug: 'hic-qui-quam',
                        description: null,
                        working_position: 'Culpa omnis ad.',
                        work_address: 'Ea atque sequi.',
                        working_time: 'Ipsa odio porro.',
                        expected_time: '2023-03-29',
                        quantity: null,
                        url: null,
                        tags: [],
                        options: [],
                    },
                    {
                        id: 20,
                        title: 'Et sed quas.',
                        slug: 'et-sed-quas',
                        description: null,
                        working_position: 'Ut nihil aperiam est.',
                        work_address: 'Quos dolorem.',
                        working_time: 'Numquam ut provident nisi ut.',
                        expected_time: '2023-03-29',
                        quantity: null,
                        url: null,
                        tags: [],
                        options: [],
                    },
                ],
                first_page_url: 'http://localhost:8000/tuyen-dung?page=1',
                from: 1,
                last_page: 4,
                last_page_url: 'http://localhost:8000/tuyen-dung?page=4',
                links: [
                    { url: null, label: '<', active: false },
                    { url: 'http://localhost:8000/tuyen-dung?page=1', label: '1', active: true },
                    { url: 'http://localhost:8000/tuyen-dung?page=2', label: '2', active: false },
                    { url: 'http://localhost:8000/tuyen-dung?page=3', label: '3', active: false },
                    { url: 'http://localhost:8000/tuyen-dung?page=4', label: '4', active: false },
                    { url: 'http://localhost:8000/tuyen-dung?page=2', label: '>', active: false },
                ],
                next_page_url: 'http://localhost:8000/tuyen-dung?page=2',
                path: 'http://localhost:8000/tuyen-dung',
                per_page: 5,
                prev_page_url: null,
                to: 5,
                total: 17,
            },

            options: [
                {
                    id: 1,
                    title: 'Ngành nghề',
                    slug: 'nganh-nghe',
                    nodes: [
                        { id: 2, title: 'Job 1', slug: 'job-1' },
                        { id: 3, title: 'Job 2', slug: 'job-2' },
                        { id: 4, title: 'Job 3', slug: 'job-3' },
                        { id: 5, title: 'Job 4', slug: 'job-4' },
                        { id: 6, title: 'Job 5', slug: 'job-5' },
                        { id: 7, title: 'Job 6', slug: 'job-6' },
                        { id: 8, title: 'Job 7', slug: 'job-7' },
                        { id: 9, title: 'Job 8', slug: 'job-8' },
                    ],
                },
                {
                    id: 10,
                    title: 'Nơi làm việc',
                    slug: 'noi-lam-viec',
                    nodes: [
                        { id: 11, title: 'Hồ Chí Minh', slug: 'ho-chi-minh' },
                        { id: 12, title: 'Hà Nội', slug: 'ha-noi' },
                        { id: 13, title: 'Đà Nẵng', slug: 'da-nang' },
                    ],
                },
            ],

            currentQuery: this.$route.query,
        }
    },

    created() {
        this.jobs_data = this.jobs.data
    },

    methods: {
        pushToUrl(params) {
            this.$router.push({
                name: 'jobs',
                query: { ...params },
            })
        },
    },
}
</script>
