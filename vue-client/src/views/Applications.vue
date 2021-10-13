<template>
  <div class="applications">
    <ApplicationForm/>
    <ApplicationTable/>
  </div>
</template>

<script>
// @ is an alias to /src
//import Home from '@/components/Home.vue'
import ApplicationTable from '../components/ApplicationTable.vue'
import ApplicationForm from '../components/ApplicationForm.vue'
export default {
  name: 'ApplicationsView',
  components: {
    ApplicationTable,
    ApplicationForm
  }
}
</script>
