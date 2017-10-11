<template>
  <div class="playbook">
    <div class="l-container--fixed">
      <PageTitle class="text-center">
        <h1 slot="title"><i class="far fa-book"></i> Dein Playbook</h1>
      </PageTitle>
    </div>

    <div v-if="guides.length === 0" class="s-article l-container--tb light-orange-bg">
      <h2>Dein persönliches Playbook für dein Team</h2>
      <p>
        Dir gefällt einer unserer Guides und du möchtest ihn speichern?
      </p>
      <p>
        Du kannst bei jedem unserer Guides den Knopf "Zum Playbook hinzufügen" drücken um
        den Guide für später zu speichern.
      </p>
      <p>
        Danach siehst du hier alle deine gespeicherten Guides. Von hier aus kannst du diese
        Seite z.B. als PDF speichern oder beim nächsten Team-Event direkt als Grundlage
        für die Durchführung verwenden.
      </p>
    </div>

    <div class="l-container--tb l-container--fixed" v-if="guides.length > 0">
      <div class="l-grid l-grid--right">
        <div class="l-grid__col l-grid__col--fit">
          <h2>Guides</h2>
        </div>
        <div class="l-grid__col l-grid__col--middle">
          <button type="button" class="c-btn c-btn--default" @click="reset()">
            <i class="fa fa-undo fa-fw"></i>
            Playbook zurücksetzen
          </button>
        </div>
      </div>
    </div>

    <div v-for="post in guides" :key="post.permalink" class="l-container--b l-container--fixed">
      <div class="l-grid l-grid--gutters">
        <div class="l-grid__col l-grid__col--fit">
          <post-preview :post="post" :showDate="false" />
          <div class="print-only l-container--tb">
            <p>https://better.co.at/{{ post.permalink }}</p>
          </div>
        </div>
        <div class="l-grid__col l-grid__col--middle">
          <button type="button" class="c-btn c-btn--default" @click="deleteGuide({guide: post})">
            <i class="fa fa-minus-circle fa-fw"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PostPreview from '~/components/PostPreview'
import PageTitle from '~/components/PageTitle'
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    PostPreview, PageTitle
  },

  async created () {
    if (process.browser) {
      this.$store.dispatch('loadFromLocalStorage')
    }
  },

  computed: {
    ...mapState(['guides'])
  },

  methods: {
    ...mapActions(['deleteGuide', 'reset'])
  }
}
</script>

<style lang="scss" scoped>
  .playbook {
    .print-only, .print-only-inline {
      display: none;
    }

    @media print {
      .c-btn {
        display: none;
      }

      .print-only {
        display: block;
      }
      .print-only-inline {
        display: inline;
      }
    }
  }
</style>
