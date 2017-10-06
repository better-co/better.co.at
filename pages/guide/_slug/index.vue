<template>
  <div>
    <div class="l-container">
      <article class="s-article">
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
        <h2 class="h1-subheading" v-if="guide.lede">{{ guide.lede }}</h2>

        <nuxtent-body :body="guide.body" class="s-article" />
      </article>
    </div>

    <edit-post :post="guide"/>
  </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'
import * as types from '~/store/mutation-types'
import localforage from 'localforage'
import EditPost from '~/components/EditPost'

export default {
  components: {EditPost},

  async asyncData ({app, route}) {
    const guide = await app.$content('guides').get(route.path)

    return {
      guide
    }
  },

  async created () {
    if (process.browser) {
      this.$store.commit(types.SET_GUIDES, {
        guides: await localforage.getItem('playbook') || []
      })
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
