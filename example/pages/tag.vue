<template>
    <JPageTag :breadcrumb="breadcrumb" :posts_data="posts_data" :tag="tag" :banner="banner" />
</template>

<script>
export default {
    data() {
        return {
            breadcrumb: [
                {
                    title: 'Trang chủ',
                    link: '/',
                },
                {
                    title: 'Jamstack VietNam',
                },
            ],

            posts_data: [
                {
                    id: 85,
                    title: 'Quae rerum non aut tenetur.',
                    slug: 'quae-rerum-non-aut-tenetur',
                    published_at: '2023-03-08',
                    description:
                        'A harum velit fugit culpa facilis repellat. Dolore ut quia placeat aspernatur sapiente in distinctio. Quia est voluptatem provident id.',
                    category: {
                        id: 24,
                        title: 'Hic earum vel facilis.',
                        slug: 'hic-earum-vel-facilis',
                        image: { url: null, alt: 'Hic earum vel facilis.' },
                        icon: null,
                        url: 'http://localhost:8000/tin-tuc/hic-earum-vel-facilis',
                    },
                    categories: [
                        {
                            id: 24,
                            title: 'Hic earum vel facilis.',
                            slug: 'hic-earum-vel-facilis',
                            image: { url: null, alt: 'Hic earum vel facilis.' },
                            icon: null,
                            url: 'http://localhost:8000/tin-tuc/hic-earum-vel-facilis',
                        },
                    ],
                    image: { url: null, alt: 'Quae rerum non aut tenetur.' },
                    url: 'http://localhost:8000/tin-tuc/hic-earum-vel-facilis/quae-rerum-non-aut-tenetur',
                },
                {
                    id: 77,
                    title: 'Nam laboriosam.',
                    slug: 'nam-laboriosam',
                    published_at: '2023-03-08',
                    description:
                        'Eveniet maxime velit modi rerum molestiae. Accusantium qui sequi sunt commodi doloribus cum.',
                    category: {
                        id: 3,
                        title: 'Sit non.',
                        slug: 'sit-non',
                        image: { url: null, alt: 'Sit non.' },
                        icon: null,
                        url: 'http://localhost:8000/tin-tuc/sit-non',
                    },
                    categories: [
                        {
                            id: 3,
                            title: 'Sit non.',
                            slug: 'sit-non',
                            image: { url: null, alt: 'Sit non.' },
                            icon: null,
                            url: 'http://localhost:8000/tin-tuc/sit-non',
                        },
                        {
                            id: 24,
                            title: 'Hic earum vel facilis.',
                            slug: 'hic-earum-vel-facilis',
                            image: { url: null, alt: 'Hic earum vel facilis.' },
                            icon: null,
                            url: 'http://localhost:8000/tin-tuc/hic-earum-vel-facilis',
                        },
                    ],
                    image: { url: null, alt: 'Nam laboriosam.' },
                    url: 'http://localhost:8000/tin-tuc/sit-non/nam-laboriosam',
                },
                {
                    id: 44,
                    title: 'Sit omnis sint vel.',
                    slug: 'sit-omnis-sint-vel',
                    published_at: '2023-03-08',
                    description:
                        'Ex quae explicabo et porro eveniet. Molestiae nulla quae accusantium necessitatibus sequi et beatae. Quas molestiae laboriosam in quis saepe dolores. Exercitationem tenetur totam voluptas similique.',
                    category: {
                        id: 16,
                        title: 'Odit alias pariatur.',
                        slug: 'odit-alias-pariatur',
                        image: { url: null, alt: 'Odit alias pariatur.' },
                        icon: null,
                        url: 'http://localhost:8000/tin-tuc/odit-alias-pariatur',
                    },
                    categories: [
                        {
                            id: 16,
                            title: 'Odit alias pariatur.',
                            slug: 'odit-alias-pariatur',
                            image: { url: null, alt: 'Odit alias pariatur.' },
                            icon: null,
                            url: 'http://localhost:8000/tin-tuc/odit-alias-pariatur',
                        },
                        {
                            id: 24,
                            title: 'Hic earum vel facilis.',
                            slug: 'hic-earum-vel-facilis',
                            image: { url: null, alt: 'Hic earum vel facilis.' },
                            icon: null,
                            url: 'http://localhost:8000/tin-tuc/hic-earum-vel-facilis',
                        },
                    ],
                    image: { url: null, alt: 'Sit omnis sint vel.' },
                    url: 'http://localhost:8000/tin-tuc/odit-alias-pariatur/sit-omnis-sint-vel',
                },
                {
                    id: 85,
                    title: 'Quae rerum non aut tenetur.',
                    slug: 'quae-rerum-non-aut-tenetur',
                    published_at: '2023-03-08',
                    description:
                        'A harum velit fugit culpa facilis repellat. Dolore ut quia placeat aspernatur sapiente in distinctio. Quia est voluptatem provident id.',
                    category: {
                        id: 24,
                        title: 'Hic earum vel facilis.',
                        slug: 'hic-earum-vel-facilis',
                        image: { url: null, alt: 'Hic earum vel facilis.' },
                        icon: null,
                        url: 'http://localhost:8000/tin-tuc/hic-earum-vel-facilis',
                    },
                    categories: [
                        {
                            id: 24,
                            title: 'Hic earum vel facilis.',
                            slug: 'hic-earum-vel-facilis',
                            image: { url: null, alt: 'Hic earum vel facilis.' },
                            icon: null,
                            url: 'http://localhost:8000/tin-tuc/hic-earum-vel-facilis',
                        },
                    ],
                    image: { url: null, alt: 'Quae rerum non aut tenetur.' },
                    url: 'http://localhost:8000/tin-tuc/hic-earum-vel-facilis/quae-rerum-non-aut-tenetur',
                },
                {
                    id: 77,
                    title: 'Nam laboriosam.',
                    slug: 'nam-laboriosam',
                    published_at: '2023-03-08',
                    description:
                        'Eveniet maxime velit modi rerum molestiae. Accusantium qui sequi sunt commodi doloribus cum.',
                    category: {
                        id: 3,
                        title: 'Sit non.',
                        slug: 'sit-non',
                        image: { url: null, alt: 'Sit non.' },
                        icon: null,
                        url: 'http://localhost:8000/tin-tuc/sit-non',
                    },
                    categories: [
                        {
                            id: 3,
                            title: 'Sit non.',
                            slug: 'sit-non',
                            image: { url: null, alt: 'Sit non.' },
                            icon: null,
                            url: 'http://localhost:8000/tin-tuc/sit-non',
                        },
                        {
                            id: 24,
                            title: 'Hic earum vel facilis.',
                            slug: 'hic-earum-vel-facilis',
                            image: { url: null, alt: 'Hic earum vel facilis.' },
                            icon: null,
                            url: 'http://localhost:8000/tin-tuc/hic-earum-vel-facilis',
                        },
                    ],
                    image: { url: null, alt: 'Nam laboriosam.' },
                    url: 'http://localhost:8000/tin-tuc/sit-non/nam-laboriosam',
                },
                {
                    id: 44,
                    title: 'Sit omnis sint vel.',
                    slug: 'sit-omnis-sint-vel',
                    published_at: '2023-03-08',
                    description:
                        'Ex quae explicabo et porro eveniet. Molestiae nulla quae accusantium necessitatibus sequi et beatae. Quas molestiae laboriosam in quis saepe dolores. Exercitationem tenetur totam voluptas similique.',
                    category: {
                        id: 16,
                        title: 'Odit alias pariatur.',
                        slug: 'odit-alias-pariatur',
                        image: { url: null, alt: 'Odit alias pariatur.' },
                        icon: null,
                        url: 'http://localhost:8000/tin-tuc/odit-alias-pariatur',
                    },
                    categories: [
                        {
                            id: 16,
                            title: 'Odit alias pariatur.',
                            slug: 'odit-alias-pariatur',
                            image: { url: null, alt: 'Odit alias pariatur.' },
                            icon: null,
                            url: 'http://localhost:8000/tin-tuc/odit-alias-pariatur',
                        },
                        {
                            id: 24,
                            title: 'Hic earum vel facilis.',
                            slug: 'hic-earum-vel-facilis',
                            image: { url: null, alt: 'Hic earum vel facilis.' },
                            icon: null,
                            url: 'http://localhost:8000/tin-tuc/hic-earum-vel-facilis',
                        },
                    ],
                    image: { url: null, alt: 'Sit omnis sint vel.' },
                    url: 'http://localhost:8000/tin-tuc/odit-alias-pariatur/sit-omnis-sint-vel',
                },
                {
                    id: 44,
                    title: 'Sit omnis sint vel.',
                    slug: 'sit-omnis-sint-vel',
                    published_at: '2023-03-08',
                    description:
                        'Ex quae explicabo et porro eveniet. Molestiae nulla quae accusantium necessitatibus sequi et beatae. Quas molestiae laboriosam in quis saepe dolores. Exercitationem tenetur totam voluptas similique.',
                    category: {
                        id: 16,
                        title: 'Odit alias pariatur.',
                        slug: 'odit-alias-pariatur',
                        image: { url: null, alt: 'Odit alias pariatur.' },
                        icon: null,
                        url: 'http://localhost:8000/tin-tuc/odit-alias-pariatur',
                    },
                    categories: [
                        {
                            id: 16,
                            title: 'Odit alias pariatur.',
                            slug: 'odit-alias-pariatur',
                            image: { url: null, alt: 'Odit alias pariatur.' },
                            icon: null,
                            url: 'http://localhost:8000/tin-tuc/odit-alias-pariatur',
                        },
                        {
                            id: 24,
                            title: 'Hic earum vel facilis.',
                            slug: 'hic-earum-vel-facilis',
                            image: { url: null, alt: 'Hic earum vel facilis.' },
                            icon: null,
                            url: 'http://localhost:8000/tin-tuc/hic-earum-vel-facilis',
                        },
                    ],
                    image: { url: null, alt: 'Sit omnis sint vel.' },
                    url: 'http://localhost:8000/tin-tuc/odit-alias-pariatur/sit-omnis-sint-vel',
                },
                {
                    id: 85,
                    title: 'Quae rerum non aut tenetur.',
                    slug: 'quae-rerum-non-aut-tenetur',
                    published_at: '2023-03-08',
                    description:
                        'A harum velit fugit culpa facilis repellat. Dolore ut quia placeat aspernatur sapiente in distinctio. Quia est voluptatem provident id.',
                    category: {
                        id: 24,
                        title: 'Hic earum vel facilis.',
                        slug: 'hic-earum-vel-facilis',
                        image: { url: null, alt: 'Hic earum vel facilis.' },
                        icon: null,
                        url: 'http://localhost:8000/tin-tuc/hic-earum-vel-facilis',
                    },
                    categories: [
                        {
                            id: 24,
                            title: 'Hic earum vel facilis.',
                            slug: 'hic-earum-vel-facilis',
                            image: { url: null, alt: 'Hic earum vel facilis.' },
                            icon: null,
                            url: 'http://localhost:8000/tin-tuc/hic-earum-vel-facilis',
                        },
                    ],
                    image: { url: null, alt: 'Quae rerum non aut tenetur.' },
                    url: 'http://localhost:8000/tin-tuc/hic-earum-vel-facilis/quae-rerum-non-aut-tenetur',
                },
                {
                    id: 77,
                    title: 'Nam laboriosam.',
                    slug: 'nam-laboriosam',
                    published_at: '2023-03-08',
                    description:
                        'Eveniet maxime velit modi rerum molestiae. Accusantium qui sequi sunt commodi doloribus cum.',
                    category: {
                        id: 3,
                        title: 'Sit non.',
                        slug: 'sit-non',
                        image: { url: null, alt: 'Sit non.' },
                        icon: null,
                        url: 'http://localhost:8000/tin-tuc/sit-non',
                    },
                    categories: [
                        {
                            id: 3,
                            title: 'Sit non.',
                            slug: 'sit-non',
                            image: { url: null, alt: 'Sit non.' },
                            icon: null,
                            url: 'http://localhost:8000/tin-tuc/sit-non',
                        },
                        {
                            id: 24,
                            title: 'Hic earum vel facilis.',
                            slug: 'hic-earum-vel-facilis',
                            image: { url: null, alt: 'Hic earum vel facilis.' },
                            icon: null,
                            url: 'http://localhost:8000/tin-tuc/hic-earum-vel-facilis',
                        },
                    ],
                    image: { url: null, alt: 'Nam laboriosam.' },
                    url: 'http://localhost:8000/tin-tuc/sit-non/nam-laboriosam',
                },
                {
                    id: 44,
                    title: 'Sit omnis sint vel.',
                    slug: 'sit-omnis-sint-vel',
                    published_at: '2023-03-08',
                    description:
                        'Ex quae explicabo et porro eveniet. Molestiae nulla quae accusantium necessitatibus sequi et beatae. Quas molestiae laboriosam in quis saepe dolores. Exercitationem tenetur totam voluptas similique.',
                    category: {
                        id: 16,
                        title: 'Odit alias pariatur.',
                        slug: 'odit-alias-pariatur',
                        image: { url: null, alt: 'Odit alias pariatur.' },
                        icon: null,
                        url: 'http://localhost:8000/tin-tuc/odit-alias-pariatur',
                    },
                    categories: [
                        {
                            id: 16,
                            title: 'Odit alias pariatur.',
                            slug: 'odit-alias-pariatur',
                            image: { url: null, alt: 'Odit alias pariatur.' },
                            icon: null,
                            url: 'http://localhost:8000/tin-tuc/odit-alias-pariatur',
                        },
                        {
                            id: 24,
                            title: 'Hic earum vel facilis.',
                            slug: 'hic-earum-vel-facilis',
                            image: { url: null, alt: 'Hic earum vel facilis.' },
                            icon: null,
                            url: 'http://localhost:8000/tin-tuc/hic-earum-vel-facilis',
                        },
                    ],
                    image: { url: null, alt: 'Sit omnis sint vel.' },
                    url: 'http://localhost:8000/tin-tuc/odit-alias-pariatur/sit-omnis-sint-vel',
                },
            ],

            tag: {
                title: 'Jamstack VietNam',
            },

            banner: {
                id: 2,
                title: '<p>Demo</p>',
                description: null,
                link: null,
                target: '_self',
                custom_fields: null,
                image: { url: 'https://via.placeholder.com/300x400', alt: 'Demo' },
                image_mobile: { url: null, alt: 'Demo' },
            },
        }
    },
}
</script>
