<template>
  <h1>This page is cached for 1 hour.</h1>
</template>

<script lang="ts" setup>
useRouteCache((helper) => {
  helper.setMaxAge(3600).setCacheable().addTags(['page:1'])
})
</script>
