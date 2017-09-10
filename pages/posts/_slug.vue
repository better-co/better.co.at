<template>
  <div>
    <h4>{{ post.title }}</h4>

    <div>
      <nuxtent-body :body="post.body" />
    </div>
  </div>
</template>

<script>
  import Post from '~/components/Post'

  export default {
    async asyncData ({app, route, payload}) {
      const post = await app.$content('/posts').get(`${route.params.year}/${route.params.slug}`) || payload

      return {
        post
      }
    },

    components: [
      Post
    ]
  }
</script>
