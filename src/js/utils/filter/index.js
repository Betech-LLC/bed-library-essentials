'use strict'
function serializeQuery(oldQuery = {}, newQuery = {}) {
    return { ...serializeOldQuery(oldQuery), ...serializeNewQuery(newQuery) }
}

function serializeOldQuery(query = {}) {
    return Object.fromEntries(Object.entries(query).filter(([key]) => !key.includes('opt-') && key !== 'page'))
}

function serializeNewQuery(query = {}) {
    return {
        ...serializeOptions(query),
        ...Object.fromEntries(Object.entries(query).filter(([key, x]) => typeof x === 'string')),
    }
}

function serializeOptions(options) {
    let queryOptions = {}
    options.forEach(function (option) {
        const childIds = option.nodes.filter((c) => c.active).map((x) => x.id)
        if (childIds.length > 0) {
            queryOptions[`opt-${option.slug}`] = childIds.join(',')
        }
    })

    return queryOptions
}

function unserializeOptions(value) {
    const options = Object.keys(value)
        .filter((x) => x.includes('opt-'))
        .map((key) => {
            const newKey = key.replace('opt-', '')
            return { parent: newKey, child: value[key].split(',') }
        })
    return unGroupBy(options)
}

function groupBy(xs, f) {
    return xs.reduce((r, v, i, a, k = f(v)) => ((r[k] || (r[k] = [])).push(v), r), {})
}

function unGroupBy(value) {
    let data = []
    for (const option of value) {
        for (const child of option.child) {
            data.push({
                parent: option.parent,
                child: child,
            })
        }
    }
    return data
}

function filteringOptionIds(value) {
    return unserializeOptions(value).flatMap((x) => x.child.toString())
}

function mappingPrice(query) {
    const price = query.price ? query.price.split('-') : null
    const from = price && price[0] ? price[0] : null
    const to = price && price[1] ? price[1] : null
    return { from, to }
}

function mappingOptions(allOptions, query) {
    const filteringIds = unserializeOptions(query).flatMap((x) => x.child.toString())

    return allOptions.map((x) => {
        x.nodes.map((c) => {
            c.active = !!filteringIds.includes(c.id.toString())
            return c
        })
        return x
    })
}

function mappingArrayData(arrayData = [], query = {}, type = 'brands', key = 'id') {
    const filteringKeys = query[type] ? query[type].split(',') : []
    arrayData.map((b) => {
        b.active = !!filteringKeys.includes(b[key].toString())
        return b
    })
    return arrayData
}

function serializeArrayData(arrayData) {
    const queryArrayData = arrayData.filter((b) => b.active).map((x) => x.id) || []

    return queryArrayData.join(',')
}

export {
    serializeQuery,
    mappingArrayData,
    serializeArrayData,
    serializeOptions,
    unserializeOptions,
    filteringOptionIds,
    mappingOptions,
    mappingPrice,
}
