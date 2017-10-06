<template>
  <footer class="site-footer light-blue-bg">
    <div class="l-container--fixed s-default site-footer__content text-center">
      <div class="text-center s-default">
        <h1>Mehr in Kürze</h1>
        <p class="h1-subheading">
          Wir benachrichtigen dich. Kein Spam, versprochen 🤞
        </p>

        <mailing-list-button/>
      </div>

      <p class="dark-blue-muted">
        &copy; 2017 Ing. Christoph Hochstrasser
      </p>
      <p>
        <a href="https://github.com/hochstrasserio/agb">
          AGB<i class="fa fa-fw fa-angle-right"></i>
        </a>
        <nuxt-link to="/imprint">
          Impressum<i class="fa fa-fw fa-angle-right"></i>
        </nuxt-link>
      </p>
    </div>
  </footer>
</template>

<script>
import IconLink from '~/components/IconLink'
import MailingListButton from '~/components/MailingListButton'

export default {
  components: {
    IconLink, MailingListButton
  }
}
</script>

<style lang="scss" scoped>
.site-footer {
  padding: 0 0 1rem;

  &__content {
    > * + * {
      margin-top: 1rem;
    }
  }
}
</style>
