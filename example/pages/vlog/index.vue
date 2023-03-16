<template>
    <JPageVlogCategory class="tree-column" :vlogs="vlogs" />
    <!-- <JVideo src="https://www.youtube.com/watch?v=0xAgOv6u4nI&t=103s" /> -->
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
                    url: 'http://localhost:8000/vlogs/static-site-generator-trinh-tao-trang-tinh-duoc-ung-dung-trong-kien-truc-website-jamstack-b-1',
                },
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
                    url: 'http://localhost:8000/vlogs/static-site-generator-trinh-tao-trang-tinh-duoc-ung-dung-trong-kien-truc-website-jamstack-b-1',
                },
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
                    url: 'http://localhost:8000/vlogs/static-site-generator-trinh-tao-trang-tinh-duoc-ung-dung-trong-kien-truc-website-jamstack-b-1',
                },
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
                    url: 'http://localhost:8000/vlogs/static-site-generator-trinh-tao-trang-tinh-duoc-ung-dung-trong-kien-truc-website-jamstack-b-1',
                },
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
                    url: 'http://localhost:8000/vlogs/static-site-generator-trinh-tao-trang-tinh-duoc-ung-dung-trong-kien-truc-website-jamstack-b-1',
                },
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
                    url: 'http://localhost:8000/vlogs/static-site-generator-trinh-tao-trang-tinh-duoc-ung-dung-trong-kien-truc-website-jamstack-b-1',
                },
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
                    url: 'http://localhost:8000/vlogs/static-site-generator-trinh-tao-trang-tinh-duoc-ung-dung-trong-kien-truc-website-jamstack-b-1',
                },
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
                    url: 'http://localhost:8000/vlogs/static-site-generator-trinh-tao-trang-tinh-duoc-ung-dung-trong-kien-truc-website-jamstack-b-1',
                },
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
                    url: 'http://localhost:8000/vlogs/static-site-generator-trinh-tao-trang-tinh-duoc-ung-dung-trong-kien-truc-website-jamstack-b-1',
                },
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
                    url: 'http://localhost:8000/vlogs/static-site-generator-trinh-tao-trang-tinh-duoc-ung-dung-trong-kien-truc-website-jamstack-b-1',
                },
            ],
        }
    },
}
</script>
