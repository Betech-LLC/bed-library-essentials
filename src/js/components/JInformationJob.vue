<template>
    <div class="page-job-detail-information">
        <div class="information-item">
            <div class="information-item-icon">
                <JIconHomeLine />
            </div>
            <div class="information-item-content">
                <div class="label">Nơi làm việc</div>
                <div class="title">{{ item.location }}</div>
            </div>
        </div>
        <div class="information-item">
            <div class="information-item-icon">
                <JIconCalendar />
            </div>
            <div class="information-item-content">
                <div class="label">Hạn nộp hồ sơ</div>
                <div class="title">
                    {{ toDate(item.expected_time, 'vi', false) }}
                </div>
            </div>
        </div>
        <div class="information-item">
            <div class="information-item-icon">
                <JIconBriefcase02 />
            </div>
            <div class="information-item-content">
                <div class="label">Hình thức làm việc</div>
                <div class="title">Toàn thời gian</div>
            </div>
        </div>
        <div class="information-item">
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
import { addLeadingZero, toDate } from '@core/utils'
export default {
    props: ['item'],
    methods: {
        addLeadingZero,
        toDate,
    },
}
</script>
