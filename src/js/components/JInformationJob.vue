<template>
    <div v-if="item" class="page-job-detail-information">
        <div v-if="item.work_address" class="information-item">
            <div class="information-item-icon">
                <JIconHomeLine />
            </div>
            <div class="information-item-content">
                <div class="label">Nơi làm việc</div>
                <div class="title">{{ item.work_address }}</div>
            </div>
        </div>
        <div v-if="item.expected_time" class="information-item">
            <div class="information-item-icon">
                <JIconCalendar />
            </div>
            <div class="information-item-content">
                <div class="label">Hạn nộp đơn</div>
                <div class="title">
                    {{ toDate(item.expected_time, 'vi', false) }}
                </div>
            </div>
        </div>
        <div v-if="item.working_position" class="information-item">
            <div class="information-item-icon">
                <JIconBriefcase02 />
            </div>
            <div class="information-item-content">
                <div class="label">Hình thức làm việc</div>
                <div class="title">{{ item.working_position }}</div>
            </div>
        </div>
        <div v-if="item.quantity" class="information-item">
            <div class="information-item-icon">
                <JIconUsers03 />
            </div>
            <div class="information-item-content">
                <div class="label">Số lượng</div>
                <div class="title">{{ addLeadingZero(item.quantity) }}</div>
            </div>
        </div>
    </div>
</template>

<script>
import JIconHomeLine from '@core/components/JIcon/HomeLine.vue'
import JIconCalendar from '@core/components/JIcon/Calendar.vue'
import JIconBriefcase02 from '@core/components/JIcon/Briefcase02.vue'
import JIconUsers03 from '@core/components/JIcon/Users03.vue'
import { addLeadingZero, toDate } from '@core/utils'
export default {
    components: { JIconHomeLine, JIconCalendar, JIconBriefcase02, JIconUsers03 },
    props: ['item'],
    methods: {
        addLeadingZero,
        toDate,
    },
}
</script>
