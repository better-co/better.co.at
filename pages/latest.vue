<template>
  <div class="l-container--fixed s-default">
    <PageTitle class="text-center">
      <i class="far fa-lightbulb" slot="icon"></i>
      <h1 slot="title">Artikel</h1>
      <span slot="subheading">Artikel</span>
    </PageTitle>
    <ul v-for="post in posts" :key="post.permalink" v-if="!post.draft">
      <li>
        <nuxt-link :to="post.permalink">
          {{ post.title }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import Post from '~/components/Post'
import PageTitle from '~/components/PageTitle'

export default {
  components: {
    Post,
    PageTitle
  },

  async asyncData ({app, payload}) {
    const posts = await app.$content('/articles').query({}).getAll()

    return {
      posts
    }
  }
}
</script>
