<template>
    <div class="empty">
        <div class="empty-image">
            <slot name="image">
                <template v-if="!isLoading">
                    <img v-if="imageLinks[name]" :src="imageLinks[name]" />
                    <img v-else src="../../images/empty-search.webp" />
                </template>
            </slot>
        </div>
        <div v-if="description" class="empty-description" v-html="description"></div>

        <div v-if="$slots.button" class="empty-cta">
            <slot name="button" />
        </div>
    </div>
</template>
<script>
export default {
    props: {
        name: { type: String, default: null }, // empty-vlog | empty-cart | empty-product | empty-search | empty-project | empty-job
        description: {
            type: String,
            default: null,
        },
    },

    data() {
        return {
            image: null,
            isLoading: false,
            namesDefault: ['empty-vlog', 'empty-cart', 'empty-product', 'empty-search', 'empty-project', 'empty-job'],
            imageLinks: {
                'empty-vlog': '../../images/empty-vlog.webp',
                'empty-cart': '../../images/empty-cart.webp',
                'empty-product': '../../images/empty-product.webp',
                'empty-search': '../../images/empty-search.webp',
                'empty-project': '../../images/empty-project.webp',
                'empty-job': '../../images/empty-job.webp',
            },
        }
    },

    created() {
        if (this.namesDefault.includes(this.name)) {
            this.loadImage()
        }
    },
    methods: {
        async loadImage() {
            this.isLoading = true
            const response = await import(/* @vite-ignore */ `../../images/${this.name}.webp`)
            this.image = response.default
            this.isLoading = false
        },
    },
}
</script>
