<template>
    <JPageSearch :keyword="`&quot;${keyword}&quot;`" :breadcrumb="breadcrumb" :options="[productOption, postOption]">
        <template #[productOption.type]="{ item, index }">
            <div>
                <div>Stt: {{ index }}</div>
                <JCardBlog class="card-item" :item="item" />
            </div>
        </template>
        <template #[postOption.type]="{ item, index }">
            <div>
                <div>Stt: {{ index }}</div>
                <JCardBlog class="card-item" :item="item" />
            </div>
        </template>
        <template #button="{ title, quantity }">
            <div class="flex items-center space-x-2">
                <div>Xem thêm</div>
                <span> > </span>
            </div>
        </template>
    </JPageSearch>
</template>
<script>
export default {
    data() {
        let post = {
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
        }
        function renderMultipleItems(item) {
            let items = []
            for (let index = 0; index < 50; index++) {
                items = [...items, item]
            }
            return items
        }

        let posts = renderMultipleItems(post)

        return {
            productOption: {
                title: 'Sản phẩm',
                id: 'search-product',
                type: 'card-product',
                items: posts,
                cols: 5,
            },
            postOption: {
                title: 'Bài viết',
                id: 'search-post',
                type: 'card-post',
                items: posts,
                cols: 4,
            },
        }
    },

    computed: {
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
