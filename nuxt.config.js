export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'De Oaxaca noticias - Diario Estatal',
    htmlAttrs: {
      lang: 'es'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'DE OAXACA NOTICIAS - DIARIO ESTATAL, Con las últimas noticias de Oaxaca, Mexico y el mundo actualizadas al momento' },
      { hid: 'og:image', property: 'og:image', content: '/icon.png'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.2.0/css/all.css' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/pwa',
    '@nuxtjs/google-analytics'
  ],
  googleAnalytics: {
    id: 'UA-188644501-1' // Use as fallback if no runtime config is provided
  },
  pwa: {
    manifest: {
      name: 'DE OAXACA APP',
      theme_color: '#CE1531',
    },
    meta: { 
      ogType : false , 
      ogTitle : false , 
      ogDescription : false,
      ogImage : false,
      lang : 'es'
     }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@nuxtjs/markdownit',
    'vue-social-sharing/nuxt'
  ],
  
  styleResources: {
    scss: [
        '~/assets/scss/main.scss',
    ]
},

markdownit: {
  injected: true,
    html: true,
    linkify: true,
    typographer: true,
  use: [
    'markdown-it-div',
    'markdown-it-attrs'
  ]
},
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
