<template>
  <div>
    <div class="light-orange-bg">
      <div class="l-container--fixed s-default">
        <div class="l-grid l-grid--gutters">
          <div class="l-grid__col l-grid__col--middle l-grid__col--fit">
            <h3>Jedes Thema hat mehr als eine Seite.</h3>
            <p>Schick uns deinen Artikel über Github.</p>
          </div>
          <div class="l-grid__col l-grid__col--middle">
            <a class="c-btn c-btn--default c-btn--md c-btn--icon-r" href="https://github.com/better-co/better.co.at/new/master/content/articles">
              <i class="fab fa-github" aria-hidden="true"></i>
              Neuer Artikel
              <i class="fa fa-angle-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="l-container--fixed s-default">
      <PageTitle class="text-center">
        <h1 slot="title" class="brand-blue-text"><i class="far fa-lightbulb"></i> Artikel</h1>
      </PageTitle>

      <div v-for="post in posts" :key="post.permalink" v-if="!post.draft">
        <post-preview :post="post" :showDate="true" />
      </div>
    </div>
  </div>
</template>

<script>
import PostPreview from '~/components/PostPreview'
import PageTitle from '~/components/PageTitle'

export default {
  components: {
    PostPreview, PageTitle
  },

  async asyncData ({ app, route }) {
    const posts = (await app.$content('articles').getAll()).filter(post => {
      return process.env.NODE_ENV === 'development' || !post.draft
    })

    return {
      posts
    }
  },

  head () {
    return {
      title: 'Artikel — better.co.at',
      meta: [
        { hid: 'description', name: 'description', content: 'Artikel aus unserem Blog zu Agile, Scrum & mehr' }
      ]
    }
  }
}
</script>
