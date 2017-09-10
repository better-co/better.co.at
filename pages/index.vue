<template>
  <div>
    <div class="hero-unit">
      <div class="l-container">
        <div class="l-grid l-grid--sm--full l-grid--lg--1of2">
          <div class="l-grid__col">
            <h1 class="brand-blue-text">Besser gemeinsam erfolgreich arbeiten</h1>
          </div>
          <div class="l-grid__col">
            <!-- <Avatar :src="image"/> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // import Avatar from '~/components/Avatar'
  // import image from '~/assets/images/christoph.jpg'

  export default {
    components: {
      // Avatar
    },
    async asyncData () {
      return {
        // image
      }
    }
  }
</script>

<style lang="scss">
  .hero-unit {
    h1 {
      font-size: 2rem;
      font-weight: 600;
    }
  }
</style>
