<template>
  <div class="section">
    <div class="l-container section__header" :class="section.view.colors.background">
      <div class="l-container--fixed">
        <div class="l-grid l-grid--centered">
          <div class="l-grid__col">
            <icon-group :groupClass="section.icon.bg" :iconClass="section.icon.fg">
              <i class="fal fa-fw" :class="section.icon.top" slot="top"></i>
              <i class="fal fa-fw" :class="section.icon.bottom" slot="bottom"></i>
            </icon-group>
          </div>
        </div>
        <div class="s-article text-center">
          <h1 class="section-header__title" :class="section.view.colors.text">
            {{ section.title }}
          </h1>
          <p class="section-header__subtitle h1-subheading" :class="section.view.colors.text">
            {{ section.lede }}
          </p>
        </div>
        <!-- <PageTitle class="text-center">
          <h1 slot="title" :class="section.view.colors.text">{{ section.title }}</h1>
          <span slot="subheading" :class="section.view.colors.text">{{ section.lede }}</span>
        </PageTitle> -->
      </div>
    </div>

    <div class="l-container--fixed l-container--tb" v-if="section.body">
      <div class="s-default">
        <nuxtent-body :body="section.body"/>
      </div>
    </div>

    <div class="l-container--tb l-container--fixed s-default" v-if="guides">
      <div class="l-container--tb">
        <h2><i class="far fa-tasks fa-fw" aria-hidden="true"></i> Guides</h2>
      </div>
      <div v-for="post in guides" :key="post.permalink" class="section__guides">
        <post-preview :post="post" :showDate="false"/>
      </div>
    </div>

    <div class="l-container--tb l-container--fixed s-default" v-if="kb">
      <div class="l-container--tb">
        <h2><i class="far fa-book fa-fw" aria-hidden="true"></i> Knowledge Base</h2>
      </div>
      <div v-for="post in kb" :key="post.permalink" class="section__guides">
        <post-preview :post="post" :showDate="false"/>
      </div>
    </div>

    <edit-post :post="section" />
  </div>
</template>

<script>
import PageTitle from '~/components/PageTitle'
import IconGroup from '~/components/IconGroup'
import IconLink from '~/components/IconLink'
import PostPreview from '~/components/PostPreview'
import EditPost from '~/components/EditPost'

export default {
  components: {
    PageTitle, IconGroup, IconLink, PostPreview, EditPost
  },

  async asyncData ({app, route}) {
    const section = await app.$content('sections').get(route.path)
    console.log(section)

    const guides = section.guides
      ? await Promise.all(section.guides.map((slug) => {
        return app.$content('guides').get(`guide/${slug}`)
      }))
      : null

    const kb = section.kb
      ? await Promise.all(section.kb.map((slug) => {
        return app.$content('kb').get(`kb/${slug}`)
      }))
      : null

    return {
      section, guides, kb
    }
  }
}
</script>

<style lang="scss" scoped>
.section__header {
  padding-top: 2rem;
  padding-bottom: 2rem;

  &__title {
    text-shadow: 0px 0px 16px rgba(black, 0.15);
  }
  &__subtitle {
    opacity: 0.9;
    text-shadow: 0px 0px 16px rgba(black, 0.15);
  }
}
.section__guides {
  > * + * {
    margin-top: 1rem;
  }
}
</style>
