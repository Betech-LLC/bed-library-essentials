<template>
    <nav v-if="items.length > 0" class="breadcrumb">
        <template v-for="(item, index) in items" :key="index">
            <JLink v-if="item.link" :href="item.link" class="breadcrumb-item">
                <span> {{ item.title }}</span>
                <span class="icon">
                    <template v-if="$slots.icon">
                        <slot name="icon"></slot>
                    </template>
                    <JIconSlash v-else />
                </span>
            </JLink>
            <span v-else class="breadcrumb-item">{{ item.title }}</span>
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
