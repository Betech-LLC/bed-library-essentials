<template>
    <JPageTag
        :breadcrumb="breadcrumb"
        :posts="posts"
        :posts_data="posts_data"
        :tag="tag"
        :banner="banner"
        :layout="2"
    />
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
            ],

            posts: {
                current_page: 1,
                data: [
                    {
                        id: 158,
                        title: 'Eos deleniti.',
                        slug: 'eos-deleniti',
                        published_at: '2023-03-30',
                        description:
                            'Vero exercitationem ut qui sit id id sint. Provident animi quia qui explicabo dolor.',
                        category: {
                            id: 4,
                            title: 'Nihil debitis officia quam.',
                            slug: 'nihil-debitis-officia-quam',
                            image: { url: null, alt: 'Nihil debitis officia quam.' },
                            icon: null,
                            url: '/bai-viet/nihil-debitis-officia-quam',
                        },
                        categories: [
                            {
                                id: 4,
                                title: 'Nihil debitis officia quam.',
                                slug: 'nihil-debitis-officia-quam',
                                image: { url: null, alt: 'Nihil debitis officia quam.' },
                                icon: null,
                                url: '/bai-viet/nihil-debitis-officia-quam',
                            },
                            {
                                id: 20,
                                title: 'Qui nisi libero ut.',
                                slug: 'qui-nisi-libero-ut',
                                image: { url: null, alt: 'Qui nisi libero ut.' },
                                icon: null,
                                url: '/bai-viet/qui-nisi-libero-ut',
                            },
                        ],
                        image: { url: null, alt: 'Eos deleniti.' },
                        url: '/bai-viet/nihil-debitis-officia-quam/eos-deleniti',
                    },
                    {
                        id: 148,
                        title: 'Et qui.',
                        slug: 'et-qui',
                        published_at: '2023-03-30',
                        description:
                            'Harum est possimus dignissimos adipisci sunt. Ut qui maxime officiis animi dolore veniam voluptates. Corrupti aut nostrum aut aut autem laborum magni.',
                        category: {
                            id: 18,
                            title: 'Quis delectus natus.',
                            slug: 'quis-delectus-natus',
                            image: { url: null, alt: 'Quis delectus natus.' },
                            icon: null,
                            url: '/bai-viet/quis-delectus-natus',
                        },
                        categories: [
                            {
                                id: 18,
                                title: 'Quis delectus natus.',
                                slug: 'quis-delectus-natus',
                                image: { url: null, alt: 'Quis delectus natus.' },
                                icon: null,
                                url: '/bai-viet/quis-delectus-natus',
                            },
                        ],
                        image: { url: null, alt: 'Et qui.' },
                        url: '/bai-viet/quis-delectus-natus/et-qui',
                    },
                    {
                        id: 147,
                        title: 'Vitae.',
                        slug: 'vitae',
                        published_at: '2023-03-30',
                        description:
                            'Nobis dolorem qui accusamus veniam ut quia asperiores. Aut accusantium ad libero consectetur. Dignissimos unde facere in reprehenderit laboriosam accusamus. Dignissimos dolorum sequi dolor at cumque.',
                        category: {
                            id: 14,
                            title: 'Enim.',
                            slug: 'enim',
                            image: { url: null, alt: 'Enim.' },
                            icon: null,
                            url: '/bai-viet/enim',
                        },
                        categories: [
                            {
                                id: 14,
                                title: 'Enim.',
                                slug: 'enim',
                                image: { url: null, alt: 'Enim.' },
                                icon: null,
                                url: '/bai-viet/enim',
                            },
                        ],
                        image: { url: null, alt: 'Vitae.' },
                        url: '/bai-viet/enim/vitae',
                    },
                    {
                        id: 145,
                        title: 'Natus pariatur.',
                        slug: 'natus-pariatur',
                        published_at: '2023-03-30',
                        description:
                            'Quis dignissimos nisi fuga. Qui esse rem distinctio nulla qui. Animi cupiditate et qui nihil tempore provident autem. Sit harum sint enim qui.',
                        category: {
                            id: 4,
                            title: 'Nihil debitis officia quam.',
                            slug: 'nihil-debitis-officia-quam',
                            image: { url: null, alt: 'Nihil debitis officia quam.' },
                            icon: null,
                            url: '/bai-viet/nihil-debitis-officia-quam',
                        },
                        categories: [
                            {
                                id: 4,
                                title: 'Nihil debitis officia quam.',
                                slug: 'nihil-debitis-officia-quam',
                                image: { url: null, alt: 'Nihil debitis officia quam.' },
                                icon: null,
                                url: '/bai-viet/nihil-debitis-officia-quam',
                            },
                        ],
                        image: { url: null, alt: 'Natus pariatur.' },
                        url: '/bai-viet/nihil-debitis-officia-quam/natus-pariatur',
                    },
                    {
                        id: 140,
                        title: 'Nobis itaque aut quo.',
                        slug: 'nobis-itaque-aut-quo',
                        published_at: '2023-03-30',
                        description:
                            'Ut beatae vero enim sit voluptatem. Laudantium qui eos qui quam nobis enim iusto quisquam. Nihil et voluptas enim doloribus eum. A ad repellat eos.',
                        category: {
                            id: 10,
                            title: 'Qui quia officiis odio.',
                            slug: 'qui-quia-officiis-odio',
                            image: { url: null, alt: 'Qui quia officiis odio.' },
                            icon: null,
                            url: '/bai-viet/qui-quia-officiis-odio',
                        },
                        categories: [
                            {
                                id: 10,
                                title: 'Qui quia officiis odio.',
                                slug: 'qui-quia-officiis-odio',
                                image: { url: null, alt: 'Qui quia officiis odio.' },
                                icon: null,
                                url: '/bai-viet/qui-quia-officiis-odio',
                            },
                            {
                                id: 11,
                                title: 'Exercitationem enim.',
                                slug: 'exercitationem-enim',
                                image: { url: null, alt: 'Exercitationem enim.' },
                                icon: null,
                                url: '/bai-viet/exercitationem-enim',
                            },
                        ],
                        image: { url: null, alt: 'Nobis itaque aut quo.' },
                        url: '/bai-viet/qui-quia-officiis-odio/nobis-itaque-aut-quo',
                    },
                    {
                        id: 137,
                        title: 'Aut et rerum ut qui et.',
                        slug: 'aut-et-rerum-ut-qui-et',
                        published_at: '2023-03-30',
                        description: 'Et ab numquam aut et consequatur doloribus. Aperiam at hic et voluptatum et.',
                        category: {
                            id: 11,
                            title: 'Exercitationem enim.',
                            slug: 'exercitationem-enim',
                            image: { url: null, alt: 'Exercitationem enim.' },
                            icon: null,
                            url: '/bai-viet/exercitationem-enim',
                        },
                        categories: [
                            {
                                id: 11,
                                title: 'Exercitationem enim.',
                                slug: 'exercitationem-enim',
                                image: { url: null, alt: 'Exercitationem enim.' },
                                icon: null,
                                url: '/bai-viet/exercitationem-enim',
                            },
                        ],
                        image: { url: null, alt: 'Aut et rerum ut qui et.' },
                        url: '/bai-viet/exercitationem-enim/aut-et-rerum-ut-qui-et',
                    },
                    {
                        id: 134,
                        title: 'Molestiae quam saepe.',
                        slug: 'molestiae-quam-saepe',
                        published_at: '2023-03-30',
                        description:
                            'Id porro fugit nemo culpa qui delectus. Sit voluptatem dolores qui nesciunt fugit. Suscipit quasi optio quam.',
                        category: {
                            id: 9,
                            title: 'Omnis ad rerum.',
                            slug: 'omnis-ad-rerum',
                            image: { url: null, alt: 'Omnis ad rerum.' },
                            icon: null,
                            url: '/bai-viet/omnis-ad-rerum',
                        },
                        categories: [
                            {
                                id: 9,
                                title: 'Omnis ad rerum.',
                                slug: 'omnis-ad-rerum',
                                image: { url: null, alt: 'Omnis ad rerum.' },
                                icon: null,
                                url: '/bai-viet/omnis-ad-rerum',
                            },
                        ],
                        image: { url: null, alt: 'Molestiae quam saepe.' },
                        url: '/bai-viet/omnis-ad-rerum/molestiae-quam-saepe',
                    },
                    {
                        id: 131,
                        title: 'Voluptatem sapiente.',
                        slug: 'voluptatem-sapiente',
                        published_at: '2023-03-30',
                        description:
                            'Et velit amet expedita aspernatur dolor autem. Illo quaerat sint alias. Dolores ut harum qui ea delectus possimus possimus eum. Molestias in recusandae eum est.',
                        category: {
                            id: 7,
                            title: 'Et atque.',
                            slug: 'et-atque',
                            image: { url: null, alt: 'Et atque.' },
                            icon: null,
                            url: '/bai-viet/et-atque',
                        },
                        categories: [
                            {
                                id: 7,
                                title: 'Et atque.',
                                slug: 'et-atque',
                                image: { url: null, alt: 'Et atque.' },
                                icon: null,
                                url: '/bai-viet/et-atque',
                            },
                        ],
                        image: { url: null, alt: 'Voluptatem sapiente.' },
                        url: '/bai-viet/et-atque/voluptatem-sapiente',
                    },
                    {
                        id: 88,
                        title: 'Et id non omnis rerum.',
                        slug: 'et-id-non-omnis-rerum',
                        published_at: '2023-03-30',
                        description:
                            'Quibusdam modi ipsum et libero voluptas tempora. Sequi hic quia aut nulla dolor placeat. Ducimus eligendi et nam eum.',
                        category: {
                            id: 7,
                            title: 'Et atque.',
                            slug: 'et-atque',
                            image: { url: null, alt: 'Et atque.' },
                            icon: null,
                            url: '/bai-viet/et-atque',
                        },
                        categories: [
                            {
                                id: 7,
                                title: 'Et atque.',
                                slug: 'et-atque',
                                image: { url: null, alt: 'Et atque.' },
                                icon: null,
                                url: '/bai-viet/et-atque',
                            },
                            {
                                id: 20,
                                title: 'Qui nisi libero ut.',
                                slug: 'qui-nisi-libero-ut',
                                image: { url: null, alt: 'Qui nisi libero ut.' },
                                icon: null,
                                url: '/bai-viet/qui-nisi-libero-ut',
                            },
                        ],
                        image: { url: null, alt: 'Et id non omnis rerum.' },
                        url: '/bai-viet/et-atque/et-id-non-omnis-rerum',
                    },
                    {
                        id: 61,
                        title: 'Nesciunt molestias.',
                        slug: 'nesciunt-molestias',
                        published_at: '2023-03-30',
                        description:
                            'Vel quia quasi voluptate nostrum numquam. Tempore et dignissimos optio eos. In tenetur reprehenderit unde magni et reiciendis. Tenetur ullam ratione illum distinctio.',
                        category: {
                            id: 14,
                            title: 'Enim.',
                            slug: 'enim',
                            image: { url: null, alt: 'Enim.' },
                            icon: null,
                            url: '/bai-viet/enim',
                        },
                        categories: [
                            {
                                id: 14,
                                title: 'Enim.',
                                slug: 'enim',
                                image: { url: null, alt: 'Enim.' },
                                icon: null,
                                url: '/bai-viet/enim',
                            },
                            {
                                id: 18,
                                title: 'Quis delectus natus.',
                                slug: 'quis-delectus-natus',
                                image: { url: null, alt: 'Quis delectus natus.' },
                                icon: null,
                                url: '/bai-viet/quis-delectus-natus',
                            },
                        ],
                        image: { url: null, alt: 'Nesciunt molestias.' },
                        url: '/bai-viet/enim/nesciunt-molestias',
                    },
                ],
                first_page_url: '/tags/ex-est?page=1',
                from: 1,
                last_page: 2,
                last_page_url: '/tags/ex-est?page=2',
                links: [
                    { url: null, label: '<', active: false },
                    { url: '/tags/ex-est?page=1', label: '1', active: true },
                    { url: '/tags/ex-est?page=2', label: '2', active: false },
                    { url: '/tags/ex-est?page=2', label: '>', active: false },
                ],
                next_page_url: '/tags/ex-est?page=2',
                path: '/tags/ex-est',
                per_page: 10,
                prev_page_url: null,
                to: 10,
                total: 14,
            },

            posts_data: [],

            tag: {
                title: 'JAMstack Vietnam',
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

    created() {
        this.posts_data = this.posts.data
    },
}
</script>
