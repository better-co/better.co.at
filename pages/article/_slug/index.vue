<template>
  <div class="l-container">
    <article class="s-article">
      <h2 class="brand-blue-text">Artikel</h2>
      <h1>{{ post.title }}</h1>

      <nuxtent-body :body="post.body" class="s-article" />
    </article>
  </div>
</template>

<script>
import Post from '~/components/Post'

export default {
  async asyncData ({app, route, payload}) {
    const post = await app.$content('/articles').get(route.path)

    return {
      post
    }
  },

  components: [
    Post
  ]
}
</script>
