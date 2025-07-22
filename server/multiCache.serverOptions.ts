import { defineMultiCacheOptions } from 'nuxt-multi-cache/server-options'
import { getHeaders, type H3Event } from 'h3'

import fsLiteDriver from 'unstorage/drivers/fs-lite'

const multiCacheServerOptions = defineMultiCacheOptions({
  api: {},
  data: {
    storage: {
      driver: fsLiteDriver({
        base: '.cache/data',
      }),
    },
  },
  route: {
    storage: {
      driver: fsLiteDriver({
        base: '.cache/route',
      }),
    },
    buildCacheKey: (event: H3Event) => {
      const path = (event.path || '')
        .split('?')
        .map((part, index) => {
          // Only process the query string part (after the ?)
          if (index > 0) {
            // Remove page parameter and keep other parameters
            const queryParams = part
              .split('&')
              .filter((param) => !param.startsWith('page='))
            return queryParams.length ? `?${queryParams.join('&')}` : ''
          }
          return part
        })
        .join('')
        .replaceAll('/', '__')
        .replaceAll('?', '__')
        .replaceAll('&', '__')

      const headers = getHeaders(event)
      const cookie = headers.cookie || 'anonymous'

      return 'route' + path + '__' + cookie
    },
  },
})

export default multiCacheServerOptions
