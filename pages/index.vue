<template>
  <div>
    <div class="l-container--fixed">
      <page-title class="text-center s-default">
        <i class="far fa-ambulance fa-flip-horizontal" slot="icon"></i>
        <h1 slot="title">besser gemeinsam erfolgreich arbeiten.</h1>
        <span slot="subheading">
          Wir helfen deinem IT– und Softwareunternehmen agiler & erfolgreicher zu sein.
        </span>
      </page-title>

      <div class="s-default">
        <h1>
          <i class="far fa-medkit fa-fw" aria-hidden="true"></i> Wo tut es weh?
        </h1>
        <p class="h2-subheading">Hier gehts los. Finde heraus wo der Schuh drückt und wir helfen dir mit vielfach bewährten Rezepten weiter.</p>
      </div>

      <div class="l-container--b2">
        <div class="l-grid l-grid--lg--1of2 l-grid--gutters">
          <div class="l-grid__col" v-for="section in sections" :key="section.title">
            <div class="l-grid l-grid--gutters-wide" >
              <div class="l-grid__col">
                <icon-group :groupClass="section.icon.bg" :iconClass="section.icon.fg">
                  <i class="fal fa-fw" :class="section.icon.top" slot="top"></i>
                  <i class="fal fa-fw" :class="section.icon.bottom" slot="bottom"></i>
                </icon-group>
              </div>

              <div class="l-grid__col l-grid__col--fit s-default">
                <h4>{{ section.title }}</h4>
                <p class="small-lede">
                  {{ section.lede }}
                </p>
                <p class="small-lede">
                  <icon-link :to="section.permalink" icon="fa-angle-right">Mehr</icon-link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="l-container--b2" v-if="articles">
        <div class="s-default l-container--b">
          <h1>
            <i class="far fa-bookmark fa-fw" aria-hidden="true"></i> Unsere neusten Artikel
          </h1>
        </div>
        <div class="l-grid l-grid--md--1of3 l-grid--gutters">
          <div class="l-grid__col l-grid__col--stretch l-grid__col--flex" v-for="article in articles" :key="article.permalink">
            <post-preview :post="article" excerptLength="10"/>
          </div>
        </div>

        <div class="l-container--tb">
          <nuxt-link class="c-btn c-btn--primary c-btn--icon-r c-btn--default" to="/articles">
            Mehr Artikel <i class="fa fa-caret-right"></i>
          </nuxt-link>
        </div>
      </div>
    </div>

    <div class="l-container--tb brand-blue-bg">
      <div class="l-container--fixed s-default">
        <h1 class="text-center light-blue-text">
          Du suchst nach professioneller Unterstützung?
        </h1>
        <p class="h2-subheading text-center light-blue-text">
          Geführte Retrospektiven, Scrum und Agile Consulting & auf dich und dein Unternehmen
          zugeschnittene Workshops.
        </p>
        <p class="text-center">
          <a href="mailto:get@better.co.at" class="c-btn c-btn--lg c-btn--default">
            Kontaktiere uns!
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// import Avatar from '~/components/Avatar'
import PageTitle from '~/components/PageTitle'
import IconGroup from '~/components/IconGroup'
import IconLink from '~/components/IconLink'
import PostPreview from '~/components/PostPreview'
// import image from '~/assets/images/christoph.jpg'

export default {
  components: {
    PageTitle, IconGroup, IconLink, PostPreview
  },
  async asyncData ({ app }) {
    const sections = await app.$content('/sections').getAll()

    sections.sort((a, b) => {
      if (a.meta.fileName < b.meta.fileName) {
        return -1
      }

      if (a.meta.fileName > b.meta.fileName) {
        return 1
      }

      return 0
    })

    return {
      sections,
      articles: null // await app.$content('/articles').getOnly(0, 3)
    }
  }
}
</script>

<style lang="scss">
</style>
