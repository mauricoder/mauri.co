import config from './src/config'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'mauri.co',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Press+Start+2P'},
      { rel: 'stylesheer', href: 'https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'nes.css/css/nes.min.css',
    '~/assets/css/style.css',
    '~/assets/css/gridism.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '~/plugins/render.js'}    
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules

  buildModules: [

  ],


  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/strapi',
    '@nuxtjs/markdownit',
    'vue-social-sharing/nuxt'
  ],
  markdownit: {
    linkify: true,
    breaks: true,
    use: [
      'markdown-it-modify-token'
    ],
    modifyToken: function (token, env) {    
      switch (token.type) {
      case 'image': // add baseUrl to images src
        token.attrObj.src = 'https://strapi.mauri.co' + token.attrObj.src
        break;
      }
    }
  },   
  strapi: {
    url: config.strapiBaseUri
  },  

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
