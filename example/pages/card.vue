<template>
    <section class="container space-y-8">
        <div class="grid grid-cols-2 xl:gap-x-8 md:gap-x-6 gap-x-4">
            <JCardBlog :item="post" />
            <JCardBlog :item="post" />
        </div>
        <JCardBlog class="w-full card-blog-row" :item="post" />
        <JCardBlog class="card-blog-row w-[314px] card-blog-side-bar" :item="post" />
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
                published_at: '2023-02-02',
                image: 'https://via.placeholder.com/600x600',
                demo: this.$route,
            },
        }
    },
}
</script>
