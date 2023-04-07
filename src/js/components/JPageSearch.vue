<template>
    <main>
        <JBreadcrumb :items="breadcrumb" class="container mb-3 md:mb-4 xl:mb-6">
            <template #icon>
                <JIconArrowRight />
            </template>
        </JBreadcrumb>
        <div class="pb-3 border-b border-b-gray-300">
            <div class="container text-gray-900 label-1">
                Tìm thấy
                <a href="#search-product" class="text-primary hover:underline">{{ products.length }} sản phẩm</a>,
                <a href="#search-post" class="text-primary hover:underline">{{ posts.length }} bài viết</a> phù hợp với
                từ khóa “{{ keyword }}”
            </div>
        </div>
        <div class="py-6 space-y-6 md:space-y-8 xl:space-y-12 md:py-8 xl:py-12">
            <div id="search-product">
                <JPagination title="Sản phẩm" :cols="5" :items="products">
                    <template #card="{ item }">
                        <slot name="card-product" :item="item" />
                    </template>
                </JPagination>
            </div>
            <div id="search-post">
                <JPagination title="Bài viết" :cols="4" :items="posts">
                    <template #card="{ item }">
                        <slot name="card-post" :item="item" />
                    </template>
                </JPagination>
            </div>
        </div>
    </main>
</template>
<script>
import JBreadcrumb from '@core/components/JBreadcrumb.vue'
import JPagination from '@core/components/JPagination.vue'
import JIconArrowRight from '@core/components/JIcon/ArrowRight.vue'
export default {
    components: { JPagination, JBreadcrumb, JIconArrowRight },
    props: {
        keyword: { type: String },
        breadcrumb: {
            type: Array,
        },
        posts: {
            type: Array,
            default: [],
        },
        products: {
            type: Array,
            default: [],
        },
    },
}
</script>
<style lang=""></style>
