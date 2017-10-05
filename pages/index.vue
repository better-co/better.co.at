<template>
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

    <div class="l-container--b2">
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
  async asyncData ({app}) {
    // let [sections, articles] = await Promise.all([
    //   app.$content('/sections').getAll(),
    //   app.$content('/articles').getOnly(0, 3)
    // ])

    // sections.sort((a, b) => {
    //   if (a.meta.fileName < b.meta.fileName) {
    //     return -1
    //   }

    //   if (a.meta.fileName > b.meta.fileName) {
    //     return 1
    //   }

    //   return 0
    // })
    const sections = []
    const articles = []

    return {
      sections,
      articles
    }
  }
}
</script>

<style lang="scss">
</style>
