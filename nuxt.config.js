require('dotenv').config()

module.exports = {
  /*
  ** Modules
  */
  modules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/google-analytics',
    '@nuxtjs/pwa',
    'nuxtent',
    '~/modules/podcast',
    '~/modules/algolia'
  ],
  /*
  ** Plugins
  */
  plugins: [
    '~/plugins/focus',
    '~/plugins/algolia'
  ],
  /*
  ** Env variables
  */
  env: {
    algoliaAppId: process.env.ALGOLIA_APP_ID,
    algoliaSearchKey: process.env.ALGOLIA_SEARCH_KEY
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'better.co.at',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'besser gemeinsam erfolgreich arbeiten' }
    ],
    link: [
      /*
      ** Icon
      */
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      /*
      ** External CSS
      */
      // Typekit fonts
      { rel: 'stylesheet', type: 'text/css', href: 'https://use.typekit.net/ket7iit.css'},
      // Fontawesome icons
      { rel: 'stylesheet', type: 'text/css', href: 'https://assets.better.co.at/fonts/fontawesome/css/fontawesome-pro-core.css'},
      { rel: 'stylesheet', type: 'text/css', href: 'https://assets.better.co.at/fonts/fontawesome/css/fontawesome-pro-light.css'},
      { rel: 'stylesheet', type: 'text/css', href: 'https://assets.better.co.at/fonts/fontawesome/css/fontawesome-pro-regular.css'},
      { rel: 'stylesheet', type: 'text/css', href: 'https://assets.better.co.at/fonts/fontawesome/css/fontawesome-pro-solid.css'},
      { rel: 'stylesheet', type: 'text/css', href: 'https://assets.better.co.at/fonts/fontawesome/css/fontawesome-pro-brands.css'}
    ],
    script: [
    ],
    htmlAttrs: {
      lang: 'de'
    }
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#FF0092' },
  /*
  ** CSS
  */
  css: [
    'normalize.css',
    '~/assets/scss/main.scss'
  ],
  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,
    watch: [
      '~/content',
      '~/lib/data'
    ],
    vendor: [
      'jsonp', 'qs', 'moment', 'excerpt-html', 'localforage'
    ],
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  /*
  ** Generates podcast RSS feed from nuxtent posts
  */
  podcast: {
    path: 'bettercast.xml'
  },
  /*
  ** Indexes all content into algolia
  */
  algolia: {
    appId: process.env.ALGOLIA_APP_ID,
    appKey: process.env.ALGOLIA_ADMIN_KEY
  },
  /*
  ** Google Analytics module
  */
  'google-analytics': {
    ua: 'UA-108016054-1'
  },
  /*
  ** PWA manifest
  */
  manifest: {
    name: 'better.co.at',
    lang: 'de'
  }
}
