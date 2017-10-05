<template>
  <div class="l-container s-article text-center">
    <h1 v-if="error.statusCode === 404">Seite nicht gefunden</h1>
    <h1 v-else>Ein Fehler ist aufgetreten</h1>
    <p><nuxt-link to="/" class="c-btn c-btn--default c-btn--lg">Startseite &rarr;</nuxt-link></p>
  </div>
</template>

<script>
  export default {
    props: ['error']
  }
</script>
