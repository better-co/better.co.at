<template>
  <div class="l-container">
    <div class="s-article l-container--b2">
      <h2 class="brand-pink-text"><i class="far fa-podcast brand-pink-text"></i> bettercast / Folge {{ episode.episodeNumber }}</h2>
      <h1>{{ episode.title }}</h1>

      <nuxtent-body :body="episode.body" class="s-article"></nuxtent-body>

      <div class="player">
        <audio :src="episode.enclosure.url" controls preload="none"></audio>
      </div>

      <div>
        <a :href="episode.enclosure.url" :download="download(episode)" class="c-btn c-btn--default">
          <i class="fa fa-cloud-download"></i>
          Download
        </a>
        <a href="/bettercast.xml" class="c-btn c-btn--default">
          <i class="fa fa-rss"></i>
          RSS Feed
        </a>
        <!-- <a href="" class="c-btn c-btn--default">
          <i class="fab fa-itunes-note"></i>
          Auf iTunes abonnieren
        </a> -->
      </div>

      <h2>Mit folgenden Personen</h2>

      <div v-for="person in episode.appearances" :key="person.name">
        <h3>{{ person.name }}</h3>
        <div class="l-grid l-grid--gutters">
          <div class="l-grid__col">
            <div v-if="person.role == 'host'">Host</div>
            <div v-if="person.role == 'guest'">Gast</div>
          </div>
          <div class="l-grid__col" v-if="person.twitter">
            <a :href="twitterUrl(person.twitter)">
              <i class="fab fa-fw fa-twitter"></i>
              {{ person.twitter }}
            </a>
          </div>
          <div class="l-grid__col" v-if="person.facebook">
            <a :href="person.facebook">
              <i class="fab fa-fw fa-facebook"></i>
              Facebook
            </a>
          </div>
          <div class="l-grid__col" v-if="person.website">
            <a :href="person.website">
              <i class="fa fa-fw fa-external-link-square"></i>
              Website
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import excerptHtml from 'excerpt-html'

export default {
  async asyncData ({ app, route }) {
    const episode = await app.$content('bettercast').get(route.path)

    return {
      episode
    }
  },

  methods: {
    twitterUrl (username) {
      return `https://twitter.com/${username}`
    },

    download (episode) {
      return `bettercast-S${episode.season}x${episode.episodeNumber}.mp3`
    }
  },

  head () {
    const description = this.episode.lede || excerptHtml(this.episode.body)

    return {
      title: `${this.episode.title} — better.co.at`,
      meta: [
        { hid: 'description', name: 'description', content: description }
      ]
    }
  }
}
</script>
