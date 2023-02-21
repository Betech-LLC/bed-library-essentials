<template>
    <img :src="image.default" v-bind="$attrs" />
</template>

<script setup>
const props = defineProps({ name: String })
const image = await import(/* @vite-ignore */ `../../images/${props.name}.png`)
</script>
