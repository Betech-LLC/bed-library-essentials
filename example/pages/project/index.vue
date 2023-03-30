<template>
    <JPageProjectCategory
        :projects_data="projects_data"
        :projects="projects"
        :categories="categories"
        :category="category"
    />
</template>

<script>
export default {
    data() {
        return {
            // projects: [
            //     {
            //         id: 85,
            //         title: 'Tòa nhà Landmark 81',
            //         slug: 'toa-nha-landmark-81',
            //         published_at: '2023-03-08',
            //         description:
            //             'Landmark 81 - tòa nhà chọc trời cao nhất Việt Nam, đẳng cấp và hiện đại, trang bị nhiều tiện ích cao cấp và tọa lạc tại vị trí đắc địa... ',
            //         location: 'TP.HCM',
            //         progress: {
            //             key: 'success',
            //             value: 'Hoàn thành',
            //         },

            //         categories: [
            //             {
            //                 id: 24,
            //                 title: 'Hic earum vel facilis.',
            //                 slug: 'project-detail',
            //                 image: { url: null, alt: 'Hic earum vel facilis.' },
            //                 icon: null,
            //                 url: '/project/project-detail',
            //             },
            //         ],
            //         image: { url: null, alt: 'Quae rerum non aut tenetur.' },
            //         url: '/project/project-detail',
            //     },
            //     {
            //         id: 85,
            //         title: 'Tòa nhà Landmark 81',
            //         slug: 'toa-nha-landmark-81',
            //         published_at: '2023-03-08',
            //         description:
            //             'Landmark 81 - tòa nhà chọc trời cao nhất Việt Nam, đẳng cấp và hiện đại, trang bị nhiều tiện ích cao cấp và tọa lạc tại vị trí đắc địa... ',
            //         location: 'TP.HCM',
            //         progress: {
            //             key: 'error',
            //             value: 'Chưa hoàn thành',
            //         },

            //         categories: [
            //             {
            //                 id: 24,
            //                 title: 'Hic earum vel facilis.',
            //                 slug: 'project-detail',
            //                 image: { url: null, alt: 'Hic earum vel facilis.' },
            //                 icon: null,
            //                 url: '/project/project-detail',
            //             },
            //         ],
            //         image: { url: null, alt: 'Quae rerum non aut tenetur.' },
            //         url: '/project/project-detail',
            //     },
            //     {
            //         id: 85,
            //         title: 'Tòa nhà Landmark 81',
            //         slug: 'toa-nha-landmark-81',
            //         published_at: '2023-03-08',
            //         description:
            //             'Landmark 81 - tòa nhà chọc trời cao nhất Việt Nam, đẳng cấp và hiện đại, trang bị nhiều tiện ích cao cấp và tọa lạc tại vị trí đắc địa... ',
            //         location: 'TP.HCM',
            //         progress: {
            //             key: 'success',
            //             value: 'Hoàn thành',
            //         },

            //         categories: [
            //             {
            //                 id: 24,
            //                 title: 'Hic earum vel facilis.',
            //                 slug: 'project-detail',
            //                 image: { url: null, alt: 'Hic earum vel facilis.' },
            //                 icon: null,
            //                 url: '/project/project-detail',
            //             },
            //         ],
            //         image: { url: null, alt: 'Quae rerum non aut tenetur.' },
            //         url: '/project/project-detail',
            //     },
            //     {
            //         id: 85,
            //         title: 'Tòa nhà Landmark 81',
            //         slug: 'toa-nha-landmark-81',
            //         published_at: '2023-03-08',
            //         description:
            //             'Landmark 81 - tòa nhà chọc trời cao nhất Việt Nam, đẳng cấp và hiện đại, trang bị nhiều tiện ích cao cấp và tọa lạc tại vị trí đắc địa... ',
            //         location: 'TP.HCM',
            //         progress: {
            //             key: 'success',
            //             value: 'Hoàn thành',
            //         },

            //         categories: [
            //             {
            //                 id: 24,
            //                 title: 'Hic earum vel facilis.',
            //                 slug: 'project-detail',
            //                 image: { url: null, alt: 'Hic earum vel facilis.' },
            //                 icon: null,
            //                 url: '/project/project-detail',
            //             },
            //         ],
            //         image: { url: null, alt: 'Quae rerum non aut tenetur.' },
            //         url: '/project/project-detail',
            //     },
            //     {
            //         id: 85,
            //         title: 'Tòa nhà Landmark 81',
            //         slug: 'toa-nha-landmark-81',
            //         published_at: '2023-03-08',
            //         description:
            //             'Landmark 81 - tòa nhà chọc trời cao nhất Việt Nam, đẳng cấp và hiện đại, trang bị nhiều tiện ích cao cấp và tọa lạc tại vị trí đắc địa... ',
            //         location: 'TP.HCM',
            //         progress: {
            //             key: 'success',
            //             value: 'Hoàn thành',
            //         },

            //         categories: [
            //             {
            //                 id: 24,
            //                 title: 'Hic earum vel facilis.',
            //                 slug: 'project-detail',
            //                 image: { url: null, alt: 'Hic earum vel facilis.' },
            //                 icon: null,
            //                 url: '/project/project-detail',
            //             },
            //         ],
            //         image: { url: null, alt: 'Quae rerum non aut tenetur.' },
            //         url: '/project/project-detail',
            //     },
            //     {
            //         id: 85,
            //         title: 'Tòa nhà Landmark 81',
            //         slug: 'toa-nha-landmark-81',
            //         published_at: '2023-03-08',
            //         description:
            //             'Landmark 81 - tòa nhà chọc trời cao nhất Việt Nam, đẳng cấp và hiện đại, trang bị nhiều tiện ích cao cấp và tọa lạc tại vị trí đắc địa... ',
            //         location: 'TP.HCM',
            //         progress: {
            //             key: 'success',
            //             value: 'Hoàn thành',
            //         },

            //         categories: [
            //             {
            //                 id: 24,
            //                 title: 'Hic earum vel facilis.',
            //                 slug: 'project-detail',
            //                 image: { url: null, alt: 'Hic earum vel facilis.' },
            //                 icon: null,
            //                 url: '/project/project-detail',
            //             },
            //         ],
            //         image: { url: null, alt: 'Quae rerum non aut tenetur.' },
            //         url: '/project/project-detail',
            //     },
            //     {
            //         id: 85,
            //         title: 'Tòa nhà Landmark 81',
            //         slug: 'toa-nha-landmark-81',
            //         published_at: '2023-03-08',
            //         description:
            //             'Landmark 81 - tòa nhà chọc trời cao nhất Việt Nam, đẳng cấp và hiện đại, trang bị nhiều tiện ích cao cấp và tọa lạc tại vị trí đắc địa... ',
            //         location: 'TP.HCM',
            //         progress: {
            //             key: 'success',
            //             value: 'Hoàn thành',
            //         },

            //         categories: [
            //             {
            //                 id: 24,
            //                 title: 'Hic earum vel facilis.',
            //                 slug: 'project-detail',
            //                 image: { url: null, alt: 'Hic earum vel facilis.' },
            //                 icon: null,
            //                 url: '/project/project-detail',
            //             },
            //         ],
            //         image: { url: null, alt: 'Quae rerum non aut tenetur.' },
            //         url: '/project/project-detail',
            //     },
            //     {
            //         id: 85,
            //         title: 'Tòa nhà Landmark 81',
            //         slug: 'toa-nha-landmark-81',
            //         published_at: '2023-03-08',
            //         description:
            //             'Landmark 81 - tòa nhà chọc trời cao nhất Việt Nam, đẳng cấp và hiện đại, trang bị nhiều tiện ích cao cấp và tọa lạc tại vị trí đắc địa... ',
            //         location: 'TP.HCM',
            //         progress: {
            //             key: 'success',
            //             value: 'Hoàn thành',
            //         },

            //         categories: [
            //             {
            //                 id: 24,
            //                 title: 'Hic earum vel facilis.',
            //                 slug: 'project-detail',
            //                 image: { url: null, alt: 'Hic earum vel facilis.' },
            //                 icon: null,
            //                 url: '/project/project-detail',
            //             },
            //         ],
            //         image: { url: null, alt: 'Quae rerum non aut tenetur.' },
            //         url: '/project/project-detail',
            //     },
            // ],

            projects_data: [],

            projects: {
                current_page: 1,
                data: [
                    {
                        title: 'Tòa nhà Landmark 81',
                        slug: 'toa-nha-landmark-81',
                        description:
                            'Landmark 81 - tòa nhà chọc trời cao nhất Việt Nam, đẳng cấp và hiện đại, trang bị nhiều tiện ích cao cấp và tọa lạc tại vị trí đắc địa. Đây là biểu tượng của sự phát triển đô thị Việt Nam và điểm đến hấp dẫn cho du khách.',
                        type: 'Tòa nhà chọc trời (skyscraper)',
                        progress: {
                            key: 'success',
                            value: 'Hoàn thành',
                        },
                        used: 'Apollo Silicone, Dowsil',
                        location: 'TP.HCM',
                        construction_progress: 'complete',
                        image: { url: 'http://localhost:8000/static/Frame 3466401.jpg', alt: 'Tòa nhà Landmark 81' },
                    },
                ],
                first_page_url: 'http://localhost:8000/project-categories?page=1',
                from: 1,
                last_page: 1,
                last_page_url: 'http://localhost:8000/project-categories?page=1',
                links: [
                    { url: null, label: '<', active: false },
                    { url: 'http://localhost:8000/project-categories?page=1', label: '1', active: true },
                    { url: null, label: '>', active: false },
                ],
                next_page_url: null,
                path: 'http://localhost:8000/project-categories',
                per_page: 10,
                prev_page_url: null,
                to: 1,
                total: 1,
            },

            categories: [
                {
                    title: 'Danh mục 5',
                    slug: 'danh-muc-5',
                    description: null,
                    url: 'http://localhost:3000/project/danh-muc-5',
                },
                {
                    title: 'Danh mục 4',
                    slug: 'danh-muc-4',
                    description: null,
                    url: 'http://localhost:3000/project/danh-muc-4',
                },
                {
                    title: 'Danh mục 3',
                    slug: 'danh-muc-3',
                    description: null,
                    url: 'http://localhost:3000/project/danh-muc-3',
                },
                {
                    title: 'Danh mục 2',
                    slug: 'danh-muc-2',
                    description: null,
                    url: 'http://localhost:3000/project/danh-muc-2',
                },
                {
                    title: 'Danh mục 1',
                    slug: 'danh-muc-1',
                    description: null,
                    url: 'http://localhost:3000/project/danh-muc-1',
                },
            ],

            category: null,
        }
    },

    created() {
        this.projects_data = this.projects.data
        this.categories.unshift({ title: 'Tất cả', url: this.$router.resolve({ name: 'project' }).fullPath })
    },
}
</script>
