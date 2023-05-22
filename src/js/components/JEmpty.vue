<template>
    <div class="empty">
        <div class="empty-image">
            <slot name="image">
                <template v-if="!isLoading">
                    <img v-if="image" :src="image" />
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
