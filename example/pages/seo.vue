<template>
    <div class="container py-10 space-y-10">
        {{ contentAnalysis }}
        <hr />
        {{ seoAnalysis }}
    </div>
</template>

<script>
import { contentAnalysis, seoAnalysis } from '../../src/js/utils';
export default {
    data() {
        return {
            contentAnalysis: contentAnalysis({
                title: 'Tối ưu hiệu quả SEO cho website có cấu trúc Jamstack',
                description:
                    'Tối ưu hiệu của SEO cho website vẫn được các doanh nghiệp quan tâm hàng đầu trong việc tiếp cận khách hàng mục tiêu của họ. Vậy môi trường SEO đã thay đổi ra sao và việc sử dụng website Jamstack mang lại những lợi điểm gì trong “cuộc chiến” cạnh tranh thứ hạng trên trang tìm kiếm? Theo dõi bài viết dưới đây để tìm hiểu chi tiết!',
                content: '',
                keywords: 'jamstack, seo',
            }),
            seoAnalysis: seoAnalysis({
                title: 'Tối ưu hiệu quả SEO cho website có cấu trúc Jamstack',
                description:
                    'Tối ưu hiệu của SEO cho website vẫn được các doanh nghiệp quan tâm hàng đầu trong việc tiếp cận khách hàng mục tiêu của họ. Vậy môi trường SEO đã thay đổi ra sao và việc sử dụng website Jamstack mang lại những lợi điểm gì trong “cuộc chiến” cạnh tranh thứ hạng trên trang tìm kiếm? Theo dõi bài viết dưới đây để tìm hiểu chi tiết!',
                content: '',
                keyword: 'jamstack, seo',
            }),
        }
    },
}
</script>
