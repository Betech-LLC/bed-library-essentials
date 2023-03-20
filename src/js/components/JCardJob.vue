<template>
    <div class="card-job">
        <JLink :href="item.url" class="card-job-wrap">
            <div class="card-job-title-wrap">
                <div class="card-job-title">
                    <h3>{{ item.title }}</h3>
                    <div class="card-job-quantity-mobile-wrap">
                        <div class="card-job-quantity-label">Số lượng:</div>
                        <div class="card-job-quantity-title">
                            {{ addLeadingZero(item.quantity) }}
                        </div>
                    </div>
                </div>
                <div v-if="item.is_urgent || item.is_bonus || item.is_available" class="card-job-badge">
                    <Tag v-if="item.is_bonus" class="bonus">Bonus</Tag>
                    <Tag v-if="item.is_available" class="available">Available</Tag>
                    <Tag v-if="item.is_urgent" class="urgent">Urgent</Tag>
                </div>
            </div>
            <div class="card-job-category-wrap">
                <div class="card-job-category-label">Ngành nghề</div>
                <div class="card-job-category-title">
                    {{ item.category }}
                </div>
            </div>
            <div class="card-job-location-wrap">
                <div class="card-job-location-label">Nơi làm việc</div>
                <div class="card-job-location-title">
                    {{ item.location }}
                </div>
            </div>
            <div class="card-job-quantity-wrap">
                <div class="card-job-quantity-label">Số lượng</div>
                <div class="card-job-quantity-title">
                    {{ addLeadingZero(item.quantity) }}
                </div>
            </div>

            <div class="card-job-category-location-mobile">
                <div class="card-job-category-mobile-wrap">
                    <div class="card-job-category-label">Ngành nghề</div>
                    <div class="card-job-category-title">
                        {{ item.category }}
                    </div>
                </div>
                <div class="card-job-location-mobile-wrap">
                    <div class="card-job-location-label">Nơi làm việc</div>
                    <div class="card-job-location-title">
                        {{ item.location }}
                    </div>
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
