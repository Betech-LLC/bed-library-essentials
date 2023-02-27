<template>
    <div v-if="item" class="card-blog">
        <Picture class="card-blog-image-top" :src="item.image || '/cover.jpg'" />
        <div class="card-blog-body">
            <div class="card-blog-meta">
                <span class="badge badge-primary">SEO Strategy</span>
                <span class="card-blog-published-date">Thứ Sáu, 17/02/2023</span>
            </div>

            <h3 v-if="item.title" class="card-blog-title">{{ item.title }}</h3>
            <p v-if="item.description" class="card-blog-description" v-html="item.description"></p>

            <a :href="link" class="card-blog-button">Xem chi tiết</a>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        item: {
            type: Object,
        },
    },
}
</script>
