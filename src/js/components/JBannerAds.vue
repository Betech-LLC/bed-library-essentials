<template>
    <a v-if="item" :href="item.link" :target="item.target || '_blank'">
        <JPicture
            wrapperClass="picture-contain"
            :src="item.image.url || item.image || '/placeholder.png'"
            :mobileSrc="item.image_mobile.url || item.image_mobile || '/placeholder.png'"
            :alt="item.image.alt || item.alt || item.title"
        />
    </a>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            default: null,
        },
    },
}
</script>
