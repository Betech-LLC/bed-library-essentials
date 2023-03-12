<template>
    <li>
        <JLink v-if="href" class="jam-menu-item"> <slot /></JLink>
        <div v-else class="jam-menu-item"><slot /></div>
    </li>
</template>
<script>
export default {
    props: {
        href: {
            type: String,
        },
    },
}
</script>
