export default defineEventHandler(async (event) => {
  // Test caching
  const key = 'epic-cache-test'
  const { value, addToCache } = await useDataCache(key, event)
  console.log('Value found in cache', value)
  if (value) {
    console.log('Cache hit for search', key)
    return value
  }
  console.log('Cache miss for search', key)
  await addToCache('mycontent', [], 84600)
  console.log('Add cache for search', key)

  return 'test caching'
})
