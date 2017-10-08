<template>
  <div>
    <div class="s-article l-container l-container--b2">
      <h2 class="brand-orange-text">Knowledge Base</h2>
      <h1>{{ page.title }}</h1>

      <nuxtent-body :body="page.body" class="s-article"/>
    </div>
    <edit-post :post="page"/>
  </div>
</template>

<script>
import EditPost from '~/components/EditPost'

export default {
  components: {
    EditPost
  },
  async asyncData ({ app, route }) {
    const page = await app.$content('/kb').get(route.path)

    return {
      page
    }
  }
}
</script>
