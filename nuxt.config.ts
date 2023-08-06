// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', 'nuxt-vuefire'],
  ssr: false,
  runtimeConfig: {
    apiToken: '',
    public: {
      apiToken: '',
    }
  },
  vuefire: {
    auth: true,
    config: {
      apiKey: "AIzaSyC7AKbANzNYqRFeVB_jIrCLkSf0jEKtvmM",
      authDomain: "base-300.firebaseapp.com",
      projectId: "base-300",
      storageBucket: "base-300.appspot.com",
      messagingSenderId: "916417397327",
      appId: "1:916417397327:web:65a630205f501fe716603a",
      measurementId: "G-YJG6YNRKEL"
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
