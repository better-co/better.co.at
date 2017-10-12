<template>
  <div class="playbook-controls">
    <div class="l-container--fixed">
      <div class="l-grid l-grid--gutters l-grid--right">
        <div class="l-grid__col l-grid__col--middle">
          <button type="button" class="c-btn c-btn--default" @click="addGuide({guide})" v-if="!hasGuide(guide)">
            <i class="fa fa-plus-circle fa-fw"></i> Zum Playbook hinzufügen
          </button>
          <div class="l-grid l-grid--gutters" v-if="hasGuide(guide)">
            <div class="l-grid__col">
              <nuxt-link to="/playbook"><i class="fa fa-check fa-fw"></i> In deinem Playbook</nuxt-link>
            </div>
            <div class="l-grid__col">
              <a href="#" @click.prevent="deleteGuide({guide})">
                <i class="fa fa-minus fa-fw"></i>
                Entfernen
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  props: ['guide'],

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
