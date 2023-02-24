'use strict'

function checkActiveUrl(url, route_path) {
    const arrPath = route_path.split('/')
    return url == arrPath[arrPath.length - 1]
}

function getCurrentUrlTitle(arr, route_path) {
    const arrPath = route_path.split('/')
    return arr.find((item) => item.slug === arrPath[arrPath.length - 1])
}

export { checkActiveUrl, getCurrentUrlTitle }
