// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ['@nuxtjs/tailwindcss'],

  components: {
    "dirs": [
      {
        "path": "~/src/js/components",
        "global": true
      },
    ]
  },

	tailwindcss: {
		cssPath: '@/assets/scss/app.scss',
		configPath: '@/src/tailwind.config.js',
		viewer: false,
	},

	alias: {
		'@core/functions': '/src',
		'@core/scss': '/src/scss',
	},
})
