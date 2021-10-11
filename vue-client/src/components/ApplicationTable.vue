<template>
<div>

    <table>
        <tr>
            <th>ID</th>
            <th>Job Name</th>
            <th>Job Description</th>
            <th>Company</th>
            <th>Applied</th>
            <th>Status</th>
            <th>Country</th>
            <th>City</th>
            <th>Delete</th>
        </tr>

        <tr v-for="application in applications" :key="application.id">
            <th>{{application.id}}</th>
            <th>{{application.jobName}}</th>
            <th>{{application.jobDescription}}</th>
            <th>{{application.company}}</th>
            <th>{{application.applyDate}}</th>
            <th>{{application.status}}</th>
            <th>{{application.country}}</th>
            <th>{{application.city}}</th>
        </tr>
    </table>
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
      polling: null,
      columnNames: null,
      applications: null
    }
  },
  created: function(){
    this.getApplications()
    this.pollData()
  },
  beforeUnmount: function(){
    clearInterval(this.polling)
  },
  methods: {
    getApplications(){
      axios.get(process.env.VUE_APP_SERVER_URL+'/applications')
      .then((res) =>{
        this.applications = res.data
      })
    },
    pollData(){
      this.polling = setInterval(() => {
        this.getApplications()
      }, 10000)
    },
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
table {
    width: 100%;
}
</style>