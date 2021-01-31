export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'DE OAXACA - DIARIO ESTATAL',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'DE OAXACA - DIARIO ESTATAL es un periodico digital independiente con las noticias de hoy del estado de Oaxaca, Mexico y el Mundo' },
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
    '@nuxtjs/pwa'
  ],
  pwa: {
    manifest: {
      name: 'DEOAXACA APP',
      theme_color: '#CE1531',
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
