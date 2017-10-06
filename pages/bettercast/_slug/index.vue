<template>
  <div class="l-container">
    <div class="l-container--fixed s-article">
      <h2 class="brand-pink-text"><i class="far fa-podcast brand-pink-text"></i> bettercast</h2>
      <h1>{{ episode.title }}</h1>
      <nuxtent-body :body="episode.body" class="s-article"></nuxtent-body>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData ({app, route}) {
    const episode = await app.$content('bettercast').get(route.path)

    return {
      episode
    }
  }
}
</script>
