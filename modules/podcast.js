const fs = require('fs-extra')
const path = require('path')
const axios = require('axios')
const RSS = require('rss')

const defaults = {
  path: '/podcast.xml'
}

module.exports = function podcast (moduleOptions) {
  const options = Object.assign({}, defaults, this.options.podcast, moduleOptions)
  const feedPath = path.resolve(this.options.srcDir, path.join('dist', options.path))

  this.addServerMiddleware({
    path: options.path,
    handler: (req, res, next) => {
      axios.get('http://localhost:3000/content-api/bettercast').then(response => {
        const feed = createPodcastFeed(options, response.data)
        res.setHeader('Content-Type', 'application/xml')
        res.end(feed.xml())
      })
    }
  })

  this.nuxt.plugin('build', builder => {
    this.nuxt.plugin('generator', (generator) => {
      generator.plugin('generate', ({routes}) => {
        axios.get('http://localhost:3000/content-api/bettercast').then(response => {
          const feed = createPodcastFeed(options, response.data)
          fs.ensureDirSync(path.dirname(feedPath))
          fs.writeFileSync(feedPath, feed.xml())
        })
      })
    })
  })
}

function createPodcastFeed (options, episodes) {
  const feed = new RSS({
    title: 'bettercast — besser gemeinsam erfolgreich arbeiten',
    feed_url: 'https://better.co.at/bettercast.xml',
    site_url: 'https://better.co.at/bettercast',
    image_url: 'https://assets.better.co.at/bettercast/cover.png',
    managingEditor: 'Christoph Hochstrasser',
    copyright: '2017 Christoph Hochstrasser',
    link: 'https://better.co.at/bettercast',
    language: 'de',
    categories: ['Agile', 'Management', 'Business'],
    pubDate: episodes[0].date,
    custom_namespaces: {
      'itunes': 'http://www.itunes.com/dtds/podcast-1.0.dtd'
    },
    custom_elements: [
      {'itunes:subtitle': 'Ein Podcast über agile Methoden in der Softwareentwicklung'},
      {'itunes:image': {
        _attr: {
          href: 'https://assets.better.co.at/bettercast/cover.png'
        }
      }},
      {'itunes:author': 'Christoph Hochstrasser'},
      {'itunes:summary': ''},
      {'itunes:owner': [
        {'itunes:name': 'Christoph Hochstrasser'},
        {'itunes:email': 'me@christophh.net'}
      ]},
      {'itunes:category': [
        {_attr: {text: 'Business'}},
        {'itunes:category': {
          _attr: {
            text: 'Management & Marketing'
          }
        }}
      ]}
    ]
  })

  episodes.map((episode) => {
    feed.item({
      title: episode.title,
      date: episode.date,
      url: episode.permalink,
      enclosure: {
        url: episode.enclosure.url,
        size: episode.enclosure.length,
        type: episode.enclosure.type
      },
      custom_elements: [
        {'itunes:duration': episode.duration}
      ]
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
