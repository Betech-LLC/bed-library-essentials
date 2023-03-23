<template>
    <div v-if="item" class="card-project">
        <JLink class="card-project-image" :href="item.url">
            <JPicture :src="item.image?.url" :alt="item.image?.alt || item.title" />
        </JLink>
        <div class="card-project-body">
            <div class="card-project-meta">
                <div class="item-location">
                    <p class="label-location">Địa điểm:</p>
                    <span class="title-location">{{ item.location }}</span>
                </div>
                <div class="item-progress">
                    <p class="label-progress">Tiến độ:</p>
                    <span :class="item.progress.key" class="title-progress">{{ item.progress.value }}</span>
                </div>
            </div>

            <h3 v-if="item.title" class="card-project-title">
                <JLink :href="item.url">{{ item.title }}</JLink>
            </h3>
            <p v-if="item.description" class="card-project-description" v-html="item.description"></p>
        </div>

        <JLink class="card-project-button" :href="item.url"
            ><p>Xem chi tiết</p>
            <JIconChevronRight />
        </JLink>
    </div>
</template>
<script>
import JPicture from '@core/components/JPicture.vue'
import JLink from '@core/components/JLink.vue'
import JIconChevronRight from '@core/components/JIcon/ChevronRight.vue'
export default {
    components: { JPicture, JLink, JIconChevronRight },
    props: {
        item: {
            type: Object,
        },
        language: {
            type: String,
            default: null,
        },
    },
}
</script>
