// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  runtimeConfig: {
    apiToken: '',
    public: {
      apiToken: '',
    }
  },
  nitro: {
    storage: {
      'redis': {
        driver: 'redis',
        /* redis connector options */
        port: process.env.REDIS_PORT, // Redis port
        host: process.env.REDIS_HOST, // Redis host
        username: "", // needs Redis >= 6
        password: process.env.REDIS_PASSWORD,
        db: 0, // Defaults to 0
      },
    }
  }
})
