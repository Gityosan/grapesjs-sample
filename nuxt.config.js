export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s/grapesjs-pdf-builder',
    title: 'top',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  publicRuntimeConfig: {
    MICROCMS_API_KEY: process.env.MICROCMS_API_KEY,
    MICROCMS_API_URL: process.env.MICROCMS_API_URL
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxt/postcss8'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    'nuxt-stripe-module'
  ],

  stripe: {
    version: '2020-08-27', // versionは固定にしておいた方が無難です。
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    locale: 'ja'
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  proxy: {
    '/api': {
      target: 'http://localhost:3000',
      pathRewrite: { '^/api': '' }
    }
  },
  axios: {
    proxy: true
  },
  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'ja'
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      light: {
        background: '#f5f5f5',
        primary: '#3f51b5',
        secondary: '#b0bec5',
        accent: '#8c9eff',
        error: '#b71c1c'
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // plugins: [
    //   new CopyFilePlugin({
    //     patterns: [
    //       {
    //         context: './lit', //どこの
    //         from: '**/*.js', //どのファイルを
    //         to: '.' //どこにコピーするか
    //       }
    //     ]
    //   })
    // ],
    // extend(config, ctx) {
    //   if (ctx.isDev && ctx.isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //     config.plugins.push(
    //       new StylelintPlugin({
    //         files: ['**/*.vue', '**/*.scss']
    //       })
    //     )
    //   }
    // },
  }
}
