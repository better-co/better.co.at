const fs = require('fs-extra')
const path = require('path')
const axios = require('axios')
const RSS = require('rss')

const defaults = {
  path: '/podcast.xml'
}

module.exports = async function podcast (moduleOptions) {
  const options = {...defaults, ...this.options.podcast, ...moduleOptions}
  const feedPath = path.resolve(this.options.srcDir, path.join('dist', options.path))

  this.addServerMiddleware({
    path: options.path,
    handler: async (req, res, next) => {
      const episodes = await axios.get('http://localhost:3000/content-api/bettercast')
      const feed = createPodcastFeed(options, episodes)

      res.setHeader('Content-Type', 'application/xml')
      res.end(feed.xml())
    }
  })

  this.nuxt.plugin('build', async builder => {
    this.nuxt.plugin('generator', async (generator) => {
      generator.plugin('generate', async ({routes}) => {
        const response = await axios.get('http://localhost:3000/content-api/bettercast')
        const feed = createPodcastFeed(options, response.data)

        fs.ensureDirSync(path.dirname(feedPath))
        fs.writeFileSync(feedPath, feed.xml())
      })
    })
  })
}

function createPodcastFeed (options, episodes) {
  const feed = new RSS({
    title: 'bettercast — Ein Podcast für bessere Software durch agile Entwicklung'
  })

  episodes.map((episode) => {
    feed.item({
      title: episode.title,
      date: episode.date,
      url: episode.permalink
    })
  })

  return feed
}

// Borrowed from nuxt/common/utils
function promisifyRoute (fn) {
  // If routes is an array
  if (Array.isArray(fn)) {
    return Promise.resolve(fn)
  }
  // If routes is a function expecting a callback
  if (fn.length === 1) {
    return new Promise((resolve, reject) => {
      fn(function (err, routeParams) {
        if (err) {
          reject(err)
        }
        resolve(routeParams)
      })
    })
  }
  let promise = fn()
  if (!promise || (!(promise instanceof Promise) && (typeof promise.then !== 'function'))) {
    promise = Promise.resolve(promise)
  }
  return promise
}
