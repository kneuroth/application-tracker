<template>
<div>
  <table></table>
    {{ applications }}
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Applications',
  props: {
  },
  data: function(){
    return {
      applications: []
    }
  },
  created: function(){
    axios.get(process.env.VUE_APP_SERVER_URL+'/applications')
    .then((res) =>{
      this.applications = res.data
    }
    )
  }
}
</script>


<style scoped>

</style>