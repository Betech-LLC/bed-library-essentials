<template>
    <div v-if="items && items.length" class="page-blog-category-sidebar">
        <h2 class="title">
            <slot name="title"> Lượt xem nhiều nhất </slot>
        </h2>
        <div class="body">
            <JCardBlog
                v-for="(item, index) in items"
                :key="index"
                class="card-blog-xs card-blog-row card-item"
                :item="item"
            />
        </div>
    </div>
</template>

<script>
import JCardBlog from '@core/components/JCardBlog.vue'

export default {
    components: { JCardBlog },
    props: ['items', 'title'],
}
</script>
