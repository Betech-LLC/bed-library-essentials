<template>
    <nav
        v-if="items.length > 0"
        aria-label="breadcrumb"
        class="breadcrumb"
        :style="`--breadcrumb-divider: ${_divider};`"
    >
        <template v-for="(item, index) in items" :key="index">
            <JLink v-if="item.link" :href="item.link" class="breadcrumb-item">
                <span>{{ item.title }}</span>
            </JLink>
            <span v-else class="breadcrumb-item" aria-current="page">{{ item.title }}</span>
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
        divider: {
            type: String,
            default: '/',
        },
    },

    computed: {
        _divider() {
            const options = {
                '>': `url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNCIgaGVpZ2h0PSI3IiB2aWV3Qm94PSIwIDAgNCA3IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMC43OTI2MjcgNi44NTQ4MkwzLjg5ODYyIDMuNzU4MDVDMy45MzU0OCAzLjcyMTE4IDMuOTYxNTQgMy42ODEyNCAzLjk3Njc3IDMuNjM4MjNDMy45OTIyNiAzLjU5NTIyIDQgMy41NDkxNCA0IDMuNDk5OThDNCAzLjQ1MDgzIDMuOTkyMjYgMy40MDQ3NSAzLjk3Njc3IDMuMzYxNzRDMy45NjE1NCAzLjMxODczIDMuOTM1NDggMy4yNzg3OSAzLjg5ODYyIDMuMjQxOTJMMC43OTI2MjcgMC4xMzU5MjlDMC43MDY2MDUgMC4wNDk5MDc3IDAuNTk5MDc4IDAuMDA2ODk2OTcgMC40NzAwNDYgMC4wMDY4OTY5N0MwLjM0MTAxNCAwLjAwNjg5Njk3IDAuMjMwNDE1IDAuMDUyOTc5OSAwLjEzODI0OSAwLjE0NTE0NkMwLjA0NjA4MyAwLjIzNzMxMiA1LjI5OTg3ZS0wOCAwLjM0NDgzOSA1LjI5OTg3ZS0wOCAwLjQ2NzcyNkM1LjI5OTg3ZS0wOCAwLjU5MDYxNCAwLjA0NjA4MyAwLjY5ODE0MSAwLjEzODI0OSAwLjc5MDMwN0wyLjg0NzkzIDMuNDk5OThMMC4xMzgyNDkgNi4yMDk2NkMwLjA1MjIyNzQgNi4yOTU2OCAwLjAwOTIxNjUgNi40MDE2MSAwLjAwOTIxNjUgNi41Mjc0NUMwLjAwOTIxNjUgNi42NTM1MyAwLjA1NTI5OTUgNi43NjI2NiAwLjE0NzQ2NSA2Ljg1NDgyQzAuMjM5NjMxIDYuOTQ2OTkgMC4zNDcxNTggNi45OTMwNyAwLjQ3MDA0NiA2Ljk5MzA3QzAuNTkyOTM0IDYuOTkzMDcgMC43MDA0NjEgNi45NDY5OSAwLjc5MjYyNyA2Ljg1NDgyVjYuODU0ODJaIiBmaWxsPSIjOTRBM0I4Ii8+Cjwvc3ZnPgo=')`,
                '/': `'/'`,
            }
            return options[this.divider] || `'/'`
        },
    },
}
</script>
