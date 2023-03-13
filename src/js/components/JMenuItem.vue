<template>
    <li>
        <JLink v-if="href" class="jam-menu-item" :class="{ active: isActive }">
            <slot :isActive="isActive" />
        </JLink>
        <div v-else class="jam-menu-item" :class="{ active: isActive }">
            <slot :isActive="isActive" />
        </div>
    </li>
</template>
<script>
export default {
    props: {
        href: {
            type: String,
        },
        isActive: {
            type: Boolean,
            default: false,
        },
    },
}
</script>
