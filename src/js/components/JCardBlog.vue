<template>
    <div v-if="item" class="card-blog">
        <a href="#">
            <JPicture class="card-blog-image-top" :src="item.image || '/cover.jpg'" />
        </a>
        <div class="card-blog-body">
            <div class="card-blog-meta">
                <span class="badge badge-primary badge-sm">SEO Strategy</span>
                <span class="card-blog-published-date">Thứ Sáu, 17/02/2023</span>
            </div>

            <h3 v-if="item.title" class="card-blog-title">
                <a href="#">{{ item.title }}</a>
            </h3>
            <p v-if="item.description" class="card-blog-description" v-html="item.description"></p>
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
