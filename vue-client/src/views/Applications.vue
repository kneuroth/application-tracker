<template>
  <div class="applications">
    <Applications applications="[1, 2, 3]"/>
  </div>
</template>

<script>
// @ is an alias to /src
//import Home from '@/components/Home.vue'
import Applications from '../components/Applications.vue'

export default {
  name: 'ApplicationsView',
  components: {
    Applications
  }
}
</script>
