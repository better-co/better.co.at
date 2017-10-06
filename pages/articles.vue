<template>
  <div class="l-container--fixed s-default">
    <PageTitle class="text-center">
      <i class="far fa-lightbulb brand-blue-text" slot="icon"></i>
      <h1 slot="title" class="brand-blue-text">Artikel</h1>
    </PageTitle>

    <div class="l-container--b" v-for="post in posts" :key="post.permalink" v-if="!post.draft">
      <post-preview :post="post" :showDate="true"/>
    </div>
  </div>
</template>

<script>
import PostPreview from '~/components/PostPreview'
import PageTitle from '~/components/PageTitle'

export default {
  components: {
    PostPreview,
    PageTitle
  },

  async asyncData ({app, route}) {
    return {
      posts: await app.$content('/articles').getAll()
    }
  }
}
</script>
