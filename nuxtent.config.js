module.exports = {
  content: [
    ['posts', {
      page: '/posts/_slug',
      permalink: ':year/:slug',
      generate: ['get', 'getAll']
    }]
  ]
}
