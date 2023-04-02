import { validateForm, validateField } from '@core/utils'
export default function useForm() {
    async function useSubmitForm(callbackAsync) {
        try {
            return await callbackAsync()
        } catch (error) {
            return error
        }
    }

    function useValidateField({ value, rule }) {
        const isValidField = validateField(value, rule)
        return isValidField
    }

    return { useSubmitForm, useValidateField }
}
