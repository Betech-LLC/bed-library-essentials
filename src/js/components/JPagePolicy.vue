<template>
    <main>
        <section class="page-policy">
            <div class="page-policy-wrap">
                <slot name="breadcrumb">
                    <JBreadcrumb :items="breadcrumb">
                        <template #icon>
                            <JIconArrowRight />
                        </template>
                    </JBreadcrumb>
                </slot>
                <div class="page-policy-head" v-if="staticContent.title">{{ staticContent.title }}</div>

                <div v-if="list_sidebar && list_sidebar.length" class="page-policy-body">
                    <div class="page-policy-box">
                        <div @click="togglePolicyMobile" class="box-body">
                            <div class="box-title title-2">
                                {{ content.title }}
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
                                        active: checkActiveUrl(policy.url, currentPath),
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
                        <slot name="content">
                            <template v-if="content">
                                <h1 class="page-policy-title" v-if="content.title">
                                    {{ content.title }}
                                </h1>
                                <div v-html="content.content" class="page-policy-prose" />
                            </template>
                        </slot>
                    </div>
                </div>

                <JEmpty v-else :description="staticContent.emptyContent" />
            </div>
        </section>
    </main>
</template>
<script>
import JIconArrowRight from '@core/components/JIcon/ArrowRight.vue'
import JIconPolicyDefault from '@core/components/JIcon/PolicyDefault.vue'
import JBreadcrumb from '@core/components/JBreadcrumb.vue'
import JLink from '@core/components/JLink.vue'
import JEmpty from '@core/components/JEmpty.vue'
import { checkActiveUrl } from '@core/utils'

export default {
    components: { JIconArrowRight, JIconPolicyDefault, JBreadcrumb, JLink, JEmpty },
    props: {
        list_sidebar: {
            type: Array,
        },
        content: {
            type: Object,
        },
        breadcrumb: {
            type: Array,
        },
        staticContent: {
            type: Object,
            default: () => {
                return {
                    title: 'Hỗ trợ khách hàng',
                    emptyContent: 'Chúng tôi đang cập nhật chính sách, <br /> quý khách vui lòng quay lại sau.',
                }
            },
        },
        currentPath: {
            type: String,
        },
    },
    data() {
        return {
            isOpenMobile: false,
        }
    },
    created() {
        if (this.content && this.content.title) {
            this.breadcrumb.push({ title: this.content.title })
        }
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
        checkActiveUrl,
        togglePolicyMobile() {
            this.isOpenMobile = !this.isOpenMobile
        },
    },
}
</script>
