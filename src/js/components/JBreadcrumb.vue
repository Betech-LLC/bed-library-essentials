<template>
    <nav v-if="items && items.length > 0" class="breadcrumb">
        <template v-for="item in items">
            <template v-if="item.link">
                <JLink :href="item.link" class="breadcrumb-item">
                    {{ item.title }}
                </JLink>
                <span v-if="$slots.icon" class="icon">
                    <slot name="icon"></slot>
                </span>
                <span v-else class="icon">
                    <JIconSlash />
                </span>
            </template>
            <span v-else class="breadcrumb-item">
                {{ item.title }}
            </span>
        </template>
    </nav>
</template>

<script>
import JIconSlash from '@core/components/JIcon/Slash.vue'
export default {
    components: { JIconSlash },
    props: {
        items: {
            type: Array,
            required: true,
        },
    },
}
</script>
