import UTMStorage from './utmStorage'

const allowedParams = {
    utm_source: 'utm_source',
    utm_medium: 'utm_medium',
    utm_campaign: 'utm_campaign',
    utm_content: 'utm_content',
    utm_name: 'utm_name',
    utm_term: 'utm_term',
    initial_utm_source: 'initial_utm_source',
    initial_utm_medium: 'initial_utm_medium',
    initial_utm_campaign: 'initial_utm_campaign',
    initial_utm_content: 'initial_utm_content',
    initial_utm_name: 'initial_utm_name',
    initial_utm_term: 'initial_utm_term',
    gclid: 'gclid',
}

const storage = new UTMStorage()

class UTM {
    static parse() {
        const urlParams = new URLSearchParams(window.location.search)
        const parsedParams = {}

        Object.values(allowedParams).forEach((key) => {
            parsedParams[key] = urlParams.get(key)
        })

        return parsedParams
    }

    static save(params) {
        if (!params) {
            return false
        }

        try {
            const paramsToSave = {}
            const initialParams = {}
            let isInitialVisit = false

            Object.assign(paramsToSave, params)

            const storedItems = storage.getItem('utmSavedParams')
            const storedItemsJSON = JSON.parse(storedItems) || {}

            const notStored =
                !Object.keys(storedItemsJSON).length ||
                !Object.keys(storedItemsJSON).find((x) => x.includes('initial_') && storedItemsJSON[x])

            if (notStored) {
                Object.keys(paramsToSave).forEach((k) => {
                    if (!k.includes('initial_')) {
                        initialParams['initial_' + k] = paramsToSave[k]
                    }
                })
            } else {
                let existingParams = {}
                existingParams = JSON.parse(storedItems)

                Object.keys(existingParams).forEach((k) => {
                    if (!k.includes('initial_') && !existingParams['initial_' + k]) {
                        initialParams['initial_' + k] = existingParams[k]
                    } else if (k.includes('initial_')) {
                        initialParams[k] = existingParams[k]
                    }
                })
            }

            Object.assign(paramsToSave, initialParams)

            const hasUtmData =
                paramsToSave &&
                !!Object.keys(paramsToSave).find(
                    (x) => !x.includes('initial_') && paramsToSave[x] && paramsToSave[x].length > 0
                )

            if (notStored && hasUtmData) {
                isInitialVisit = true
            } else {
                isInitialVisit = false
            }

            paramsToSave.is_initial_visit = isInitialVisit

            storage.setItem('utmSavedParams', JSON.stringify(paramsToSave))

            return true
        } catch (e) {
            return false
        }
    }

    static get() {
        const savedParams = storage.getItem('utmSavedParams')
        if (savedParams) {
            return JSON.parse(savedParams)
        }
        return null
    }
}

export { UTM }
