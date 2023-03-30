'use strict'

function checkActiveUrl(url) {
    if (!this.currentPath) return
    const currentPathClear = this.currentPath.endsWith('/') ? this.currentPath.slice(0, -1) : this.currentPath

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
