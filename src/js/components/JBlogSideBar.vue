<template>
    <div v-if="items" class="blog-category-top-view">
        <h2 class="title">
            <slot> Lượt xem nhiều nhất </slot>
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
export default {
    props: ['items', 'title'],
}
</script>
