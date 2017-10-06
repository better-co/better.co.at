<template>
  <div class="l-container--fixed">
    <PageTitle class="text-center">
      <h1 slot="title" class="brand-pink-text"><i class="far fa-podcast"></i> bettercast</h1>
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
