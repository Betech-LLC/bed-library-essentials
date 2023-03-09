<template>
    <nav v-if="items && items.length > 0" class="breadcrumb">
        <template v-for="item in items">
            <JLink v-if="item.link" :href="item.link" class="breadcrumb-item">
                <span> {{ item.title }}</span>
            </JLink>
            <span v-if="item.link" class="icon">
                <template v-if="$slots.icon">
                    <slot name="icon"></slot>
                </template>
                <JIconSlash v-else />
            </span>
            <span v-else class="breadcrumb-item">
                {{ item.title }}
            </span>
        </template>
    </nav>
</template>

<script>
export default {
    props: {
        items: {
            type: Array,
            required: true,
        },
    },
}
</script>
