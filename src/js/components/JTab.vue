<template>
    <div class="tabs scroll-wrap">
        <JLink
            v-for="(category, index) in categories"
            :key="index"
            :href="category.url"
            class="tab"
            :class="{ active: checkActive(category.url) }"
        >
            {{ category.title }}
        </JLink>
    </div>
</template>
<script>
import JLink from '@core/components/JLink.vue'

export default {
    props: ['categories'],
    components: { JLink },

    mounted() {
        this.scrollTab()
    },

    methods: {
        checkActive(url) {
            let currentPathname = window.location.pathname
            currentPathname = currentPathname.endsWith('/') ? currentPathname.slice(0, -1) : currentPathname

            try {
                new URL(url)
                if (currentPathname === new URL(url).pathname) {
                    return true
                }
            } catch (err) {
                if (currentPathname === url) {
                    return true
                }
            }

            return false
        },

        scrollTab() {
            const scrollWrap = document.querySelector('.scroll-wrap')
            const curItem = document.querySelector('.scroll-wrap .active')

            if (curItem && curItem.offsetLeft + curItem.clientWidth / 2 > window.innerWidth / 2) {
                const distance = curItem.offsetLeft - window.innerWidth / 2

                if (distance < scrollWrap.scrollWidth) {
                    scrollWrap.scrollLeft = distance + curItem.clientWidth / 2
                } else {
                    scrollWrap.scrollLeft = scrollWrap.scrollWidth
                }
            } else {
                scrollWrap.scrollLeft = 0
            }
        },
    },
}
</script>
