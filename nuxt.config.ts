// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: {enabled: true},
  modules: ['@nuxt/eslint', 'nuxt-multi-cache'],

  multiCache: {
    disableCacheOverviewLogMessage: true,
    component: {
      enabled: false,
    },
    data: {
      enabled: true,
    },
    route: {
      enabled: true,
    },
    api: {
      enabled: true,
      authorization: 'overriden-at-runtime',
      prefix: '/api/multi-cache',
      cacheTagInvalidationDelay: 5000,
    },
    cdn: {
      enabled: true,
      cacheControlHeader: 'CDN-Cache-Control',
      cacheTagHeader: 'Cache-Tag',
    },
    debug: true,
  }

})
