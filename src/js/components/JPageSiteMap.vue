<template>
    <main>
        <section class="page-site-map">
            <JBreadcrumb :items="breadcrumb">
                <template #icon>
                    <JIconArrowRight />
                </template>
            </JBreadcrumb>
            <div class="page-site-map-wrap">
                <h1 class="page-site-map-title">SITE MAP</h1>
                <div v-if="groupConfig && groupConfig.length" class="page-site-map-config">
                    <div v-for="(group, index) in groupConfig" :key="index">
                        <div class="page-site-map-sub-title">
                            <JLink :href="group.url">
                                <h2>{{ group.title }}</h2>
                            </JLink>
                        </div>
                        <ul class="page-site-map-config-list">
                            <li v-for="(node, indexNode) in group.items" :key="indexNode" class="page-site-map-item">
                                <JLink :href="node.url">
                                    <h3>{{ node.title }}</h3></JLink
                                >
                            </li>
                        </ul>
                    </div>
                </div>
                <div v-if="groupOptions && groupOptions.length" class="page-site-map-options">
                    <div v-for="(group, index) in groupOptions" :key="index">
                        <div class="page-site-map-sub-title">
                            <JLink :href="group.url">
                                <h2>{{ group.title }}</h2>
                            </JLink>
                        </div>

                        <ul class="page-site-map-options-list">
                            <li v-for="(node, indexNode) in group.items" :key="indexNode" class="page-site-map-item">
                                <JLink :href="node.url">
                                    <h3>{{ node.title }}</h3>
                                </JLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
<script>
import JLink from '@core/components/JLink.vue'
import JBreadcrumb from '@core/components/JBreadcrumb.vue'
import JIconArrowRight from '@core/components/JIcon/ArrowRight.vue'
export default {
    components: { JLink, JBreadcrumb, JIconArrowRight },
    props: {
        breadcrumb: {
            type: Array,
        },
        groupConfig: { type: Array, default: [] },
        groupOptions: {
            type: Array,
            default: [],
        },
    },
}
</script>
