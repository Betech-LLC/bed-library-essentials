// https://nuxt.com/docs/api/configuration/nuxt-config
const path = require('path')
const parentDir = path.dirname(__dirname)
const libraryDir = path.join(parentDir, 'src')

export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],

<<<<<<< HEAD
    components: {
        dirs: [
            {
                path: libraryDir + '/js/components',
                global: true,
            },
        ],
    },

    tailwindcss: {
        cssPath: '@/assets/scss/app.scss',
        configPath: 'tailwind.config.js',
        viewer: false,
    },

    alias: {
        '@core/utils': libraryDir + '/js/utils',
        '@core/scss': libraryDir + '/scss',
        '@core/images': libraryDir + '/images',
    },

    vite: {
        build: {
            rollupOptions: {
                external: ['vue/server-renderer'],
            },
        },
=======
  components: {
    dirs: [
      {
        path: libraryDir + '/js/components',
        global: true,
      },
    ],
  },

  tailwindcss: {
    cssPath: '@/assets/scss/app.scss',
    configPath: 'tailwind.config.js',
    viewer: false,
  },

  alias: {
    '@core/utils': libraryDir + '/js/utils',
    '@core/scss': libraryDir + '/scss',
    'core-images': libraryDir + '/images',
    // 'core-images': fileURLToPath(new URL(libraryDir + '/images', import.meta.url)),
  },

  vite: {
    build: {
      rollupOptions: {
        external: ['vue/server-renderer'],
      },
>>>>>>> b1b3b8ee0d018381434bab49bdc3c3b883cef5fa
    },
})
