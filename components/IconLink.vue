<template>
  <nuxt-link :to="to" class="icon-link">
    <slot></slot>
    <i class="far fa-fw" :class="icon" aria-hidden="true"></i>
  </nuxt-link>
</template>

<script>
export default {
  props: ['to', 'icon']
}
</script>

<style lang="scss" scoped>

</style>
