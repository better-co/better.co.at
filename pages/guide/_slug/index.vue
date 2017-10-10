<template>
  <div class="l-container--tb">
    <article class="l-container--b2">
      <header class="s-article l-container--b2">
        <div>
          <button type="button" class="c-btn c-btn--default" @click="addGuide({guide})" v-if="!hasGuide(guide)">
            <i class="fa fa-plus-circle fa-fw"></i> Zum Playbook hinzufügen
          </button>
          <div class="l-grid l-grid--gutters" v-if="hasGuide(guide)">
            <div class="l-grid__col">
              <nuxt-link to="/playbook"><i class="fa fa-check fa-fw"></i> In deinem Playbook</nuxt-link>
            </div>
            <div class="l-grid__col">
              <a href="#" @click="deleteGuide({guide})">
                <i class="fa fa-minus fa-fw"></i>
                Entfernen
              </a>
            </div>
          </div>
        </div>

        <h2 class="brand-purple-text">Guide</h2>
        <h1>{{ guide.title }}</h1>
        <h2 class="h2-subheading" v-if="guide.author">Geschrieben von {{ guide.author.name }}</h2>

        <h2 v-if="guide.lede">Zusammenfassung</h2>
        <h2 class="h1-subheading" v-if="guide.lede">{{ guide.lede }}</h2>
      </header>

      <nuxtent-body :body="guide.body" class="s-article" />
    </article>
    <edit-post :post="guide"/>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import EditPost from '~/components/EditPost'

export default {
  components: { EditPost },

  async asyncData ({ app, route }) {
    const guide = await app.$content('guides').get(route.path)

    return {
      guide
    }
  },

  async created () {
    if (process.browser) {
      await this.$store.dispatch('loadFromLocalStorage')
    }
  },

  methods: {
    ...mapActions(['addGuide', 'deleteGuide'])
  },

  computed: {
    ...mapGetters(['hasGuide'])
  }
}
</script>
