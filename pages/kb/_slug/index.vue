<template>
  <div>
    <div class="l-container--b2">
      <header class="s-article l-container--tb">
        <h2 class="brand-orange-text">Knowledge Base</h2>
        <h1>{{ page.title }}</h1>
      </header>

      <nuxtent-body :body="page.body" class="s-article"/>
    </div>
    <edit-post :post="page"/>
  </div>
</template>

<script>
import excerptHtml from 'excerpt-html'
import EditPost from '~/components/EditPost'

export default {
  components: {
    EditPost
  },

  async asyncData ({ app, route }) {
    const page = await app.$content('/kb').get(route.path)

    return {
      page
    }
  },

  head () {
    const description = this.page.lede || excerptHtml(this.page.body)

    return {
      title: `${this.page.title} — better.co.at`,
      meta: [
        { hid: 'description', name: 'description', content: description }
      ]
    }
  }
}
</script>
