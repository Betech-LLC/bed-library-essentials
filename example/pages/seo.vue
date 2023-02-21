<template>
    <div class="container py-10 space-y-10">
        <SeoAnalysis
            :data="{
                url: 'Tối ưu hiệu quả SEO cho website có cấu trúc Jamstack',
                title: 'Tối ưu hiệu quả SEO cho website có cấu trúc JamstackThe meta description is cut off at ~920 pixels on desktop and at ~980 pixels on mobile. Bing and Yahoo cut off the description at ~980 pixels.',
                description:
                    'The meta description is cut off at ~920 pixels on desktop and at ~980 pixels on mobile. Bing and Yahoo cut off the description at ~980 pixels.',
                keywords: 'jamstack, seo',
            }"
        />
    </div>
</template>

<script>
import { seoAnalysis } from '@core/utils';
export default {
    data() {
        return {
            seoAnalysis: seoAnalysis({
                title: 'Tối ưu hiệu quả SEO cho website có cấu trúc Jamstack',
                description:
                    'Tối ưu hiệu của SEO cho website vẫn được các doanh nghiệp quan tâm hàng đầu trong việc tiếp cận khách hàng mục tiêu của họ. Vậy môi trường SEO đã thay đổi ra sao và việc sử dụng website Jamstack mang lại những lợi điểm gì trong “cuộc chiến” cạnh tranh thứ hạng trên trang tìm kiếm? Theo dõi bài viết dưới đây để tìm hiểu chi tiết!',
                content: '',
                keywords: 'jamstack, seo',
            }),
        }
    },
}
</script>
