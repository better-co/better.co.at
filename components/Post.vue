<template>
  <article class="c-post">
    <header>
      <div class="c-post__meta l-container--fixed">
        <span class="c-post__meta-value dark-purple-muted">
          {{ date(post.date) }} von {{ post.author }}
        </span>
      </div>
      <div class="s-article">
        <h1 class="c-post__title">
          {{ post.title }}
        </h1>
      </div>
    </header>

    <main class="s-article">
      <nuxtent-body :body="post.body" />
    </main>
  </article>
</template>

<script>
export default {
  props: ['post'],

  data () {
    return {

    }
  },

  computed: {
    path () {
      return `${this.post.meta.dirName}${this.post.permalink}`
    }
  },

  methods: {
    date (date) {
      let dateObject = new Date(date)
      return dateObject.toLocaleDateString('de')
    }
  }
}
</script>
