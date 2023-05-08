<template>
    <div v-if="items && items.length" class="page-blog-category-sidebar">
        <h2 class="title">
            <slot name="title"> Lượt xem nhiều nhất </slot>
        </h2>
        <div class="body">
            <template v-for="item in items">
                <slot name="card" :item="item"> </slot>
            </template>
        </div>
    </div>
</template>

<script>
export default {
    props: ['items', 'title'],
}
</script>
