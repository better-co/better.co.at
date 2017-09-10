<template>
  <div class="avatar">
    <div class="avatar__img" :style="styleProperties"></div>
  </div>
</template>

<script>
  export default {
    props: ['src'],
    computed: {
      styleProperties () {
        return {
          backgroundImage: `url(${this.src})`
        }
      }
    }
  }
</script>

<style lang="scss">
  .avatar {
    position: relative;
    overflow: hidden;
    height: 3rem;
    width: 3rem;

    &__image {
      position: relative;
      border-radius: 9999px;
      background-repeat: no-repeat;
      background-size: cover;
      padding-top: 100%;
    }
  }
</style>
