<template>
  <div>
    <playbook-controls :guide="guide"/>

    <article class="l-container--b2">
      <header class="s-article l-container--tb">
        <h2 class="brand-purple-text">Guide</h2>
        <h1>{{ guide.title }}</h1>
        <h2 class="h2-subheading" v-if="guide.author">Geschrieben von {{ guide.author.name }}</h2>

        <h2 v-if="guide.lede">Zusammenfassung</h2>
        <h2 class="h1-subheading" v-if="guide.lede">{{ guide.lede }}</h2>
      </header>

      <nuxtent-body :body="guide.body" class="s-article" />
    </article>

    <playbook-controls :guide="guide"/>
    <edit-post :post="guide"/>
  </div>
</template>
<script>
import excerptHtml from 'excerpt-html'
import EditPost from '~/components/EditPost'
import PlaybookControls from '~/components/PlaybookControls'

export default {
  components: { EditPost, PlaybookControls },

  async asyncData ({ app, route }) {
    const guide = await app.$content('guides').get(route.path)

    return {
      guide
    }
  },

  head () {
    const description = this.guide.lede || excerptHtml(this.guide.body)

    return {
      title: `${this.guide.title} — better.co.at`,
      meta: [
        { hid: 'description', name: 'description', content: description }
      ]
    }
  }
}
</script>
