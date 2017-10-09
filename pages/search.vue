<template>
  <div class="l-container--tb">
    <div class="l-container--fixed">
      <div class="l-grid">
        <input type="text" v-focus v-model="query" placeholder="Suchen…" class="l-grid__col l-grid__col--fit c-form-control c-form-control--block" />
      </div>
    </div>
    <ais-index :app-id="appId" :api-key="searchKey" index-name="guides" :query="query" :auto-search="false">
      <div class="l-container--fixed s-default">
        <h2 class="brand-purple-text">Guides</h2>
        <ais-results>
          <template scope="{ result }">
            <div class="l-container--b">
              <post-preview :post="result" :showDate="false"/>
            </div>
          </template>
        </ais-results>
        <ais-no-results>
          <template scope="{ query }">
            Keine Ergebnisse
          </template>
        </ais-no-results>
      </div>
    </ais-index>
    <ais-index :app-id="appId" :api-key="searchKey" index-name="kb" :query="query" :auto-search="false">
      <div class="l-container--fixed s-default">
        <h2 class="brand-orange-text">Knowledge Base</h2>
        <ais-results>
          <template scope="{ result }">
            <div class="l-container--b">
              <post-preview :post="result" :showDate="false"/>
            </div>
          </template>
        </ais-results>
        <ais-no-results>
          <template scope="{ query }">
            Keine Ergebnisse
          </template>
        </ais-no-results>
      </div>
    </ais-index>
  </div>
</template>

<script>
import PostPreview from '~/components/PostPreview'

export default {
  components: {
    PostPreview
  },

  async asyncData () {
    return {
      appId: process.env.ALGOLIA_APP_ID,
      searchKey: process.env.ALGOLIA_SEARCH_KEY
    }
  },

  data () {
    return {
      query: ''
    }
  }
}
</script>
