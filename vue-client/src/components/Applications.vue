<template>
<div>
  <form v-on:submit="submitApplication">
    <label for="jobName">Job Name</label><br>
    <input type="text" id="jobName" v-model="jobName"/><br><br>

    <label for="jobDescription">Job Description</label><br>
    <textarea cols="50" rows="6" type="text" id="jobDescription" v-model="jobDescription"/><br><br>

    <label for="company">Company</label><br>
    <input type="text" id="company" v-model="company"/><br><br>

    <label for="country">Country</label><br>
    <country-select v-model="country" :country="country" topCountry="CA" id="country"></country-select><br><br>

    <label for="city">City</label><br>
    <input type="text" id="city" v-model="city"/><br><br>

    <input type="submit" value="submit"/>
  </form>

</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Applications',
  components: {
  },
  props: {
  },
  data: function(){
    return {
      applications: [],
      jobName: "",
      jobDescription: "",
      company: "",
      country: "",
      city: ""
    }
  },
  created: function(){
    axios.get(process.env.VUE_APP_SERVER_URL+'/applications')
    .then((res) =>{
      this.applications = res.data
    }
    )
  },
  methods: {
    submitApplication(){
      console.log(this.jobName)
    } 
  }
}
</script>


<style scoped>

</style>