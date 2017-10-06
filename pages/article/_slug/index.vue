<template>
  <div class="l-container">
    <article class="s-article">
      <h2 class="brand-blue-text">Artikel</h2>
      <h1>{{ post.title }}</h1>
      <p><relative-date :date="post.date" /> • von {{ post.author || 'Christoph' }}</p>

      <nuxtent-body :body="post.body" class="s-article" />
    </article>
  </div>
</template>

<script>
import RelativeDate from '~/components/RelativeDate'

export default {
  components: {
    RelativeDate
  },
  async asyncData ({app, route, payload}) {
    const post = await app.$content('/articles').get(route.path)

    return {
      post
    }
  }
}
</script>
