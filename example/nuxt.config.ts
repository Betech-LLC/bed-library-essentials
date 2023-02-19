// https://nuxt.com/docs/api/configuration/nuxt-config


const path = require('path');
const parentDir = path.dirname(__dirname);
const libraryDir = path.join(parentDir, 'src');
console.log(libraryDir);

export default defineNuxtConfig({
	modules: ['@nuxtjs/tailwindcss'],

  components: {
    "dirs": [
      {
        "path": "../src/js/components",
        "global": true
      },
    ]
  },

	tailwindcss: {
		cssPath: '@/assets/scss/app.scss',
		configPath: 'tailwind.config.js',
		viewer: false,
	},

	alias: {
		'@core/utils': '../../src',
		'@core/scss': '.',
	},
})
