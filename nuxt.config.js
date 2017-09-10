module.exports = {
  /*
  ** Modules
  */
  modules: [
    'nuxtent'
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
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** CSS
  */
  css: [
    'normalize.css',
    '~/assets/scss/main.scss',
    '~/assets/fontawesome/css/font-awesome-core.css',
    '~/assets/fontawesome/css/font-awesome-light.css'
  ],
  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,

    watch: [
      '~/content'
    ],

    vendor: [

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
  }
}
