<template>
  <div class="page-title">
    <div class="page-title__icon">
      <slot name="icon"></slot>
    </div>

    <slot name="title" class="title"></slot>

    <div class="page-title__subheading h1-subheading">
      <slot name="subheading"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-title {
  padding: 2rem 0;

  &__subheading {
    margin: 1rem 0 0;
  }
  &__icon {
    .fa, .far, .fal {
      font-size: 3rem;
      margin-bottom: 0.5rem;
    }
  }
}
</style>
