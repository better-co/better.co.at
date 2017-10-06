<template>
  <div class="l-container--fixed">
    <PageTitle class="text-center">
      <i class="far fa-podcast" slot="icon"></i>
      <h1 slot="title">bettercast</h1>
    </PageTitle>

    <div class="l-container--tb" v-for="post in episodes" :key="post.permalink">
      <post-preview :post="post" :showDate="true" />
    </div>

    <nuxt-child></nuxt-child>
  </div>
</template>
<script>
import PostPreview from '~/components/PostPreview'
import PageTitle from '~/components/PageTitle'

export default {
  components: {
    PostPreview, PageTitle
  },
  async asyncData ({app}) {
    return {
      episodes: await app.$content('bettercast').getAll()
    }
  }
}
</script>
