<template>
  <div class="playbook">
    <div class="l-container--fixed">
      <PageTitle class="text-center">
        <h1 slot="title"><i class="far fa-book"></i> Dein Playbook</h1>
      </PageTitle>

      <div class="l-container--tb">
        <div class="l-grid l-grid--right">
          <div class="l-grid__col l-grid__col--fit">
            <h2>Guides</h2>
          </div>
          <div class="l-grid__col l-grid__col--middle" v-if="guides.length > 0">
            <button type="button" class="c-btn c-btn--default" @click="reset()">
              <i class="fa fa-undo fa-fw"></i>
              Playbook zurücksetzen
            </button>
          </div>
        </div>
      </div>

      <div v-for="post in guides" :key="post.permalink" class="l-container--b">
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
              Entfernen
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PostPreview from '~/components/PostPreview'
import PageTitle from '~/components/PageTitle'
import { mapState, mapActions } from 'vuex'
import * as types from '~/store/mutation-types'
import localforage from 'localforage'

export default {
  components: {PostPreview, PageTitle},

  async created () {
    if (process.browser) {
      console.log(await localforage.getItem('playbook'))
      this.$store.commit(types.SET_GUIDES, {
        guides: await localforage.getItem('playbook') || []
      })
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
