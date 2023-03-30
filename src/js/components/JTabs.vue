<template>
    <div class="tabs scroll-wrap">
        <JLink
            v-for="(category, index) in categories"
            :key="index"
            :href="category.url"
            class="tab"
            :class="{ active: checkActiveUrl(category.url, currentPath) }"
        >
            {{ category.title }}
        </JLink>
    </div>
</template>
<script>
import JLink from '@core/components/JLink.vue'

import { scrollCenter, checkActiveUrl } from '@core/utils'

export default {
    props: ['categories', 'currentPath'],
    components: { JLink },

    mounted() {
        this.scrollCenter('.scroll-wrap')
    },

    methods: {
        checkActiveUrl,
        scrollCenter,
    },
}
</script>
