<template>
<div>
  <form v-on:submit="submitApplication" id="application_form"></form>

  <div class="form-input">
    <label for="jobName">Job Name</label><br>
    <input class="input-box" type="text" v-model="jobName"/><br><br>
  </div>

  <div class="form-input">
    <label for="jobDescription">Job Description</label><br>
    <textarea class="input-box" cols="25" rows="3" type="text" v-model="jobDescription"/><br><br>
  </div>

  <div class="form-input">
    <label for="company">Company</label><br>
    <input class="input-box" type="text" v-model="company"/><br><br>
  </div>

  <div class="form-input">
    <label for="country">Country</label><br>
    <country-select class="input-box" v-model="country" :country="country" topCountry="CA" :countryName="true"></country-select><br><br>
  </div>

  <div class="form-input">
    <label >City</label><br>
    <input class="input-box" type="text" v-model="city"/><br><br>
  </div>

  <div class="form-input">  
    <button class=" submit input-box" type="submit" form="application_form">Submit</button>
  </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ApplicationForm',
  components: {
  },
  props: {
  },
  data: function(){
    return {

      jobName: "",
      jobDescription: "",
      company: "",
      country: "",
      city: "",

    }
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
        this.getApplications()
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
.form-input {
  padding: 15px;
}

.input-box {
  width: 25%
}

.submit {
  height: 50px
}





</style>