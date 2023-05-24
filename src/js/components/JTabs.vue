<template>
    <div class="tabs">
        <div class="tabs-box">
            <div @click="togglePolicyMobile" class="box-body">
                <div class="box-title title-2">
                    {{ tabActive.title }}
                </div>
                <JIconArrowRight class="box-icon" :class="{ active: isOpenMobile }" />
            </div>
        </div>
        <div class="tab-list scroll-wrap" :class="{ toggle: !isOpenMobile }">
            <JLink
                v-for="(category, index) in categories.slice((tab - 1) * limit, tab * limit)"
                :key="index"
                :href="category.url"
                class="tab"
                :class="{ active: checkActiveUrl(category.url, currentPath) }"
            >
                {{ category.title }}
            </JLink>
        </div>

        <div v-if="isOpenMobile" class="page-policy-blank" @click="togglePolicyMobile"></div>

        <button v-if="position !== 'first'" @click="prevTab" class="tabs-button prev">
            <JIconArrowRight />
        </button>
        <button v-if="position !== 'last'" @click="nextTab" class="tabs-button next">
            <JIconArrowRight />
        </button>
    </div>
</template>
<script>
import JLink from '@core/components/JLink.vue'
import JIconArrowRight from '@core/components/JIcon/ArrowRight.vue'

import { scrollCenter, checkActiveUrl } from '@core/utils'

export default {
    props: { categories: Array, currentPath: String },
    components: { JLink, JIconArrowRight },

    data() {
        return {
            tab: 1,
            limit: 4,
            isOpenMobile: false,
        }
    },

    computed: {
        lastTab() {
            return Math.ceil(this.categories.length / this.limit)
        },

        position() {
            if (this.tab === 1) {
                return 'first'
            }

            if (this.tab === this.lastTab) {
                return 'last'
            }

            return 'mid'
        },

        tabActive() {
            return this.categories.find((category) => checkActiveUrl(category.url, this.currentPath))
        },
    },

    watch: {
        isOpenMobile: function () {
            if (this.isOpenMobile) {
                document.body.classList.add('overflow-hidden')
            } else {
                document.body.classList.remove('overflow-hidden')
            }
        },
    },

    created() {
        this.getCurrentTab()
    },

    mounted() {
        this.scrollCenter('.scroll-wrap')
        this.checkScreen()

        window.addEventListener('resize', this.checkScreen)
    },

    unmounted() {
        window.removeEventListener('resize', this.checkScreen)
    },

    methods: {
        checkActiveUrl,
        scrollCenter,

        prevTab() {
            if (this.tab > 1) {
                this.tab--
            }
        },

        nextTab() {
            if (this.tab < this.lastTab) {
                this.tab++
            }
        },

        togglePolicyMobile() {
            this.isOpenMobile = !this.isOpenMobile
        },

        checkScreen() {
            if (innerWidth >= 1024) {
                this.limit = 4
                this.getCurrentTab()
            } else {
                this.limit = 9999
                this.tab = 1
            }
        },

        getCurrentTab() {
            this.categories.forEach((category, index) => {
                if (checkActiveUrl(category.url, this.currentPath)) {
                    this.tab = Math.ceil((index + 1) / this.limit)
                    return
                }
            })
        },
    },
}
</script>
