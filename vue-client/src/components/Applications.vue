<template>
<div>
  <form v-on:submit="submitApplication">
    <label for="jobName">Job Name</label><br>
    <input type="text" v-model="jobName"/><br><br>

    <label for="jobDescription">Job Description</label><br>
    <textarea cols="50" rows="6" type="text" v-model="jobDescription"/><br><br>

    <label for="company">Company</label><br>
    <input type="text" v-model="company"/><br><br>

    <label for="country">Country</label><br>
    <country-select v-model="country" :country="country" topCountry="CA"></country-select><br><br>

    <label >City</label><br>
    <input type="text" v-model="city"/><br><br>

    <input type="submit" value="submit"/>
  </form>
{{applications}}
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
      axios.post(process.env.VUE_APP_SERVER_URL+'/applications', {
        jobName: this.jobName,
        jobDescription: this.jobDescription,
        company: this.company, 
        country: this.country,
        city: this.city
      } )
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err.response.data.message)
      })
      console.log(this.jobName)
    } 
  }
}
</script>


<style scoped>

</style>