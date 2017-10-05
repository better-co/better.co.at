<template>
  <span class="relative-date">{{ relativeDate }}</span>
</template>

<script>
import * as moment from 'moment'
moment.locale('de')

export default {
  props: ['date'],
  data () {
    return {
      relativeDate: moment(this.date).fromNow()
    }
  }
}
</script>
