<template>
    <JPageVlogDetail
        class="page-vlog-category-tree"
        :item="vlog"
        :vlogs="vlogs"
        :relatedVlogs="relatedVlogs"
        :breadcrumb="breadcrumb"
    />
</template>

<script>
export default {
    data() {
        return {
            vlog: {
                id: 1,
                title: 'Static Site Generator: Trình tạo trang tĩnh được ứng dụng trong kiến trúc website Jamstack',
                slug: 'static-site-generator-trinh-tao-trang-tinh-duoc-ung-dung-trong-kien-truc-website-jamstack',
                published_at: '2023-03-15',
                description:
                    'Hệ sinh thái Jamstack đang phát triển nhanh chóng và cùng với đó chúng ta đang chứng kiến ​​việc trang web tĩnh được ứng dụng một cách rộng rãi và ngày càng trở nên phổ biến.',
                time: '05:00',
                image: {
                    url: 'https://via.placeholder.com/1600x900',
                    alt: 'Static Site Generator: Trình tạo trang tĩnh được ứng dụng trong kiến trúc website Jamstack',
                },
                video_url: 'https://youtu.be/0xAgOv6u4nI&t=103s',
                url: '/vlog/static-site-generator-trinh-tao-trang-tinh-duoc-ung-dung-trong-kien-truc-website-jamstack',
            },
            vlogs: {
                current_page: 1,
                data: [
                    {
                        id: 1,
                        title: 'Static Site Generator: Trình tạo trang tĩnh được ứng dụng trong kiến trúc website Jamstack',
                        slug: 'static-site-generator-trinh-tao-trang-tinh-duoc-ung-dung-trong-kien-truc-website-jamstack',
                        published_at: '2023-03-31',
                        description: null,
                        image: {
                            url: 'http://localhost:8000/static/Frame 3466401.jpg',
                            alt: 'Static Site Generator: Trình tạo trang tĩnh được ứng dụng trong kiến trúc website Jamstack',
                        },
                        video: {
                            url: null,
                            alt: 'Static Site Generator: Trình tạo trang tĩnh được ứng dụng trong kiến trúc website Jamstack',
                        },
                        video_url: 'https://www.youtube.com/watch?v=0xAgOv6u4nI&t=103s',
                        url: '/vlog/static-site-generator-trinh-tao-trang-tinh-duoc-ung-dung-trong-kien-truc-website-jamstack-b-1',
                        time: '10:00',
                        tags: [],
                    },
                    {
                        id: 2,
                        title: 'Microservices: Lợi ích và thách thức khi sử dụng trong website Jamstack',
                        slug: 'microservices-loi-ich-va-thach-thuc-khi-su-dung-trong-website-jamstack',
                        published_at: '2023-03-31',
                        description: null,
                        image: {
                            url: 'http://localhost:8000/static/Rectangle 14413 (1).jpg',
                            alt: 'Microservices: Lợi ích và thách thức khi sử dụng trong website Jamstack',
                        },
                        video: {
                            url: null,
                            alt: 'Microservices: Lợi ích và thách thức khi sử dụng trong website Jamstack',
                        },
                        video_url: 'https://www.youtube.com/watch?v=--nUELePmog',
                        url: '/vlog/microservices-loi-ich-va-thach-thuc-khi-su-dung-trong-website-jamstack-b-2',
                        time: '02:00',
                        tags: [],
                    },
                    {
                        id: 3,
                        title: 'Khả năng tương tác trên website tác động thế nào đến UX và cách tối ưu',
                        slug: 'kha-nang-tuong-tac-tren-website-tac-dong-the-nao-den-ux-va-cach-toi-uu',
                        published_at: '2023-03-31',
                        description: null,
                        image: {
                            url: 'http://localhost:8000/static/Rectangle 14410 (1).jpg',
                            alt: 'Khả năng tương tác trên website tác động thế nào đến UX và cách tối ưu',
                        },
                        video: {
                            url: null,
                            alt: 'Khả năng tương tác trên website tác động thế nào đến UX và cách tối ưu',
                        },
                        video_url: 'https://www.youtube.com/watch?v=--nUELePmog',
                        url: '/vlog/kha-nang-tuong-tac-tren-website-tac-dong-the-nao-den-ux-va-cach-toi-uu-b-3',
                        time: null,
                        tags: [],
                    },
                    {
                        id: 4,
                        title: 'API trong kiến trúc website Jamstack: Kết nối dữ liệu và tối ưu UX',
                        slug: 'api-trong-kien-truc-website-jamstack-ket-noi-du-lieu-va-toi-uu-ux',
                        published_at: '2023-03-31',
                        description: null,
                        image: {
                            url: 'http://localhost:8000/static/Image.jpg',
                            alt: 'API trong kiến trúc website Jamstack: Kết nối dữ liệu và tối ưu UX',
                        },
                        video: { url: null, alt: 'API trong kiến trúc website Jamstack: Kết nối dữ liệu và tối ưu UX' },
                        video_url: 'https://www.youtube.com/watch?v=0xAgOv6u4nI&t=103s',
                        url: '/vlog/api-trong-kien-truc-website-jamstack-ket-noi-du-lieu-va-toi-uu-ux-b-4',
                        time: null,
                        tags: [],
                    },
                    {
                        id: 5,
                        title: 'Jamstack SEO Guide: Tối ưu hiệu quả SEO cho website có kiến trúc Jamstack',
                        slug: 'jamstack-seo-guide-toi-uu-hieu-qua-seo-cho-website-co-kien-truc-jamstack',
                        published_at: '2023-03-31',
                        description: null,
                        image: {
                            url: null,
                            alt: 'Jamstack SEO Guide: Tối ưu hiệu quả SEO cho website có kiến trúc Jamstack',
                        },
                        video: {
                            url: null,
                            alt: 'Jamstack SEO Guide: Tối ưu hiệu quả SEO cho website có kiến trúc Jamstack',
                        },
                        video_url: 'https://www.youtube.com/watch?v=--nUELePmog',
                        url: '/vlog/jamstack-seo-guide-toi-uu-hieu-qua-seo-cho-website-co-kien-truc-jamstack-b-5',
                        time: null,
                        tags: [],
                    },
                    {
                        id: 6,
                        title: 'Những điều cần biết để trở thành UX Writer',
                        slug: 'nhung-dieu-can-biet-de-tro-thanh-ux-writer',
                        published_at: '2023-03-31',
                        description: null,
                        image: { url: null, alt: 'Những điều cần biết để trở thành UX Writer' },
                        video: { url: null, alt: 'Những điều cần biết để trở thành UX Writer' },
                        video_url: null,
                        url: '/vlog/nhung-dieu-can-biet-de-tro-thanh-ux-writer-b-6',
                        time: null,
                        tags: [],
                    },
                    {
                        id: 7,
                        title: 'Demo',
                        slug: 'demo',
                        published_at: '2023-03-31',
                        description: null,
                        image: { url: null, alt: 'Demo' },
                        video: { url: null, alt: 'Demo' },
                        video_url: null,
                        url: '/vlog/demo-b-7',
                        time: null,
                        tags: [],
                    },
                    {
                        id: 8,
                        title: 'Demo 1',
                        slug: 'demo-1',
                        published_at: '2023-03-31',
                        description: null,
                        image: { url: null, alt: 'Demo 1' },
                        video: { url: null, alt: 'Demo 1' },
                        video_url: null,
                        url: '/vlog/demo-1-b-8',
                        time: null,
                        tags: [],
                    },
                    {
                        id: 9,
                        title: 'Demo 2',
                        slug: 'demo-2',
                        published_at: '2023-03-31',
                        description: null,
                        image: { url: null, alt: 'Demo 2' },
                        video: { url: null, alt: 'Demo 2' },
                        video_url: null,
                        url: '/vlog/demo-2-b-9',
                        time: null,
                        tags: [],
                    },
                    {
                        id: 10,
                        title: 'Demo 3',
                        slug: 'demo-3',
                        published_at: '2023-03-31',
                        description: null,
                        image: { url: null, alt: 'Demo 3' },
                        video: { url: null, alt: 'Demo 3' },
                        video_url: null,
                        url: '/vlog/demo-3-b-10',
                        time: null,
                        tags: [],
                    },
                ],
                first_page_url: '/vlogs?page=1',
                from: 1,
                last_page: 2,
                last_page_url: '/vlogs?page=2',
                links: [
                    { url: null, label: '<', active: false },
                    { url: '/vlogs?page=1', label: '1', active: true },
                    { url: '/vlogs?page=2', label: '2', active: false },
                    { url: '/vlogs?page=2', label: '>', active: false },
                ],
                next_page_url: '/vlogs?page=2',
                path: 'http://localhost:8000/vlogs',
                per_page: 10,
                prev_page_url: null,
                to: 10,
                total: 12,
            },

            breadcrumb: [
                {
                    title: 'Trang chủ',
                    link: '/',
                },
                {
                    title: 'Vlog',
                    link: '/vlog',
                },
            ],

            relatedVlogs: [],
        }
    },

    created() {
        this.relatedVlogs = this.vlogs.data
    },
}
</script>
