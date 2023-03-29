<template>
    <div v-if="item" class="card-job">
        <JLink :href="item.url" class="card-job-wrap">
            <div class="card-job-title-wrap">
                <div class="card-job-title">
                    <h3>{{ item.title }}</h3>
                    <div v-if="item.quantity" class="card-job-quantity-mobile-wrap">
                        <div class="card-job-quantity-label">Số lượng:</div>
                        <div class="card-job-quantity-title">
                            {{ addLeadingZero(item.quantity) }}
                        </div>
                    </div>
                </div>
                <div v-if="item.tags && item.tags.length" class="card-job-badge">
                    <span
                        v-for="(tag, index) in item.tags"
                        :key="index"
                        :style="{ color: tag.text_color, backgroundColor: tag.background_color }"
                        >{{ tag.title }}</span
                    >
                </div>
            </div>
            <div class="card-job-category-location-wrap">
                <div v-if="item.working_position" class="card-job-category-wrap">
                    <div class="card-job-category-label">Ngành nghề</div>
                    <div class="card-job-category-title">
                        {{ item.working_position }}
                    </div>
                </div>
                <div v-if="item.work_address" class="card-job-location-wrap">
                    <div class="card-job-location-label">Nơi làm việc</div>
                    <div class="card-job-location-title">
                        {{ item.work_address }}
                    </div>
                </div>
            </div>
            <div v-if="item.quantity" class="card-job-quantity-wrap">
                <div class="card-job-quantity-label">Số lượng</div>
                <div class="card-job-quantity-title">
                    {{ addLeadingZero(item.quantity) }}
                </div>
            </div>
        </JLink>

        <div v-click-outside="outsideClick" class="card-job-share">
            <div @click="isShare = !isShare" class="icon">
                <JIconShare />
            </div>

            <div v-if="isShare" class="share-list">
                <JSocialShare :link="item.url" zaloOAId="1111640952861619960" />
            </div>
        </div>
    </div>
</template>

<script>
import { addLeadingZero } from '@core/utils'
import JLink from '@core/components/JLink.vue'
import JIconShare from '@core/components/JIcon/Share.vue'
import JSocialShare from '@core/components/JSocialShare.vue'

export default {
    components: { JLink, JIconShare, JSocialShare },
    props: ['item'],

    directives: {
        'click-outside': {
            beforeMount: (el, binding) => {
                el.clickOutsideEvent = (event) => {
                    if (!(el == event.target || el.contains(event.target))) {
                        binding.value()
                    }
                }
                document.addEventListener('click', el.clickOutsideEvent)
            },
            unmounted: (el) => {
                document.removeEventListener('click', el.clickOutsideEvent)
            },
        },
    },

    data() {
        return {
            isShare: false,
        }
    },

    methods: {
        outsideClick() {
            this.isShare = false
        },
        addLeadingZero,
    },
}
</script>
