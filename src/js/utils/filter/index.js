'use strict'
function serializeQuery(oldQuery = {}, newQuery = {}, type = 'options', key = 'id') {
    return { ...serializeOldQuery(oldQuery, type), ...serializeNewQuery(newQuery, type, key) }
}

function serializeOldQuery(query = {}, type = 'options') {
    return Object.fromEntries(
        Object.entries(query).filter(
            ([key]) =>
                (type === 'options' && !key.includes('opt-') && key !== 'page') ||
                (type === 'brands' && key !== 'brands' && key !== 'page') ||
                (type === 'prices' && key !== 'prices' && key !== 'page') ||
                (type === 'price-range' && key !== 'price-range' && key !== 'page') ||
                (type === 'categories' && key !== 'categories' && key !== 'page')
        )
    )
}

function serializeNewQuery(query = {}, type, key) {
    const queryOptions = type === 'options' ? serializeOptions(query) : serializeArrayData(query, type, key)

    return {
        ...queryOptions,
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

function serializeArrayData(arrayData, type = 'brands', key = 'id') {
    let queryData = {}
    let queryArrayData = arrayData.filter((a) => a.active).map((x) => x[key]) || []

    if (queryArrayData.length) {
        queryData[type] = queryArrayData.join(',')
    }

    return queryData
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
    serializeOldQuery,
}
