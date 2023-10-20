<script setup lang="ts">
definePageMeta({
  layout: "custom",
  middleware: (to, from) => {
    console.log('This is inline route middleware.');
  }
})
</script>

<template>
  <h3>This is a custom page.</h3>
  <NuxtLink to="/">To index</NuxtLink>
</template>