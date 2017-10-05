<template>
  <div class="block-link">
    <div class="block-link__content">
      <slot/>
    </div>
    <nuxt-link :to="to" class="block-link__link">
      Weiter…
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['to']
}
</script>

<style lang="scss" scoped>
@import "assets/scss/colors";

.block-link {
  position: relative;
  display: flex;
  border-radius: 0.25rem;
  transition: all 200ms;
  box-shadow: 0px 0px 0px 1px lighten(desaturate(map-get($brand, "blue"), 50%), 30%);

  &:hover {
    box-shadow: 0px 0px 0px 4px map-get($brand, "blue");
  }

  &__content {
    display: flex;
    justify-content: stretch;
    align-content: space-between;
    padding: 1rem;
  }
  &__link {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
  }
}
</style>

