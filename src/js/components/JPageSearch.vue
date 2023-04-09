<template>
    <main>
        <JBreadcrumb :items="breadcrumb" class="container py-3 md:py-4 xl:py-6">
            <template #icon>
                <JIconArrowRight />
            </template>
        </JBreadcrumb>
        <div class="pb-3 border-b border-b-gray-300">
            <div class="container text-gray-900 label-1">
                Tìm thấy
                <template v-for="(option, index) in options" :key="index">
                    <a :href="`#${option.id}`" class="text-primary hover:underline"
                        >{{ option.items.length }} {{ option.title }}</a
                    ><template v-if="index + 1 < options.length">, </template>
                </template>
                phù hợp với từ khóa “{{ keyword }}”
            </div>
        </div>
        <div class="py-6 space-y-6 md:space-y-8 xl:space-y-12 md:py-8 xl:py-12">
            <div v-for="(option, index) in options" :key="index" :id="option.id">
                <JPagination :title="option.title" :cols="option.cols" :items="option.items" :class="option.type">
                    <template #card="{ item }">
                        <slot :name="option.type" :item="item" />
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
