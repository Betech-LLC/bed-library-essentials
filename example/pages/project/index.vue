<template>
    <JPageProjectCategory :projects="projects" />
</template>

<script>
export default {
    data() {
        return {
            projects: [
                {
                    id: 85,
                    title: 'Tòa nhà Landmark 81',
                    slug: 'toa-nha-landmark-81',
                    published_at: '2023-03-08',
                    description:
                        'Landmark 81 - tòa nhà chọc trời cao nhất Việt Nam, đẳng cấp và hiện đại, trang bị nhiều tiện ích cao cấp và tọa lạc tại vị trí đắc địa... ',
                    location: 'TP.HCM',
                    progress: {
                        key: 'success',
                        value: 'Hoàn thành',
                    },
                    category: {
                        id: 24,
                        title: 'Hic earum vel facilis.',
                        slug: 'project-detail',
                        image: { url: null, alt: 'Hic earum vel facilis.' },
                        icon: null,
                        url: '/project/project-detail',
                    },
                    categories: [
                        {
                            id: 24,
                            title: 'Hic earum vel facilis.',
                            slug: 'project-detail',
                            image: { url: null, alt: 'Hic earum vel facilis.' },
                            icon: null,
                            url: '/project/project-detail',
                        },
                    ],
                    image: { url: null, alt: 'Quae rerum non aut tenetur.' },
                    url: '/project/project-detail',
                },
                {
                    id: 85,
                    title: 'Tòa nhà Landmark 81',
                    slug: 'toa-nha-landmark-81',
                    published_at: '2023-03-08',
                    description:
                        'Landmark 81 - tòa nhà chọc trời cao nhất Việt Nam, đẳng cấp và hiện đại, trang bị nhiều tiện ích cao cấp và tọa lạc tại vị trí đắc địa... ',
                    location: 'TP.HCM',
                    progress: {
                        key: 'error',
                        value: 'Chưa hoàn thành',
                    },
                    category: {
                        id: 24,
                        title: 'Hic earum vel facilis.',
                        slug: 'project-detail',
                        image: { url: null, alt: 'Hic earum vel facilis.' },
                        icon: null,
                        url: '/project/project-detail',
                    },
                    categories: [
                        {
                            id: 24,
                            title: 'Hic earum vel facilis.',
                            slug: 'project-detail',
                            image: { url: null, alt: 'Hic earum vel facilis.' },
                            icon: null,
                            url: '/project/project-detail',
                        },
                    ],
                    image: { url: null, alt: 'Quae rerum non aut tenetur.' },
                    url: '/project/project-detail',
                },
                {
                    id: 85,
                    title: 'Tòa nhà Landmark 81',
                    slug: 'toa-nha-landmark-81',
                    published_at: '2023-03-08',
                    description:
                        'Landmark 81 - tòa nhà chọc trời cao nhất Việt Nam, đẳng cấp và hiện đại, trang bị nhiều tiện ích cao cấp và tọa lạc tại vị trí đắc địa... ',
                    location: 'TP.HCM',
                    progress: {
                        key: 'success',
                        value: 'Hoàn thành',
                    },
                    category: {
                        id: 24,
                        title: 'Hic earum vel facilis.',
                        slug: 'project-detail',
                        image: { url: null, alt: 'Hic earum vel facilis.' },
                        icon: null,
                        url: '/project/project-detail',
                    },
                    categories: [
                        {
                            id: 24,
                            title: 'Hic earum vel facilis.',
                            slug: 'project-detail',
                            image: { url: null, alt: 'Hic earum vel facilis.' },
                            icon: null,
                            url: '/project/project-detail',
                        },
                    ],
                    image: { url: null, alt: 'Quae rerum non aut tenetur.' },
                    url: '/project/project-detail',
                },
                {
                    id: 85,
                    title: 'Tòa nhà Landmark 81',
                    slug: 'toa-nha-landmark-81',
                    published_at: '2023-03-08',
                    description:
                        'Landmark 81 - tòa nhà chọc trời cao nhất Việt Nam, đẳng cấp và hiện đại, trang bị nhiều tiện ích cao cấp và tọa lạc tại vị trí đắc địa... ',
                    location: 'TP.HCM',
                    progress: {
                        key: 'success',
                        value: 'Hoàn thành',
                    },
                    category: {
                        id: 24,
                        title: 'Hic earum vel facilis.',
                        slug: 'project-detail',
                        image: { url: null, alt: 'Hic earum vel facilis.' },
                        icon: null,
                        url: '/project/project-detail',
                    },
                    categories: [
                        {
                            id: 24,
                            title: 'Hic earum vel facilis.',
                            slug: 'project-detail',
                            image: { url: null, alt: 'Hic earum vel facilis.' },
                            icon: null,
                            url: '/project/project-detail',
                        },
                    ],
                    image: { url: null, alt: 'Quae rerum non aut tenetur.' },
                    url: '/project/project-detail',
                },
                {
                    id: 85,
                    title: 'Tòa nhà Landmark 81',
                    slug: 'toa-nha-landmark-81',
                    published_at: '2023-03-08',
                    description:
                        'Landmark 81 - tòa nhà chọc trời cao nhất Việt Nam, đẳng cấp và hiện đại, trang bị nhiều tiện ích cao cấp và tọa lạc tại vị trí đắc địa... ',
                    location: 'TP.HCM',
                    progress: {
                        key: 'success',
                        value: 'Hoàn thành',
                    },
                    category: {
                        id: 24,
                        title: 'Hic earum vel facilis.',
                        slug: 'project-detail',
                        image: { url: null, alt: 'Hic earum vel facilis.' },
                        icon: null,
                        url: '/project/project-detail',
                    },
                    categories: [
                        {
                            id: 24,
                            title: 'Hic earum vel facilis.',
                            slug: 'project-detail',
                            image: { url: null, alt: 'Hic earum vel facilis.' },
                            icon: null,
                            url: '/project/project-detail',
                        },
                    ],
                    image: { url: null, alt: 'Quae rerum non aut tenetur.' },
                    url: '/project/project-detail',
                },
                {
                    id: 85,
                    title: 'Tòa nhà Landmark 81',
                    slug: 'toa-nha-landmark-81',
                    published_at: '2023-03-08',
                    description:
                        'Landmark 81 - tòa nhà chọc trời cao nhất Việt Nam, đẳng cấp và hiện đại, trang bị nhiều tiện ích cao cấp và tọa lạc tại vị trí đắc địa... ',
                    location: 'TP.HCM',
                    progress: {
                        key: 'success',
                        value: 'Hoàn thành',
                    },
                    category: {
                        id: 24,
                        title: 'Hic earum vel facilis.',
                        slug: 'project-detail',
                        image: { url: null, alt: 'Hic earum vel facilis.' },
                        icon: null,
                        url: '/project/project-detail',
                    },
                    categories: [
                        {
                            id: 24,
                            title: 'Hic earum vel facilis.',
                            slug: 'project-detail',
                            image: { url: null, alt: 'Hic earum vel facilis.' },
                            icon: null,
                            url: '/project/project-detail',
                        },
                    ],
                    image: { url: null, alt: 'Quae rerum non aut tenetur.' },
                    url: '/project/project-detail',
                },
                {
                    id: 85,
                    title: 'Tòa nhà Landmark 81',
                    slug: 'toa-nha-landmark-81',
                    published_at: '2023-03-08',
                    description:
                        'Landmark 81 - tòa nhà chọc trời cao nhất Việt Nam, đẳng cấp và hiện đại, trang bị nhiều tiện ích cao cấp và tọa lạc tại vị trí đắc địa... ',
                    location: 'TP.HCM',
                    progress: {
                        key: 'success',
                        value: 'Hoàn thành',
                    },
                    category: {
                        id: 24,
                        title: 'Hic earum vel facilis.',
                        slug: 'project-detail',
                        image: { url: null, alt: 'Hic earum vel facilis.' },
                        icon: null,
                        url: '/project/project-detail',
                    },
                    categories: [
                        {
                            id: 24,
                            title: 'Hic earum vel facilis.',
                            slug: 'project-detail',
                            image: { url: null, alt: 'Hic earum vel facilis.' },
                            icon: null,
                            url: '/project/project-detail',
                        },
                    ],
                    image: { url: null, alt: 'Quae rerum non aut tenetur.' },
                    url: '/project/project-detail',
                },
                {
                    id: 85,
                    title: 'Tòa nhà Landmark 81',
                    slug: 'toa-nha-landmark-81',
                    published_at: '2023-03-08',
                    description:
                        'Landmark 81 - tòa nhà chọc trời cao nhất Việt Nam, đẳng cấp và hiện đại, trang bị nhiều tiện ích cao cấp và tọa lạc tại vị trí đắc địa... ',
                    location: 'TP.HCM',
                    progress: {
                        key: 'success',
                        value: 'Hoàn thành',
                    },
                    category: {
                        id: 24,
                        title: 'Hic earum vel facilis.',
                        slug: 'project-detail',
                        image: { url: null, alt: 'Hic earum vel facilis.' },
                        icon: null,
                        url: '/project/project-detail',
                    },
                    categories: [
                        {
                            id: 24,
                            title: 'Hic earum vel facilis.',
                            slug: 'project-detail',
                            image: { url: null, alt: 'Hic earum vel facilis.' },
                            icon: null,
                            url: '/project/project-detail',
                        },
                    ],
                    image: { url: null, alt: 'Quae rerum non aut tenetur.' },
                    url: '/project/project-detail',
                },
            ],
        }
    },
}
</script>
