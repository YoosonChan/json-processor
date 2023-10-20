<script setup lang="ts">
definePageMeta({
  layout: 'custom',
  validate: async (route) => {
    console.log(route.params.id);
    return /^\d+$/.test(route.params.id as string)
  },
  // middleware: 'test'
})
</script>

<template>
  <h3>This is test page.</h3>
  <NuxtLink to="/">To index</NuxtLink>
</template>