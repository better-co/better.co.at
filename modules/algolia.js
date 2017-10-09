const path = require('path')
const axios = require('axios')

const defaults = {
}

module.exports = function algolia (moduleOptions) {
  const options = Object.assign({}, defaults, this.options.algolia, moduleOptions)
  const contentOptions = require(path.resolve(this.options.srcDir, 'nuxtent.config.js'))

  this.nuxt.plugin('build', builder => {
    this.nuxt.plugin('generator', (generator) => {
      generator.plugin('generate', ({ routes }) => {
        // All content types
        axios.get('http://localhost:3000/content-api').then(response => {
          console.log(response.data['content-endpoints'])
        })

        // Get content and push to algolia index
        axios.get('http://localhost:3000/content-api/bettercast').then(response => {

        })
      })
    })
  })
}
