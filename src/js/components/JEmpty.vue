<template>
    <div class="empty">
        <div class="empty-image">
            <slot name="image">
                <img v-if="name === 'empty-vlog'" src="../../images/empty-vlog.webp" />
                <img v-else-if="name === 'empty-cart'" src="../../images/empty-cart.webp" />
                <img v-else-if="name === 'empty-product'" src="../../images/empty-product.webp" />
                <img v-else-if="name === 'empty-project'" src="../../images/empty-project.webp" />
                <img v-else-if="name === 'empty-job'" src="../../images/empty-job.webp" />
                <img v-else src="../../images/empty-search.webp" />
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
        name: { type: String, default: null },
        // empty-vlog | empty-cart | empty-product | empty-search | empty-project | empty-job
        description: {
            type: String,
            default: null,
        },
    },
}
</script>
