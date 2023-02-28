<template>
    <section class="container py-20 space-y-8">
        <div class="headline-1">CARD BLOG COLUMN</div>
        <div class="grid grid-cols-12 gap-4 xl:gap-8 md:gap-6">
            <JCardBlog class="col-span-6 card-blog-xl" :item="post" />
            <JCardBlog class="col-span-5 card-blog-l" :item="post" />
            <JCardBlog class="col-span-4" :item="post" />
            <JCardBlog class="col-span-3 card-blog-s" :item="post" />
        </div>

        <div class="headline-1">CARD BLOG ROW</div>
        <div class="grid grid-cols-12 gap-4 xl:gap-8 md:gap-6">
            <JCardBlog class="col-span-12 card-blog-row card-blog-xl" :item="post" />
            <JCardBlog class="col-span-10 card-blog-row card-blog-l" :item="post" />
            <JCardBlog class="col-span-8 card-blog-row" :item="post" />
            <JCardBlog class="col-span-6 card-blog-row card-blog-s" :item="post" />
            <JCardBlog class="col-span-4 card-blog-row card-blog-side-bar" :item="post" />
        </div>
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
                image: {
                    url: 'https://via.placeholder.com/600x600',
                    alt: 'Những điều bạn cần biết về tối ưu nội dung SEO trong năm 2023',
                },
                category: {
                    title: 'SEO Strategy',
                    url: this.$router.resolve({ name: 'blog-category', params: { category: 'seo-strategy' } }),
                },
                url: this.$router.resolve({ name: 'blog-slug', params: { slug: 'demo' } }),
            },
        }
    },
}
</script>
