<template>
    <main>
        <section class="page-project-detail">
            <JBreadcrumb :items="breadcrumb">
                <template #icon>
                    <JIconArrowRight />
                </template>
            </JBreadcrumb>

            <div class="page-project-detail-meta-wrap">
                <div class="page-project-detail-meta">
                    <h1 class="page-project-detail-title">{{ item.title }}</h1>
                    <div class="page-project-detail-information">
                        <div class="page-project-detail-information-title">Thông tin dự án</div>
                        <div class="page-project-detail-information-body">
                            <div class="page-project-detail-information-items">
                                <div class="item">
                                    <div class="label">Tiến độ:</div>
                                    <div class="title">{{ constructionProgress[item.construction_progress] }}</div>
                                </div>
                                <div class="item">
                                    <div class="label">Loại hình:</div>
                                    <div class="title">{{ item.type }}</div>
                                </div>
                            </div>
                            <div class="page-project-detail-information-items">
                                <div class="item">
                                    <div class="label">Sản phẩm sử dụng:</div>
                                    <div class="title">{{ item.used }}</div>
                                </div>
                                <div class="item">
                                    <div class="label">Địa điểm:</div>
                                    <div class="title">{{ item.location }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="page-project-detail-description">
                {{ item.description }}
            </div>

            <div v-if="item.banner_desktop && item.banner_desktop.url" class="page-project-detail-image">
                <JPicture
                    :src="item.banner_desktop.url"
                    :mobileSrc="item.banner_mobile.url"
                    :alt="item.banner_desktop?.alt || item.title"
                />
            </div>

            <div class="page-project-detail-body">
                <div class="page-project-detail-share">
                    <JSocialShare class="social-share-column" zaloOAId="1111640952861619960" />
                </div>
                <div class="page-project-detail-content" v-html="item.content"></div>
            </div>
        </section>

        <section class="page-project-detail-related" v-if="related_projects && related_projects.length > 0">
            <div class="page-project-detail-related-wrap">
                <h2 v-if="titleRelated" class="page-project-detail-related-title">
                    {{ titleRelated }}
                </h2>
                <JSliderItems :items="related_projects">
                    <template #slide-item="{ item }">
                        <JCardProject class="card-item" :item="item" />
                    </template>
                </JSliderItems>
            </div>
        </section>
    </main>
</template>

<script>
import JCardProject from '@core/components/JCardProject.vue'
import JBreadcrumb from '@core/components/JBreadcrumb.vue'
import JSocialShare from '@core/components/JSocialShare.vue'
import JIconArrowRight from '@core/components/JIcon/ArrowRight.vue'
import JPicture from '@core/components/JPicture.vue'
import JSliderItems from '@core/components/JSliderItems.vue'

export default {
    components: { JCardProject, JBreadcrumb, JSocialShare, JPicture, JIconArrowRight, JSliderItems },

    props: {
        item: {
            type: Object,
        },
        breadcrumb: {
            type: Array,
        },
        related_projects: {
            type: Array,
        },
        titleRelated: {
            type: String,
            default: 'Dự án liên quan',
        },
        constructionProgress: {
            type: Object,
            default: () => {
                return {
                    complete: 'Hoàn thành',
                    incomplete: 'Chưa hoàn thành',
                }
            },
        },
    },

    created() {
        this.breadcrumb.push({ title: this.item.title })
    },
}
</script>
