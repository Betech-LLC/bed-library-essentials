<template>
    <main>
        <section class="page-policy">
            <div class="page-policy-wrap">
                <JBreadcrumb :items="breadcrumb">
                    <template #icon>
                        <JIconArrowRight />
                    </template>
                </JBreadcrumb>
                <h1 class="page-policy-head" v-if="staticContent">{{ staticContent.title }}</h1>

                <div class="page-policy-body">
                    <div class="page-policy-box">
                        <div @click="togglePolicyMobile" class="box-body">
                            <div class="box-title title-2">
                                {{ currentPolicy.title }}
                            </div>
                            <JIconArrowRight class="box-icon" :class="{ active: isOpenMobile }" />
                        </div>
                    </div>
                    <div class="page-policy-nav" :class="{ toggle: !isOpenMobile }">
                        <ul class="nav-list">
                            <li class="nav-item" v-for="(policy, index) in list_sidebar" :key="index">
                                <JLink
                                    :href="policy.url"
                                    class="nav-link"
                                    :class="{
                                        active: currentPolicy.url === policy.url,
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
import JBreadcrumb from '@core/components/JBreadcrumb.vue'
import JLink from '@core/components/JLink.vue'

export default {
    components: { JIconArrowRight, JIconPolicyDefault, JBreadcrumb, JLink },
    props: ['list_sidebar', 'content', 'breadcrumb', 'staticContent'],
    data() {
        return {
            isOpenMobile: false,
            currentPolicy: '',
        }
    },
    mounted() {
        this.getCurrentUrlTitle()
        this.breadcrumb.push({ title: this.currentPolicy.title })
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
        getCurrentUrlTitle() {
            this.currentPolicy = this.list_sidebar.find((x) => x.url === window.location.href) || this.list_sidebar[0]
        },
    },
}
</script>
