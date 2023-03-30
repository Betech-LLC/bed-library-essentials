'use strict'

function checkActiveUrl(url, currentPath) {
    if (!currentPath || !url) return false
    const currentPathClear = currentPath.endsWith('/') ? currentPath.slice(0, -1) : currentPath

    try {
        new URL(url)
        console.log(currentPathClear)
        console.log(new URL(url))
        if (currentPathClear === new URL(url).pathname) {
            return true
        }
    } catch (err) {
        if (currentPathClear === url) {
            return true
        }
    }

    return false
}

export { checkActiveUrl }
