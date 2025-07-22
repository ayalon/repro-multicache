import { useDataCache } from '#imports'

export default defineEventHandler(async (event) => {
  const { value, addToCache } = await useDataCache('random-number-test', event)
  if (value) {
    return value
  }

  const response = Math.random() * 1000
  addToCache(response)
  return response
})
