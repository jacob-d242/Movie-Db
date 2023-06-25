// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
  'nuxt-windicss'
],
runtimeConfig: {
  apiKey: 'ecc80b1af4f1c129da724fa760bf5e5c',
  apiBaseUrl: 'https://api.themoviedb.org/3/',
  // We use the public runtime config in 
  //order to expose this also to the client side
  public: {
      imgBaseUrl: '',
  }
}
})