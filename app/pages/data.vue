<template>
  <h1>This page is cached for 1 hour.</h1>
  <pre> {{ cachedRandomNumber }}</pre>
  <pre>{{ todo }}</pre>
</template>

<script lang="ts" setup>

const { data: cachedRandomNumber } = await useAsyncData('random-number', async () => {
  const { value, addToCache } = await useDataCache<number>('random-number')

  // Data is available from cache
  if (value) {
    return value
  }

  // Generate random number and add it to cache
  const randomNumber = Math.random() * 1000
  await addToCache(randomNumber)
  return randomNumber
})


const todo = await useDataCacheCallback('example', async (cache) => {
  const response = await $fetch('https://jsonplaceholder.typicode.com/todos/1')

  if (cache && import.meta.server) {
    cache.addTags(['test']).setMaxAge('1h')
  }

  return response
})
</script>
