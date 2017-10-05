<template>
  <div>
    <nuxtent-body :body="episode.body" class="s-article"></nuxtent-body>
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
