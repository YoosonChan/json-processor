// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // fix git page build bug: https://github.com/nuxt/nuxt/issues/22159#issuecomment-1639851186
  nitro: {
    prerender: {
      failOnError: false,
    },
  },
  // routeRules: {
  //   '/': {
  //     ssr: false,
  //   },
  // },
})
