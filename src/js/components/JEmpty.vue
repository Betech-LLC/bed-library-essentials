<template>
    <div class="py-6 space-y-4 md:space-y-6 xl:space-y-8 xl:py-12 md:py-8">
        <div class="w-[260px] md:w-[300px] mx-auto">
            <img :src="image || images[type]" />
        </div>
        <div class="max-w-[490px] w-full mx-auto text-center text-gray-700">
            {{ description }}
        </div>
        <div class="flex justify-center">
            <slot />
        </div>
    </div>
</template>
<script>
import JPicture from '@core/components/JPicture.vue'
export default {
    components: {
        JPicture,
    },
    props: {
        type: { type: String, default: null }, // vlog | cart | product | faqs | project | job
        image: { type: String, default: null },
        description: {
            type: String,
            default: null,
        },
    },
    data() {
        return {
            images: {
                vlog: '../../images/empty-vlog.webp',
                cart: '../../images/empty-cart.webp',
                product: '../../images/empty-product.webp',
                search: '../../images/empty-search.webp',
                project: '../../images/empty-project.webp',
                job: '../../images/empty-job.webp',
            },
        }
    },
}
</script>
