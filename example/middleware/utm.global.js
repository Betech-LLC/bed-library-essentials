import { UTM } from '@core/utils'

export default defineNuxtRouteMiddleware(async (to, from) => {
    if (process.client) {
        UTM.save(UTM.parse())
        const utmData = UTM.get()

        if (utmData && utmData.is_initial_visit) {
            // Nếu là khởi tạo lần đầu thì lưu toàn bộ utmData vào User Details
        } else {
            // Nếu không phải là khởi tạo lần đầu thì cập nhật các biến không phải là initial
        }
    }
})
