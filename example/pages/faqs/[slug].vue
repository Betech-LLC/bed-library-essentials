<template>
    <JPagePolicy :list_sidebar="list_sidebar" :content="currentFAQ" :breadcrumb="breadcrumb" :currentPath="currentPath">
        <JAccordion v-if="currentFAQ" class="accordion-faqs">
            <JAccordionItem
                v-for="(item, index) in currentFAQ.questions"
                :key="index"
                :item="{
                    title: `${index + 1}. ${item.question}`,
                }"
            >
                <div>
                    {{ item.answer }}
                </div>
            </JAccordionItem>
        </JAccordion></JPagePolicy
    >
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
                    title: 'Câu hỏi thường gặp',
                    link: '/faqs',
                },
            ],
            list_sidebar: [
                {
                    id: 4,
                    title: 'Mua hàng',
                    slug: 'mua-hang',
                    url: this.$router.resolve({ name: 'faqs-slug', params: { slug: 'huong-dan-su-dung' } }).path,

                    questions: [
                        {
                            id: 3,
                            question: 'Làm thế nào để tìm kiếm sản phẩm trên website?',
                            answer: 'Làm thế nào để tìm kiếm sản phẩm trên website Làm thế nào để tìm kiếm sản phẩm trên website Làm thế nào để tìm kiếm sản phẩm trên website Làm thế nào để tìm kiếm sản phẩm trên website Làm thế nào để tìm kiếm sản phẩm trên website Làm thế nào để tìm kiếm sản phẩm trên website Làm thế nào để tìm kiếm sản phẩm trên website Làm thế nào để tìm kiếm sản phẩm trên website Làm thế nào để tìm kiếm sản phẩm trên website Làm thế nào để tìm kiếm sản phẩm trên website Làm thế nào để tìm kiếm sản phẩm trên website',
                        },
                        {
                            id: 2,
                            question: 'Nếu tôi không tìm thấy sản phẩm ưng ý có thể yêu cầu sản phẩm thay thế không?',
                            answer: 'Có. Doanh nghiệp chúng tôi sẽ đề xuất các sản phẩm phù hợp có khả năng thay thế sản phẩm theo yêu cầu của khách hàng. Để nhận tư vấn quý khách có thể để lại thông tin hoặc gọi điện trực tiếp qua hotline.',
                        },
                    ],
                },
                {
                    id: 3,
                    title: 'Dịch vụ',
                    slug: 'dich-vu',
                    questions: [],
                    url: this.$router.resolve({ name: 'faqs-slug', params: { slug: 'chinh-sach-van-chuyen' } }).path,
                },
                {
                    id: 2,
                    title: 'Sản phẩm',
                    slug: 'san-pham',
                    questions: [],
                    url: this.$router.resolve({ name: 'faqs-slug', params: { slug: 'chinh-sach-bao-hanh' } }).path,

                    questions: [],
                },
                {
                    id: 1,
                    title: 'Thương hiệu',
                    slug: 'thuong-hieu',
                    url: this.$router.resolve({ name: 'faqs-slug', params: { slug: 'chinh-sach-thanh-toan' } }).path,

                    questions: [
                        {
                            id: 1,
                            question: 'Làm thế nào để tìm kiếm sản phẩm trên website?',
                            answer: 'Có. Doanh nghiệp chúng tôi sẽ đề xuất các sản phẩm phù hợp có khả năng thay thế sản phẩm theo yêu cầu của khách hàng. Để nhận tư vấn quý khách có thể để lại thông tin hoặc gọi điện trực tiếp qua hotline.',
                        },
                    ],
                },
            ],
            currentFAQ: {
                id: 4,
                title: 'Mua hàng',
                slug: 'mua-hang',
                url: this.$router.resolve({ name: 'faqs-slug', params: { slug: 'huong-dan-su-dung' } }).path,
                questions: [
                    {
                        id: 3,
                        question: 'Làm thế nào để tìm kiếm sản phẩm trên website?',
                        answer: 'Làm thế nào để tìm kiếm sản phẩm trên website Làm thế nào để tìm kiếm sản phẩm trên website Làm thế nào để tìm kiếm sản phẩm trên website Làm thế nào để tìm kiếm sản phẩm trên website Làm thế nào để tìm kiếm sản phẩm trên website Làm thế nào để tìm kiếm sản phẩm trên website Làm thế nào để tìm kiếm sản phẩm trên website Làm thế nào để tìm kiếm sản phẩm trên website Làm thế nào để tìm kiếm sản phẩm trên website Làm thế nào để tìm kiếm sản phẩm trên website Làm thế nào để tìm kiếm sản phẩm trên website',
                    },
                    {
                        id: 2,
                        question: 'Nếu tôi không tìm thấy sản phẩm ưng ý có thể yêu cầu sản phẩm thay thế không?',
                        answer: 'Có. Doanh nghiệp chúng tôi sẽ đề xuất các sản phẩm phù hợp có khả năng thay thế sản phẩm theo yêu cầu của khách hàng. Để nhận tư vấn quý khách có thể để lại thông tin hoặc gọi điện trực tiếp qua hotline.',
                    },
                ],
            },

            currentPath: this.$route.path,
        }
    },
}
</script>
