'use strict'

function clearNumber(number) {
    return number.replace(/[^0-9]/g, '')
}

function formatDate(input, lang = 'vi') {
    console.log(input)
    const currentDate = new Date(input)

    console.log(currentDate)

    // Lấy tên thứ
    let days = ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy']
    if (lang === 'en') {
        days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    }
    const dayName = days[currentDate.getDay()]

    // Lấy ngày và tháng
    const date = currentDate.getDate()
    const month = currentDate.getMonth() + 1 // Lưu ý: tháng bắt đầu từ 0

    // Lấy năm
    const year = currentDate.getFullYear()

    // Format ngày tháng năm theo định dạng
    const formattedDate = `${dayName}, ${date < 10 ? '0' + date : date}/${month < 10 ? '0' + month : month}/${year}`

    return formattedDate
}

function toBasename(url) {
    return url?.substring(url?.lastIndexOf('/') + 1)
}

export { clearNumber, formatDate, toBasename }
