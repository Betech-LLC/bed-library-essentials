'use strict'

function checkActiveUrl(url, route_path) {
    const arrPath = route_path.split('/')
    return url == arrPath[arrPath.length - 1]
}

function getCurrentUrlTitle(arr, route_path) {
    const arrPath = route_path.split('/')
    console.log(arr)
    return arr.find((item) => item.slug.params.slug === arrPath[arrPath.length - 1])
}

export { checkActiveUrl, getCurrentUrlTitle }
