'use strict'

import { toSlug } from '../format'

function removeAccent(str) {
    return toSlug(str, ' ')
}

export { removeAccent }
