// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon'],
  devtools: { enabled: true },
  css: ['~/assets/css/styles.css'],
  app: {
    baseURL: '/',
  },
  icon: {
    serverBundle: {
      collections: ['fa6-solid', 'skill-icons'],
    },
  },
});
