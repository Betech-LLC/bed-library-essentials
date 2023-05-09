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
            <template v-else>
                <h1 v-if="isH1" class="breadcrumb-item">{{ item.title }}</h1>
                <span v-else class="breadcrumb-item">
                    {{ item.title }}
                </span></template
            >
        </template>
    </nav>
</template>

<script>
import JIconSlash from '@core/components/JIcon/Slash.vue'
import JLink from '@core/components/JLink.vue'
export default {
    components: { JIconSlash, JLink },
    props: {
        items: {
            type: Array,
            required: true,
            default: [],
        },
        isH1: {
            type: Boolean,
            default: false,
        },
    },
    components: {
        JLink,
    },
}
</script>
