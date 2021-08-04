<template>
<div>
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
    axios.get('http://localhost:8080/applications/')
    .then((res) =>{
      this.applications = res.data
    }
    )
  }
}
</script>


<style scoped>

</style>