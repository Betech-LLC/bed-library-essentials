/** @type {import('tailwindcss').Config} */

import { deepMerge } from '../src/js/utils/deep-merge'
import defaultTheme from '../src/tailwind.config.js'

module.exports = deepMerge(defaultTheme, {
    // Custom code here
    content: ['../src/js/components/**/*.vue'],

    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/line-clamp'),
    ],
})
