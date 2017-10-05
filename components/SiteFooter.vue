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
        <IconLink to="/" icon="fa-angle-right">
          AGB
        </IconLink>
        <IconLink to="/" icon="fa-angle-right">
          Impressum
        </IconLink>
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
  &__content {
    > * + * {
      margin-top: 1rem;
    }
  }
}
</style>
