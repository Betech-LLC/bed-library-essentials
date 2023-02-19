/** @type {import('tailwindcss').Config} */

import { deepMerge } from '../src/js/utils/deep-merge'
import defaultTheme from '../src/tailwind.config.js'

module.exports = deepMerge(defaultTheme, {
    // Sample Custom Tailwind Config
})
