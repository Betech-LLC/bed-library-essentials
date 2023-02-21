/** @type {import('tailwindcss').Config} */

import { deepMerge } from '../src/js/utils/deep-merge'
import defaultTheme from '../src/tailwind.config.js'

module.exports = deepMerge(defaultTheme, {
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
})
