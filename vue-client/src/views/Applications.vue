<template>
  <div class="applications">
    <ApplicationTable/>
  </div>
</template>

<script>
// @ is an alias to /src
//import Home from '@/components/Home.vue'
import ApplicationTable from '../components/ApplicationTable.vue'

export default {
  name: 'ApplicationsView',
  components: {
    ApplicationTable
  }
}
</script>
