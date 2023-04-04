import { validateForm, validateField } from '@core/utils'

async function useSubmitForm(url, form) {
    try {
        return Promise.resolve({ success: true })
        // TODO: yarn add axios bên Nhando bị lỗi
        // return await axios.post(url, form)
    } catch (error) {
        return error
    }
}
function useValidateField({ value, rule }) {
    const isValid = validateField(value, rule)
    return isValid
}
function useValidateForm({ form = {}, rules = {} } = {}) {
    const errors = validateForm(form, rules)
    return errors
}

function useResetForm(form = {}) {
    const keyFields = Object.keys(form)
    keyFields.forEach((keyField) => {
        if (typeof form[keyField] === 'object' && Object.keys(form[keyField]).length > 0) {
            form[keyField] = useResetForm(form[keyField])
        } else {
            form[keyField] = null
        }
    })
    return form
}

export { useSubmitForm, useResetForm, useValidateForm, useValidateField }
