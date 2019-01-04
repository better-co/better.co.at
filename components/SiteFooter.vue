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
        &copy; 2019 Ing. Christoph Hochstrasser
      </p>
      <p>
        <a href="https://github.com/hochstrasserio/agb">
          AGB<i class="fa fa-fw fa-angle-right"></i>
        </a>
        <a href="https://www.iubenda.com/privacy-policy/77449137">
          Datenschutz<i class="fa fa-fw fa-angle-right"></i>
        </a>
        <a href="https://www.iubenda.com/privacy-policy/77449137/cookie-policy">
          Cookies<i class="fa fa-fw fa-angle-right"></i>
        </a>
        <nuxt-link to="/imprint">
          Impressum<i class="fa fa-fw fa-angle-right"></i>
        </nuxt-link>
      </p>
      <p>
        <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons Lizenzvertrag" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br />Dieses Werk ist lizenziert unter einer <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Namensnennung-Weitergabe unter gleichen Bedingungen 4.0 International Lizenz</a>.
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
