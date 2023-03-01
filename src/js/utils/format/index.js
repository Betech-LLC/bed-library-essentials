'use strict'

function toNumber(number) {
    return number.replace(/[^0-9]/g, '')
}

function toDate(date, language = 'vi') {
    const currentDate = new Date(date)
    if (language === 'vi') {
        const dayNames = ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy']
        const day = dayNames[currentDate.getDay()]
        const dayOfMonth = currentDate.getDate().toString().padStart(2, '0')
        const month = (currentDate.getMonth() + 1).toString().padStart(2, '0')
        const year = currentDate.getFullYear().toString()

        return `${day}, ${dayOfMonth}/${month}/${year}`
    } else {
        const monthNames = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
        ]
        const month = monthNames[currentDate.getMonth()]
        const day = currentDate.getDate()
        const year = currentDate.getFullYear()

        return `${month} ${day}, ${year}`
    }
}

function toSlug(str, separator) {
    str = str
        ?.toLowerCase()
        ?.trim()
        .replace(/\t/g, '')
        .replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a')
        .replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e')
        .replace(/ì|í|ị|ỉ|ĩ/g, 'i')
        .replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o')
        .replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u')
        .replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y')
        .replace(/đ/g, 'd')
        .replace(/\s+/g, '-')
        .replace(/[^A-Za-z0-9_-]/g, '')
        .replace(/-+/g, '-')

    if (separator) {
        return str.replace(/-/g, separator)
    }
    return str
}

function toBasename(url) {
    return url?.substring(url?.lastIndexOf('/') + 1)
}

export { toNumber, toDate, toSlug, toBasename }
