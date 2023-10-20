// This is a named route middleware, and use middleware property in definePageMeta
export default defineNuxtRouteMiddleware((to, from) => {
  console.log('This is test middleware.');
  if(to.name === 'test-id' && !(/^\d+$/.test(to.params.id as string))) {
    abortNavigation("error")
  }}
)