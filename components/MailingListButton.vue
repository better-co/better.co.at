<template>
  <div class="mailing-list-button">
    <template v-if="!sent">
      <div v-if="emailInputVisible" class="c-input-group">
        <input type="email" class="c-form-control c-input-group__input" placeholder="Deine E-Mail Adresse" required v-focus v-model.trim="email" @blur="cancel()" @keyup.esc="reset()" @keyup.enter="send()">
        <button class="c-btn c-btn--primary c-btn--icon-l" @click="send()">
          <i class="fa fa-check"></i>
          Bestätigen
        </button>
      </div>
      <button class="mailing-list-button__button c-btn c-btn--primary c-btn--icon-r" v-else @click="emailInputVisible = true">
        Erhalte Benachrichtigungen direkt per E-Mail
        <i class="fa fa-fw fa-paper-plane"></i>
      </button>
      <div v-if="error">
        <p><i class="fal fa-fw fa-exclamation-circle"></i> Es ist ein Fehler aufgetreten. Bitte versuche es später erneut.</p>
      </div>
    </template>
    <template v-else>
      <p><i class="fal fa-fw fa-check-circle"></i> Danke! Check noch deine E-Mails und klick den Bestätigungslink, dann bist du fertig.</p>
    </template>
  </div>
</template>

<script>
import * as jsonp from 'jsonp'
import * as qs from 'qs'

export default {
  data () {
    return {
      email: '',
      emailInputVisible: false,
      sent: false,
      error: false
    }
  },
  methods: {
    cancel () {
      if (!this.email) {
        this.emailInputVisible = !this.emailInputVisible
      }
    },

    reset () {
      this.email = ''
      this.sent = false
      this.error = false
      this.cancel()
    },

    async send () {
      const url = 'https://hochstrasser.us7.list-manage.com/subscribe/post-json?u=d87aafa86509e5206d575da4c&id=20e826309a'

      this.sent = true

      jsonp(url + '&' + qs.stringify({
        EMAIL: this.email
      }), {param: 'c'}, (err, data) => {
        if (err) {
          this.cancel()
          this.error = true
          this.sent = false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.mailing-list-button {
  &__button {
    margin: 0 auto;
  }
}
</style>
