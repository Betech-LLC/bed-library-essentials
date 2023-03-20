<template>
    <JPageVlogCategory class="tree-column" :vlogs="vlogs" />
</template>

<script>
export default {
    data() {
        return {
            vlogs: [
                {
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
                    video: 'https://www.youtube.com/watch?v=0xAgOv6u4nI&t=103s',
                    url: 'http://localhost:3000/vlog/static-site-generator-trinh-tao-trang-tinh-duoc-ung-dung-trong-kien-truc-website-jamstack-b-1',
                },
                {
                    id: 2,
                    title: 'Microservices: Lợi ích và thách thức khi sử dụng trong website Jamstack',
                    slug: 'microservices-trong-website-jamstack',
                    published_at: '2023-03-15',
                    description:
                        'Hệ sinh thái Jamstack đang phát triển nhanh chóng và cùng với đó chúng ta đang chứng kiến ​​việc trang web tĩnh được ứng dụng một cách rộng rãi và ngày càng trở nên phổ biến.',
                    time: '05:00',
                    image: {
                        url: 'https://via.placeholder.com/1600x900',
                        alt: 'Static Site Generator: Trình tạo trang tĩnh được ứng dụng trong kiến trúc website Jamstack',
                    },
                    video: 'https://www.youtube.com/watch?v=0xAgOv6u4nI&t=103s',
                    url: 'http://localhost:3000/vlog/static-site-generator-trinh-tao-trang-tinh-duoc-ung-dung-trong-kien-truc-website-jamstack-b-1',
                },
                {
                    id: 3,
                    title: 'Khả năng tương tác trên website tác động thế nào đến UX và cách tối ưu',
                    slug: 'kha-nang-tuong-tac-tren-website',
                    published_at: '2023-03-15',
                    description:
                        'Hệ sinh thái Jamstack đang phát triển nhanh chóng và cùng với đó chúng ta đang chứng kiến ​​việc trang web tĩnh được ứng dụng một cách rộng rãi và ngày càng trở nên phổ biến.',
                    time: '05:00',
                    image: {
                        url: 'https://via.placeholder.com/1600x900',
                        alt: 'Static Site Generator: Trình tạo trang tĩnh được ứng dụng trong kiến trúc website Jamstack',
                    },
                    video: 'https://www.youtube.com/watch?v=0xAgOv6u4nI&t=103s',
                    url: 'http://localhost:3000/vlog/static-site-generator-trinh-tao-trang-tinh-duoc-ung-dung-trong-kien-truc-website-jamstack-b-1',
                },
                {
                    id: 4,
                    title: 'API trong kiến trúc website Jamstack: Kết nối dữ liệu và tối ưu UX',
                    slug: 'api-trong-kien-truc-website-jamstack',
                    published_at: '2023-03-15',
                    description:
                        'Hệ sinh thái Jamstack đang phát triển nhanh chóng và cùng với đó chúng ta đang chứng kiến ​​việc trang web tĩnh được ứng dụng một cách rộng rãi và ngày càng trở nên phổ biến.',
                    time: '05:00',
                    image: {
                        url: 'https://via.placeholder.com/1600x900',
                        alt: 'Static Site Generator: Trình tạo trang tĩnh được ứng dụng trong kiến trúc website Jamstack',
                    },
                    video: 'https://www.youtube.com/watch?v=0xAgOv6u4nI&t=103s',
                    url: 'http://localhost:3000/vlog/static-site-generator-trinh-tao-trang-tinh-duoc-ung-dung-trong-kien-truc-website-jamstack-b-1',
                },
                {
                    id: 5,
                    title: 'Jamstack SEO Guide: Tối ưu hiệu quả SEO cho website có kiến trúc Jamstack',
                    slug: 'toi-uu-hieu-qua-seo-website-jamstack',
                    published_at: '2023-03-15',
                    description:
                        'Hệ sinh thái Jamstack đang phát triển nhanh chóng và cùng với đó chúng ta đang chứng kiến ​​việc trang web tĩnh được ứng dụng một cách rộng rãi và ngày càng trở nên phổ biến.',
                    time: '05:00',
                    image: {
                        url: 'https://via.placeholder.com/1600x900',
                        alt: 'Static Site Generator: Trình tạo trang tĩnh được ứng dụng trong kiến trúc website Jamstack',
                    },
                    video: 'https://www.youtube.com/watch?v=0xAgOv6u4nI&t=103s',
                    url: 'http://localhost:3000/vlog/static-site-generator-trinh-tao-trang-tinh-duoc-ung-dung-trong-kien-truc-website-jamstack-b-1',
                },
                {
                    id: 6,
                    title: 'Những điều cần biết để trở thành UX Writer',
                    slug: 'nhung-dieu-can-biet-de-tro-thanh-ux-writer',
                    published_at: '2023-03-15',
                    description:
                        'Hệ sinh thái Jamstack đang phát triển nhanh chóng và cùng với đó chúng ta đang chứng kiến ​​việc trang web tĩnh được ứng dụng một cách rộng rãi và ngày càng trở nên phổ biến.',
                    time: '05:00',
                    image: {
                        url: 'https://via.placeholder.com/1600x900',
                        alt: 'Static Site Generator: Trình tạo trang tĩnh được ứng dụng trong kiến trúc website Jamstack',
                    },
                    video: 'https://www.youtube.com/watch?v=0xAgOv6u4nI&t=103s',
                    url: 'http://localhost:3000/vlog/static-site-generator-trinh-tao-trang-tinh-duoc-ung-dung-trong-kien-truc-website-jamstack-b-1',
                },
            ],
        }
    },
}
</script>
