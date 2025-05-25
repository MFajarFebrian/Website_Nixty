// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: process.env.NODE_ENV === 'development' },
  nitro: {
    preset: 'vercel',
  },
  typescript: {
    strict: true,
    typeCheck: false
  },
  runtimeConfig: {
    // Private keys that are exposed server-side only
    mysql: {
      host: process.env.MYSQL_HOST,
      port: process.env.MYSQL_PORT,
      database: process.env.MYSQL_DATABASE,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD
    },
    public: {
      // Public keys that are exposed to the client
      apiBase: '/api'
    }
  }
})
