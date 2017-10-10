<template>
  <div class="l-container--tb">
    <header class="s-article l-container--b2">
      <h2 class="brand-blue-text">Artikel</h2>
      <h1>{{ post.title }}</h1>
      <h2 class="h2-subheading">
        <span v-if="post.author">Geschrieben von {{ post.author.name }} </span>
         <relative-date :date="post.date" />
      </h2>
    </header>

    <nuxtent-body :body="post.body" class="s-article" />
  </div>
</template>

<script>
import RelativeDate from '~/components/RelativeDate'

export default {
  components: {
    RelativeDate
  },

  async asyncData ({ app, route }) {
    const post = await app.$content('/articles').get(route.path)

    return {
      post
    }
  }
}
</script>
