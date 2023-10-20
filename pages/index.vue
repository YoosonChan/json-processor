<script setup lang="ts">
definePageMeta({
  name: 'JOSN Processor',
  layout: 'default',
})
</script>

<template>
  <div>
    <h3>This is index page.</h3>
    <p>JSON Processor</p>
    <p>It's a JSON processor for my project. </p>
    <NuxtLink to="custom">To custom</NuxtLink>
    <NuxtLink to="test/123">To test with id</NuxtLink>
    <NuxtLink to="test/id">To test with wrong id</NuxtLink>
  </div>
</template>