// This is a global route middleware
export default defineNuxtRouteMiddleware((to, from) => {
  console.log('this is global route middleware.', to.name);
  useHead({
    title: to.name as string
  })
})