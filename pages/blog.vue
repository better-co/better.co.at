<template>
  <div>
    <h2><nuxt-link to="/blog">Blog</nuxt-link></h2>

    <article v-for="post in posts" :key="post.permalink" v-if="!post.draft">
      <h3>
        <nuxt-link :to="permalink(post)">{{ post.title }}</nuxt-link>
      </h3>
      <p>{{ post.date }}</p>
    </article>
  </div>
</template>

<script>
  export default {
    async asyncData ({app}) {
      return {
        posts: await app.$content('/posts').query({excludes: ['body']}).getAll()
      }
    },

    methods: {
      permalink (post) {
        return `/posts${post.permalink}`
      }
    }
  }
</script>
