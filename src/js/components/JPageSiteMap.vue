<template>
    <main>
        <section class="site-map">
            <JBreadcrumb :items="breadcrumb">
                <template #icon>
                    <JIconArrowRight />
                </template>
            </JBreadcrumb>
            <div class="site-map-group">
                <h1 class="site-map-title">SITE MAP</h1>
                <div class="site-map-group-config">
                    <div v-for="(group, index) in groupConfig" :key="index">
                        <h2 class="site-map-group-config-title">{{ group.title }}</h2>
                        <ul>
                            <li
                                v-for="(node, indexNode) in group.nodes"
                                :key="indexNode"
                                class="site-map-group-config-node"
                            >
                                <JLink :href="node.link">
                                    <h3>{{ node.title }}</h3></JLink
                                >
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="site-map-group-options">
                    <div v-for="(group, index) in groupOptions" :key="index">
                        <h2 class="site-map-group-options-title">{{ group.title }}</h2>
                        <ul class="site-map-group-options-list">
                            <li
                                v-for="(node, indexNode) in group.nodes"
                                :key="indexNode"
                                class="site-map-group-options-node"
                            >
                                <JLink :href="node.link">
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
