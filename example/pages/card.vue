<template>
    <section class="container grid grid-cols-2 gap-x-8">
        <CardBlog :item="post" />
    </section>
</template>

<script>
export default {
    data() {
        return {
            post: {
                title: 'Những điều bạn cần biết về tối ưu nội dung SEO trong năm 2023',
                description:
                    'How do you create compelling presentations that wow your colleagues and impress your managers?',
                createdAt: 'Thứ Năm, 2/2/2023',
                image: 'https://via.placeholder.com/600x600',
                demo: this.$route,
            },
        }
    },
}
</script>
