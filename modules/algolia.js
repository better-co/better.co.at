const path = require('path')
const axios = require('axios')
const algolia = require('algoliasearch')

// Default options
const defaults = {
  appId: null,
  appKey: null
}

/**
 * Indexes nuxtent content into algolia
 */
class NuxtentIndexer {
  /**
   * Constructor
   *
   * @param {algoliasearch.AlgoliaClient} client
   * @param {object} nuxtentConfig
   */
  constructor (client, nuxtentConfig) {
    this.client = client
    this.nuxtentConfig = nuxtentConfig
  }

  /**
   * Index all nuxtent content types
   *
   * @return {Promise}
   */
  index () {
    const contentTypes = this.nuxtentConfig.content

    return Promise.all(contentTypes.map(([ contentType, options ]) => {
      return this.indexContentType(contentType, options)
    }))
  }

  /**
   * Index all posts of a nuxtent content type
   *
   * @param {string} contentType
   * @param {object} options
   * @return {Promise}
   */
  indexContentType (contentType, options) {
    return axios.get(`http://localhost:3000/content-api/${contentType}`).then(response => {
      return response.data
    }).then(posts => posts.filter(post => {
      // Don't add drafts
      return !post.draft
    })).then(posts => posts.map(post => {
      // Use the permalink as objectID, nuxtent has no better ID and algolia accepts string IDs
      post.objectID = post.permalink
      // Remove unnecessary filesystem metadata
      delete post.meta
      // Returns the object to index for search
      return post
    })).then(objects => {
      // Add object to a generic instance named after the nuxtent content type
      const index = this.client.initIndex(contentType)

      console.log(`Algolia: Creating index ${contentType}`)
      console.log(`Algolia: Adding ${objects.length} objects to index`)

      // Index objects and return the promise returned by the algolia client
      return index.addObjects(objects)
    })
  }
}

module.exports = function algoliaModule (moduleOptions) {
  const options = Object.assign({}, defaults, this.options.algolia, moduleOptions)

  this.nuxt.plugin('build', builder => {
    this.nuxt.plugin('generator', generator => {
      generator.plugin('generate', ({ routes }) => {
        const nuxtentConfig = require(path.resolve(this.options.srcDir, 'nuxtent.config.js'))
        const client = algolia(options.appId, options.appKey)
        const indexer = new NuxtentIndexer(client, nuxtentConfig)

        // Run the indexer only when nuxt generate is run
        return indexer.index()
      })
    })
  })
}
