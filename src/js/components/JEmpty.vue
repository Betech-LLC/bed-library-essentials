<template>
    <div class="empty">
        <div class="empty-image">
            <slot name="image">
                <JImageDynamic :name="name" />
            </slot>
        </div>
        <div class="empty-description">
            {{ description }}
        </div>
        <div class="empty-cta">
            <slot name="button" />
        </div>
    </div>
</template>
<script>
import JImageDynamic from '@core/components/JImageDynamic.vue'

export default {
    components: {
        JImageDynamic,
    },
    props: {
        name: { type: String, default: 'empty-search' }, // empty-vlog | empty-cart | empty-product | empty-search | empty-project | empty-job
        description: {
            type: String,
            default: null,
        },
    },
}
</script>
