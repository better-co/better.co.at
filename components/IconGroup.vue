<template>
  <div class="icon-group" :class="groupClass">
    <div class="icon-group__icon icon-group__icon--top" :class="iconClass">
      <slot name="top" aria-hidden="true"></slot>
    </div>
    <div class="icon-group__icon icon-group__icon--bottom" :class="iconClass">
      <slot name="bottom" aria-hidden="true"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'groupClass',
    'iconClass'
  ]
}
</script>

<style lang="scss" scoped>
.icon-group {
  position: relative;
  width: 8rem;
  height: 8rem;
  border-radius: 8rem;

  &__icon {
    font-size: 3rem;
  }
  &__icon--top {
    position: absolute;
    top: 1.75rem;
    right: 0.5rem;
  }
  &__icon--bottom {
    position: absolute;
    bottom: 1.75rem;
    left: 0.5rem;
  }
}
</style>
