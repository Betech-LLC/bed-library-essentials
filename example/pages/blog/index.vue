<template>
    <JBlogCategory
        :bannerTop="bannerTop"
        :top_posts="top_posts"
        :top_views="top_views"
        :posts_data="posts_data"
        :banner="banner"
    />
</template>

<script>
export default {
    data() {
        return {
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
            ],

            bannerTop: {
                image: {
                    url: 'https://via.placeholder.com/900x300',
                    alt: 'banner blog category',
                },
            },

            top_posts: [
                {
                    id: 191,
                    title: 'Dolorem non.',
                    slug: 'dolorem-non',
                    published_at: '2023-03-08',
                    description:
                        'Explicabo reprehenderit temporibus nihil velit qui omnis amet. Vel id consequatur facilis sint unde. Aut officiis natus quia quia nisi similique. Voluptates est culpa dolore aut.',
                    category: {
                        id: 4,
                        title: 'Dolorem cumque.',
                        slug: 'dolorem-cumque',
                        image: { url: null, alt: 'Dolorem cumque.' },
                        icon: null,
                        url: 'http://localhost:8000/tin-tuc/dolorem-cumque',
                    },
                    categories: [
                        {
                            id: 4,
                            title: 'Dolorem cumque.',
                            slug: 'dolorem-cumque',
                            image: { url: null, alt: 'Dolorem cumque.' },
                            icon: null,
                            url: 'http://localhost:8000/tin-tuc/dolorem-cumque',
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
                    image: { url: null, alt: 'Dolorem non.' },
                    url: 'http://localhost:8000/tin-tuc/dolorem-cumque/dolorem-non',
                },
                {
                    id: 162,
                    title: 'Inventore id ad.',
                    slug: 'inventore-id-ad',
                    published_at: '2023-03-08',
                    description:
                        'Dolores in et aut aut magnam. Labore dolores velit quas ut magnam. Sed quaerat sunt quia quidem. Dolore porro quisquam quia cumque.',
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
                    image: { url: null, alt: 'Inventore id ad.' },
                    url: 'http://localhost:8000/tin-tuc/hic-earum-vel-facilis/inventore-id-ad',
                },
                {
                    id: 117,
                    title: 'Officiis.',
                    slug: 'officiis',
                    published_at: '2023-03-08',
                    description:
                        'Incidunt officiis omnis atque eius. Officia quia aut molestiae eius quisquam ut. Et molestias voluptatem iusto facere id qui.',
                    category: {
                        id: 2,
                        title: 'Libero ducimus in.',
                        slug: 'libero-ducimus-in',
                        image: { url: null, alt: 'Libero ducimus in.' },
                        icon: null,
                        url: 'http://localhost:8000/tin-tuc/libero-ducimus-in',
                    },
                    categories: [
                        {
                            id: 2,
                            title: 'Libero ducimus in.',
                            slug: 'libero-ducimus-in',
                            image: { url: null, alt: 'Libero ducimus in.' },
                            icon: null,
                            url: 'http://localhost:8000/tin-tuc/libero-ducimus-in',
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
                    image: { url: null, alt: 'Officiis.' },
                    url: 'http://localhost:8000/tin-tuc/libero-ducimus-in/officiis',
                },
                {
                    id: 102,
                    title: 'Voluptas est maiores.',
                    slug: 'voluptas-est-maiores',
                    published_at: '2023-03-08',
                    description:
                        'Perspiciatis vel quaerat a in id voluptate. Voluptatem ad quia at esse blanditiis facere. Accusantium qui voluptas repudiandae et. Ad molestiae debitis ea.',
                    category: {
                        id: 8,
                        title: 'Quidem sit.',
                        slug: 'quidem-sit',
                        image: { url: null, alt: 'Quidem sit.' },
                        icon: null,
                        url: 'http://localhost:8000/tin-tuc/quidem-sit',
                    },
                    categories: [
                        {
                            id: 8,
                            title: 'Quidem sit.',
                            slug: 'quidem-sit',
                            image: { url: null, alt: 'Quidem sit.' },
                            icon: null,
                            url: 'http://localhost:8000/tin-tuc/quidem-sit',
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
                    image: { url: null, alt: 'Voluptas est maiores.' },
                    url: 'http://localhost:8000/tin-tuc/quidem-sit/voluptas-est-maiores',
                },
            ],

            top_views: [
                {
                    id: 191,
                    title: 'Dolorem non.',
                    slug: 'dolorem-non',
                    published_at: '2023-03-08',
                    description:
                        'Explicabo reprehenderit temporibus nihil velit qui omnis amet. Vel id consequatur facilis sint unde. Aut officiis natus quia quia nisi similique. Voluptates est culpa dolore aut.',
                    category: {
                        id: 4,
                        title: 'Dolorem cumque.',
                        slug: 'dolorem-cumque',
                        image: { url: null, alt: 'Dolorem cumque.' },
                        icon: null,
                        url: 'http://localhost:8000/tin-tuc/dolorem-cumque',
                    },
                    categories: [
                        {
                            id: 4,
                            title: 'Dolorem cumque.',
                            slug: 'dolorem-cumque',
                            image: { url: null, alt: 'Dolorem cumque.' },
                            icon: null,
                            url: 'http://localhost:8000/tin-tuc/dolorem-cumque',
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
                    image: { url: null, alt: 'Dolorem non.' },
                    url: 'http://localhost:8000/tin-tuc/dolorem-cumque/dolorem-non',
                },
                {
                    id: 162,
                    title: 'Inventore id ad.',
                    slug: 'inventore-id-ad',
                    published_at: '2023-03-08',
                    description:
                        'Dolores in et aut aut magnam. Labore dolores velit quas ut magnam. Sed quaerat sunt quia quidem. Dolore porro quisquam quia cumque.',
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
                    image: { url: null, alt: 'Inventore id ad.' },
                    url: 'http://localhost:8000/tin-tuc/hic-earum-vel-facilis/inventore-id-ad',
                },
                {
                    id: 117,
                    title: 'Officiis.',
                    slug: 'officiis',
                    published_at: '2023-03-08',
                    description:
                        'Incidunt officiis omnis atque eius. Officia quia aut molestiae eius quisquam ut. Et molestias voluptatem iusto facere id qui.',
                    category: {
                        id: 2,
                        title: 'Libero ducimus in.',
                        slug: 'libero-ducimus-in',
                        image: { url: null, alt: 'Libero ducimus in.' },
                        icon: null,
                        url: 'http://localhost:8000/tin-tuc/libero-ducimus-in',
                    },
                    categories: [
                        {
                            id: 2,
                            title: 'Libero ducimus in.',
                            slug: 'libero-ducimus-in',
                            image: { url: null, alt: 'Libero ducimus in.' },
                            icon: null,
                            url: 'http://localhost:8000/tin-tuc/libero-ducimus-in',
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
                    image: { url: null, alt: 'Officiis.' },
                    url: 'http://localhost:8000/tin-tuc/libero-ducimus-in/officiis',
                },
                {
                    id: 102,
                    title: 'Voluptas est maiores.',
                    slug: 'voluptas-est-maiores',
                    published_at: '2023-03-08',
                    description:
                        'Perspiciatis vel quaerat a in id voluptate. Voluptatem ad quia at esse blanditiis facere. Accusantium qui voluptas repudiandae et. Ad molestiae debitis ea.',
                    category: {
                        id: 8,
                        title: 'Quidem sit.',
                        slug: 'quidem-sit',
                        image: { url: null, alt: 'Quidem sit.' },
                        icon: null,
                        url: 'http://localhost:8000/tin-tuc/quidem-sit',
                    },
                    categories: [
                        {
                            id: 8,
                            title: 'Quidem sit.',
                            slug: 'quidem-sit',
                            image: { url: null, alt: 'Quidem sit.' },
                            icon: null,
                            url: 'http://localhost:8000/tin-tuc/quidem-sit',
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
                    image: { url: null, alt: 'Voluptas est maiores.' },
                    url: 'http://localhost:8000/tin-tuc/quidem-sit/voluptas-est-maiores',
                },
            ],

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
