<template>
    <JPageSearch :posts="posts" :products="posts" :keyword="keyword" :breadcrumb="breadcrumb">
        <template #card-product="{ item }">
            <JCardBlog class="card-item" :item="item" />
        </template>
        <template #card-post="{ item }">
            <JCardBlog class="card-item" :item="item" />
        </template>
    </JPageSearch>
</template>
<script>
export default {
    data() {
        return {
            post: {
                id: 85,
                title: 'Quae rerum non aut tenetur.',
                slug: 'quae-rerum-non-aut-tenetur',
                published_at: '2023-03-08',
                description:
                    'A harum velit fugit culpa facilis repellat. Dolore ut quia placeat aspernatur sapiente in distinctio. Quia est voluptatem provident id.',
                category: {
                    id: 24,
                    title: 'Hic earum vel facilis.',
                    slug: 'hic-earum-vel-facilis',
                    image: { url: null, alt: 'Hic earum vel facilis.' },
                    icon: null,
                    url: '/blog/hic-earum-vel-facilis',
                },
                categories: [
                    {
                        id: 24,
                        title: 'Hic earum vel facilis.',
                        slug: 'hic-earum-vel-facilis',
                        image: { url: null, alt: 'Hic earum vel facilis.' },
                        icon: null,
                        url: '/blog/hic-earum-vel-facilis',
                    },
                ],
                image: { url: null, alt: 'Quae rerum non aut tenetur.' },
                url: '/blog/hic-earum-vel-facilis/quae-rerum-non-aut-tenetur',
            },
        }
    },

    computed: {
        posts() {
            return this.renderMultipleItems(this.post)
        },
        keyword() {
            return this.$route.query.keyword
        },

        breadcrumb() {
            return [{ title: 'Trang chủ', link: '/' }, { title: `Kết quả tìm kiếm cho từ khóa ${this.keyword}` }]
        },
    },

    methods: {
        renderMultipleItems(item) {
            let items = []
            for (let index = 0; index < 50; index++) {
                items = [...items, item]
            }
            return items
        },
    },
}
</script>
<style lang=""></style>
