<template>
  <div class="s-article l-container--b2">
    <h1>Datenschutzerklärung</h1>

    <div v-html="policy"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      policy: `
        <a href="https://www.iubenda.com/privacy-policy/77449137" class="iubenda-white iubenda-embed " title="Privacy Policy">Privacy Policy</a> <script type="text/javascript">(function (w,d) {var loader = function () {var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; s.src="https://cdn.iubenda.com/iubenda.js"; tag.parentNode.insertBefore(s,tag);}; if(w.addEventListener){w.addEventListener("load", loader, false);}else if(w.attachEvent){w.attachEvent("onload", loader);}else{w.onload = loader;}})(window, document);</script>
      `
    }
  }
}
</script>
