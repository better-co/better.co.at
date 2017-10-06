<template>
  <div class="light-orange-bg">
    <div class="l-container--fixed">
      <div class="l-grid l-grid--gutters">
        <div class="l-grid__col l-grid__col--middle l-grid__col--fit">
          <p class="dark-orange-text">
            Hast du einen Fehler entdeckt?
          </p>
        </div>
        <div class="l-grid__col l-grid__col--middle">
          <post-edit-button :post="post"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PostEditButton from '~/components/PostEditButton'

export default {
  props: ['post'],

  components: {
    PostEditButton
  }
}
</script>
