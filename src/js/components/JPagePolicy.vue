<template>
    <main>
        <section class="policy">
            <div class="policy-head">Hỗ trợ khách hàng</div>

            <div class="policy-body">
                <div class="policy-box">
                    <div @click="togglePolicyMobile" class="box-body">
                        <div class="box-title title-2">
                            {{ currentPolicy.title }}
                        </div>
                        <!-- TODO: CHỜ COMPONENT ICON -->
                        <!-- <div class="icon-position">
                        <IconCaretDown />
                    </div> -->
                    </div>
                </div>
                <div class="policy-nav" :class="isOpenMobile ? '' : 'toggle'">
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
                                <!-- TODO: CHỜ COMPONENT ICON -->
                                <!-- <IconPolicyDefault v-else /> -->
                                <div class="nav-title">
                                    {{ policy.title }}
                                </div>
                            </JLink>
                        </li>
                    </ul>
                </div>

                <div v-if="isOpenMobile" class="policy-blank" @click="togglePolicyMobile"></div>

                <div class="policy-content">
                    <h1 class="policy-title">
                        {{ currentPolicy.title }}
                    </h1>
                    <div v-html="content" class="policy-prose" />
                </div>
            </div>
        </section>
    </main>
</template>
<script>
import { checkActiveUrl, getCurrentUrlTitle } from '@core/utils'
export default {
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
        checkActiveUrl,
        getCurrentUrlTitle,
    },
}
</script>
