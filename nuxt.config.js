module.exports = {
  /*
  ** Modules
  */
  modules: [
    'nuxtent',
    '~/modules/podcast'
  ],
  plugins: [
    '~/plugins/focus'
  ],
  /*
  ** Headers of the page
  */
  head: {
    title: 'better.co.at',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
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
      { rel: 'stylesheet', type: 'text/css', href: 'https://use.typekit.net/ket7iit.css'}
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
    '~/assets/fontawesome/css/fontawesome-pro-core.css',
    '~/assets/fontawesome/css/fontawesome-pro-light.css',
    '~/assets/fontawesome/css/fontawesome-pro-regular.css',
    '~/assets/fontawesome/css/fontawesome-pro-solid.css',
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

  podcast: {
    path: 'bettercast.xml'
  }
}
