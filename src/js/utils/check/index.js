'use strict'

import { removeSlash } from '../format'

function checkActiveUrl(url, currentPath) {
    if (!currentPath || !url) return false

    currentPath = removeSlash(currentPath)

    try {
        let path = removeSlash(new URL(url).pathname)
        if (currentPath === path) {
            return true
        }
    } catch (err) {
        if (currentPath === removeSlash(url)) {
            return true
        }
    }

    return false
}

export { checkActiveUrl }
