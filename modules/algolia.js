const path = require('path')
const axios = require('axios')
const algolia = require('algoliasearch')
const client = algolia(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_ADMIN_KEY)

const defaults = {
}

module.exports = function algolia (moduleOptions) {
  const options = Object.assign({}, defaults, this.options.algolia, moduleOptions)
  const contentOptions = require(path.resolve(this.options.srcDir, 'nuxtent.config.js'))

  this.nuxt.plugin('build', builder => {
    this.nuxt.plugin('generator', (generator) => {
      generator.plugin('generate', ({ routes }) => {
        return indexContent(contentOptions)
      })
    })
  })
}

function indexContent (contentOptions) {
  return Promise.all(contentOptions.content.map(([ contentType, options ]) => {
    return indexContentType(contentType, options)
  }))
}

function indexContentType (contentType, options) {
  return axios.get(`http://localhost:3000/content-api/${contentType}`).then(response => {
    return response.data
  }).then(posts => posts.map(post => {
    post.objectID = post.permalink
    delete post.meta
    return post
  })).then(objects => {
    const index = client.initIndex(contentType)
    console.log(`Algolia: Creating index ${contentType}`)
    console.log(`Algolia: Adding ${objects.length} objects to index`)

    return index.addObjects(objects)
  })
}
