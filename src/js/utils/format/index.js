'use strict'

function toNumber(number) {
    return number.replace(/[^0-9]/g, '')
}

function toDate(date, language = 'vi', weekday = true) {
    const currentDate = new Date(date)

    let options = {}

    !language ? (language = 'vi') : false

    if (language === 'vi') {
        options = { year: 'numeric', month: '2-digit', day: '2-digit' }
        weekday ? (options.weekday = 'long') : false
    } else {
        options = { year: 'numeric', month: 'long', day: 'numeric' }
        weekday ? (options.weekday = 'short') : false
    }

    const formattedDate = currentDate.toLocaleDateString(language, options)
    return formattedDate
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

function toMoney(value, language = 'vi') {
    let options = {}
    if (language === 'vi') {
        options = {
            minimumFractionDigits: 0,
            style: 'currency',
            currency: 'VND',
        }
    } else if (language === 'en') {
        options = {
            minimumFractionDigits: 0,
            style: 'currency',
            currency: 'USD',
        }
    }

    const formatter = new Intl.NumberFormat(language, options)

    return formatter.format(value ?? 0)
}

function toUrl(arr) {
    const params = []
    for (const [field, value] of Object.entries(arr)) {
        params.push(`${field}=${value}`)
    }
    return params.join('&')
}

function addLeadingZero(number) {
    if (number > 0 && number < 10) {
        return ('0' + number).slice(-2)
    }
    return number
}

function removeSlash(str) {
    if (!str) return

    if (str.endsWith('/')) {
        str = str.slice(0, -1)
    }
    if (str.startsWith('/')) {
        str = str.slice(1)
    }
    return str
}

export { toNumber, toDate, toSlug, toBasename, toMoney, toUrl, addLeadingZero, removeSlash }
