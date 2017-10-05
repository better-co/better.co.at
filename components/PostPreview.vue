<template>
  <block-link :to="post.permalink">
    <article class="post-preview">
      <div class="post-preview__content">
        <h1 class="post-preview__title">
          {{ post.title }}
        </h1>

        <div v-if="post.lede">
          {{ post.lede }}
        </div>
        <div v-else>
          {{ excerpt }}
        </div>
      </div>

      <footer class="post-preview__footer" v-if="typeof showDate === 'undefined' || showDate">
        <relative-date :date="post.date"/>
      </footer>
    </article>
  </block-link>
</template>

<script>
import BlockLink from '~/components/BlockLink'
import RelativeDate from '~/components/RelativeDate'
import excerptHtml from 'excerpt-html'

export default {
  components: {BlockLink, RelativeDate},
  props: [
    'post', 'showDate', 'excerptLength'
  ],
  computed: {
    excerpt () {
      return excerptHtml(this.post.body, {pruneLength: this.excerptLength || 100})
    }
  }
}
</script>

<style lang="scss" scoped>
@import "assets/scss/colors.scss";

.post-preview {
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: space-between;

  &__footer, &__content {
    color: lighten(desaturate(map-get($darks, "blue"), 50%), 50%);
    font-size: 0.9375rem;

    > * + * {
      margin-top: 0.5rem;
    }
  }

  &__footer {
    margin-top: 0.5rem;
  }

  &__title {
    color: map-get($darks, "blue");
    margin: 0 0 0;
    font-size: 1rem;
    font-weight: 600;
  }
}
</style>
