<template>
    <main class="page-search">
        <JBreadcrumb :items="breadcrumb" :isH1="true" class="container py-3 md:py-4 xl:py-6">
            <template #icon>
                <JIconArrowRight />
            </template>
        </JBreadcrumb>
        <div class="container">
            <div class="page-search-founded">
                Tìm thấy
                <span v-for="(option, index) in options" :key="index">
                    <a :href="`#${option.id}`" class="search-option"> {{ option.items.length }} {{ option.title }} </a>
                    <span v-if="index + 1 < options.length">, </span>
                </span>
                phù hợp với từ khóa <span class="search-keyword" v-html="keyword"> </span>
            </div>
        </div>
        <div class="page-search-contain">
            <div v-for="(option, index) in options" :key="index" :id="option.id">
                <JPagination :title="option.title" :cols="option.cols" :items="option.items" :class="option.type">
                    <template #card="{ item, index }">
                        <slot :name="option.type" :item="item" :index="index" />
                    </template>

                    <template #button="{ quantity, title }">
                        <slot name="button" :quantity="quantity" :title="title">
                            xem thêm {{ quantity }} {{ title }}
                        </slot>
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
        options: {
            type: Array,
            default: [],
        },
    },
}
</script>
