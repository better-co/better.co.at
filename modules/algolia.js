const path = require('path')
const axios = require('axios')
const algolia = require('algoliasearch')

const defaults = {
  appId: null,
  appKey: null
}

class NuxtentIndexer {
  constructor (client, nuxtentConfig) {
    this.client = client
    this.nuxtentConfig = nuxtentConfig
  }

  index () {
    const contentTypes = this.nuxtentConfig.content

    return Promise.all(contentTypes.map(([ contentType, options ]) => {
      return this.indexContentType(contentType, options)
    }))
  }

  indexContentType (contentType, options) {
    return axios.get(`http://localhost:3000/content-api/${contentType}`).then(response => {
      return response.data
    }).then(posts => posts.map(post => {
      post.objectID = post.permalink
      delete post.meta
      return post
    })).then(objects => {
      const index = this.client.initIndex(contentType)
      console.log(`Algolia: Creating index ${contentType}`)
      console.log(`Algolia: Adding ${objects.length} objects to index`)

      return index.addObjects(objects)
    })
  }
}

module.exports = function algoliaModule (moduleOptions) {
  const options = Object.assign({}, defaults, this.options.algolia, moduleOptions)
  const nuxtentConfig = require(path.resolve(this.options.srcDir, 'nuxtent.config.js'))
  const client = algolia(options.appId, options.appKey)
  const indexer = new NuxtentIndexer(client, nuxtentConfig)

  this.nuxt.plugin('build', builder => {
    this.nuxt.plugin('generator', (generator) => {
      generator.plugin('generate', ({ routes }) => {
        return indexer.index()
      })
    })
  })
}
