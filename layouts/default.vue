<template>
  <div class="body">
    <header class="header">
      <div class="l-container" :class="headerCssClass">
        <div class="l-grid l-grid--1of2 l-grid--gutters">
          <div class="l-grid__col l-grid__col--middle fw-semibold light-blue-text">
            Mo-Fr 08:00–16:00
          </div>
          <div class="l-grid__col l-grid__col--middle text-right fw-semibold">
            <a class="light-blue-text no-decoration" href="tel:+43720116665">
              <i class="fa fa-phone fa-flip-horizontal"></i> +43 720/11 66 65
            </a>&nbsp;
            <a class="light-blue-text no-decoration" href="mailto:get@better.co.at">
              <i class="fa fa-envelope"></i> get@better.co.at
            </a>
          </div>
        </div>
      </div>

      <div class="l-container--lr">
        <div class="main-navigation">
          <div class="">
            <div class="l-grid l-grid--gutters">
              <div class="l-grid__col l-grid__col--center">
                <Logo/>
              </div>

              <div class="l-grid__col l-grid__col--middle l-grid__col--fit">
                <div class="l-grid l-grid--fit l-grid--lg--reset l-grid--gutters">
                  <div class="l-grid__col">
                    <nuxt-link class="c-nav-link" to="/articles">
                      <i class="far fa-lightbulb" aria-hidden="true"></i> Artikel
                    </nuxt-link>
                  </div>
                  <div class="l-grid__col">
                    <nuxt-link class="c-nav-link" to="/bettercast">
                      <i class="far fa-podcast" aria-hidden="true"></i>
                      Podcast
                    </nuxt-link>
                  </div>
                  <div class="l-grid__col" v-if="playbookCount > 0">
                    <nuxt-link class="c-nav-link" to="/playbook">
                      <i class="far fa-book" aria-hidden="true"></i>
                      Playbook ({{ playbookCount }})
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <main class="main">
      <nuxt/>
    </main>

    <SiteFooter/>
  </div>
</template>

<script>
import Logo from '~/components/Logo'
import SiteFooter from '~/components/SiteFooter'
import localforage from 'localforage'
import * as types from '~/store/mutation-types'

export default {
  components: {
    Logo, SiteFooter
  },

  computed: {
    headerCssClass () {
      const colors = [
        'brand-blue-bg',
        'brand-pink-bg',
        'brand-purple-bg'
      ]

      return colors[Math.floor(Math.random() * colors.length)]
    },

    playbookCount () {
      return this.$store.getters.count
    }
  },

  async created () {
    if (process.browser) {
      this.$store.commit(types.SET_GUIDES, {
        guides: await localforage.getItem('playbook') || []
      })
    }
  }
}
</script>

<style lang="scss">
  .logo {
    padding: 0.5rem 0;
  }
  .logo img {
    height: 3rem;
  }
  .main-navigation {
    box-shadow: inset 0px -1px 0px rgba(black, 0.1);
  }
  .body {
    background: white;
  }
</style>
