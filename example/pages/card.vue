<template>
    <section class="container space-y-8">
        <div class="grid grid-cols-2 gap-x-8">
            <JCardBlog :item="post" />
        </div>
        <JCardBlog class="card-blog-row w-[800px]" :item="post" />
        <JCardBlog class="card-blog-row w-[314px] card-blog-xs" :item="post" />
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
