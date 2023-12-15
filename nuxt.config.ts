// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    'nuxt-icon',
    '@morev/vue-transitions/nuxt',
  ],
  
  tailwindcss: { exposeConfig: true},
  app: {
    head: {
      title: 'Home Car Rent',
    }
  },
})
