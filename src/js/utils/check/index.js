'use strict'

function checkActiveUrl(url, currentPath) {
    console.log(url)
    console.log(currentPath)
    if (!currentPath || !url) return false
    const currentPathClear = currentPath.endsWith('/') ? currentPath.slice(0, -1) : currentPath

    try {
        new URL(url)
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
