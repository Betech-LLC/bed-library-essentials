<template>
    <main>
        <section class="page-policy">
            <div class="page-policy-wrap">
                <div class="page-policy-head">Hỗ trợ khách hàng</div>

                <div class="page-policy-body">
                    <div class="page-policy-box">
                        <div @click="togglePolicyMobile" class="box-body">
                            <div class="box-title title-2">
                                {{ currentPolicy.title || 'Chính sách' }}
                            </div>
                            <JIconArrowRight class="box-icon" :class="{ active: isOpenMobile }" />
                        </div>
                    </div>
                    <div class="page-policy-nav" :class="{ toggle: !isOpenMobile }">
                        <ul class="nav-list">
                            <li class="nav-item" v-for="(policy, index) in list_sidebar" :key="index">
                                <JLink
                                    :href="policy.slug"
                                    class="nav-link"
                                    :class="{
                                        active: checkActiveUrl(policy.slug, $route.path),
                                    }"
                                >
                                    <div v-if="policy.icon" class="nav-icon" v-html="policy.icon"></div>
                                    <div class="nav-icon" v-else>
                                        <JIconPolicyDefault />
                                    </div>
                                    <div class="nav-title">
                                        {{ policy.title }}
                                    </div>
                                </JLink>
                            </li>
                        </ul>
                    </div>

                    <div v-if="isOpenMobile" class="page-policy-blank" @click="togglePolicyMobile"></div>

                    <div class="page-policy-content">
                        <h1 class="page-policy-title" v-if="currentPolicy.title">
                            {{ currentPolicy.title }}
                        </h1>
                        <div v-html="content" class="page-policy-prose" />
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
<script>
import JIconArrowRight from '@core/components/JIcon/ArrowRight.vue'
import JIconPolicyDefault from '@core/components/JIcon/PolicyDefault.vue'

export default {
    comments: { JIconArrowRight, JIconPolicyDefault },
    props: ['list_sidebar', 'content'],
    data() {
        return {
            isOpenMobile: false,
            currentPolicy: '',
        }
    },
    mounted() {
        this.currentPolicy = this.getCurrentUrlTitle(this.list_sidebar, this.$route.path)
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
    methods: {
        togglePolicyMobile() {
            this.isOpenMobile = !this.isOpenMobile
        },
        checkActiveUrl(url, route_path) {
            const arrPath = route_path.split('/')
            return url == arrPath[arrPath.length - 1]
        },
        getCurrentUrlTitle(arr, route_path) {
            const arrPath = route_path.split('/')
            console.log(arr)
            return arr.find((item) => item.slug.params.slug === arrPath[arrPath.length - 1])
        },
    },
}
</script>
