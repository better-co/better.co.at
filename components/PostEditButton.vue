<template>
  <a :href="githubUrl" target="_blank" class="c-btn c-btn--default c-btn--icon-r">
    <i class="fab fa-github"></i>
    Bearbeite diesen Inhalt auf Github
    <i class="fa fa-angle-right"></i>
  </a>
</template>

<script>
export default {
  props: ['post'],
  data () {
    return {
      repo: 'github.com/better-co/better.co.at'
    }
  },
  computed: {
    githubUrl () {
      const meta = this.post.meta
      return `https://${this.repo}/edit/master/content/${meta.dirName}/${meta.fileName}`
    }
  }
}
</script>
