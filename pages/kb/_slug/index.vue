<template>
  <div class="s-article l-container">
    <h2 class="brand-orange-text">Knowledge Base</h2>
    <h1>{{ page.title }}</h1>

    <nuxtent-body :body="page.body" class="s-article"/>
  </div>
</template>

<script>
export default {
  async asyncData ({app, route}) {
    const page = await app.$content('/kb').get(route.path)

    return {
      page
    }
  }
}
</script>
