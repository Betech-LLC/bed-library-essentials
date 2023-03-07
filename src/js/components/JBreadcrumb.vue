<template>
    <nav v-if="items.length > 0 && _icon" class="breadcrumb" :style="`--breadcrumb-divider: ${_icon}`">
        <template v-for="(item, index) in items" :key="index">
            <JLink v-if="item.link" :href="item.link" class="breadcrumb-item">
                {{ item.title }}
            </JLink>
            <span v-else class="breadcrumb-item">{{ item.title }}</span>
        </template>
    </nav>
</template>

<script>
const OPTIONS = {
    '>': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='8' viewBox='0 0 4 8' fill='none'%3E%3Cpath d='M0.792627 7.35484L3.89862 4.25806C3.93548 4.2212 3.96154 4.18126 3.97677 4.13825C3.99226 4.09524 4 4.04916 4 4C4 3.95085 3.99226 3.90476 3.97677 3.86175C3.96154 3.81874 3.93548 3.7788 3.89862 3.74194L0.792627 0.635944C0.706605 0.549923 0.599078 0.506912 0.470046 0.506912C0.341014 0.506912 0.230415 0.552995 0.138249 0.645161C0.046083 0.737327 0 0.844854 0 0.967742C0 1.09063 0.046083 1.19816 0.138249 1.29032L2.84793 4L0.138249 6.70968C0.0522275 6.7957 0.00921655 6.90163 0.00921655 7.02747C0.00921655 7.15355 0.0552995 7.26267 0.147465 7.35484C0.239631 7.447 0.347158 7.49309 0.470046 7.49309C0.592934 7.49309 0.700461 7.447 0.792627 7.35484Z' fill='%23344054'/%3E%3C/svg%3E")`,
    '/': `'/'`,
}
export default {
    props: {
        items: {
            type: Array,
            required: true,
        },
        icon: {
            type: String,
            default: '/',
        },
    },
    data() {
        return { _icon: null }
    },
    mounted() {
        this._icon = OPTIONS[this.icon] || `'${this.icon}'`
    },
}
</script>
