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
                                    <div class="title">Hoàn thành</div>
                                </div>
                                <div class="item">
                                    <div class="label">Loại hình:</div>
                                    <div class="title">Tòa nhà chọc trời (skyscraper)</div>
                                </div>
                            </div>
                            <div class="page-project-detail-information-items">
                                <div class="item">
                                    <div class="label">Sản phẩm sử dụng:</div>
                                    <div class="title">Apollo Silicone, Dowsil</div>
                                </div>
                                <div class="item">
                                    <div class="label">Địa điểm:</div>
                                    <div class="title">TP.HCM, Việt Nam</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="page-project-detail-description">
                Landmark 81 - tòa nhà chọc trời cao nhất Việt Nam, đẳng cấp và hiện đại, trang bị nhiều tiện ích cao cấp
                và tọa lạc tại vị trí đắc địa. Đây là biểu tượng của sự phát triển đô thị Việt Nam và điểm đến hấp dẫn
                cho du khách.
            </div>

            <div class="page-project-detail-image" :href="item.url">
                <JPicture :src="item.image?.url" :alt="item.image?.alt || item.title" />
            </div>

            <div class="page-project-detail-body">
                <div class="page-project-detail-share">
                    <JSocialShare class="social-share-column" zaloOAId="1111640952861619960" />
                </div>
                <div class="page-project-detail-content" v-html="item.content"></div>
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

export default {
    components: { JCardProject, JBreadcrumb, JSocialShare, JPicture, JIconArrowRight },

    props: ['item', 'breadcrumb'],

    created() {
        this.breadcrumb.push({ title: this.item.title })
    },
}
</script>
