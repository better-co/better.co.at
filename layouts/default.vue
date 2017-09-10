<template>
  <div class="">
    <header class="header">
      <div class="l-container brand-blue-bg">
        <div class="l-grid l-grid--1of2 l-grid--gutters">
          <div class="l-grid__col l-grid__col--middle fw-semibold light-blue-text">
            Mo-Fr 08:00–16:00
          </div>
          <div class="l-grid__col l-grid__col--middle text-right fw-semibold">
            <a class="light-blue-text no-decoration" href="tel:+43720116665">
              <i class="fal fa-phone fa-flip-horizontal"></i> +43 720/11 66 65
            </a>&nbsp;
            <a class="light-blue-text no-decoration" href="mailto:get@better.co.at">
              <i class="fal fa-envelope"></i> get@better.co.at
            </a>
          </div>
        </div>
      </div>

      <div class="l-container--lr">
        <div class="l-container--tb main-navigation">
          <div class="l-grid l-grid--fit">
            <div class="l-grid__col l-grid__col--center">
              <logo/>
            </div>
            <div class="l-grid__col l-grid__col--center text-right">
              <div class="l-grid l-grid--right l-grid--gutters">
                <div class="l-grid__col">
                  <a href="mailto:get@better.co.at" class="c-btn c-btn--default">
                    Jetzt starten
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <nuxt/>
  </div>
</template>

<script>
  import Logo from '~/components/Logo'

  export default {
    components: {
      Logo
    }
  }
</script>

<style lang="scss">
  .logo img {
    height: 3rem;
  }
  .main-navigation {
    box-shadow: inset 0px -1px 0px rgba(black, 0.1);
  }
</style>
