// https://nuxt.com/docs/api/configuration/nuxt-config
const path = require('path')
const parentDir = path.dirname(__dirname)
const libraryDir = path.join(parentDir, 'src')

export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],

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
        },
    },
})
