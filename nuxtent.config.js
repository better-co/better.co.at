module.exports = {
  content: [
    ['articles', {
      page: '/article/_slug',
      permalink: '/article/:slug',
      generate: ['get', 'getAll']
    }],
    ['kb', {
      page: '/kb/_slug',
      permalink: '/kb/:slug',
      isPost: false,
      generate: ['get', 'getAll']
    }],
    ['sections', {
      page: '/section/_slug',
      permalink: '/section/:slug',
      isPost: false,
      generate: ['get', 'getAll']
    }],
    ['bettercast', {
      page: '/bettercast/_slug',
      permalink: '/bettercast/:slug',
      generate: ['get', 'getAll']
    }],
    ['guides', {
      page: '/guide/_slug',
      permalink: '/guide/:slug',
      isPost: false,
      generate: ['get', 'getAll'],
      anchorLevel: 2
    }]
  ],
  parsers: {
    md: {
    }
  }
}
