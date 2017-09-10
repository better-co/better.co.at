<template>
  <article>
    <header>
      <h1>{{ post.title }}</h1>
    </header>

    <main>
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
    }
  }
</script>
