<template>
<div>
    <table>
        <tr>
            <th v-on:click="sort('id')">ID</th>
            <th v-on:click="sort('jobName')">Job Name</th>
            <th v-on:click="sort('jobDescription')">Job Description</th>
            <th v-on:click="sort('company')">Company</th>
            <th v-on:click="sort('applyDate')">Applied</th>
            <th v-on:click="sort('status')">Status</th>
            <th v-on:click="sort('country')">Country</th>
            <th v-on:click="sort('city')">City</th>
            <th>Delete</th>
        </tr>

        <tr v-for="application in applications" :key="application.id">
            <td>{{application.id}}</td>
            <td>{{application.jobName}}</td>
            <td>{{application.jobDescription}}</td>
            <td>{{application.company}}</td>
            <td>{{application.applyDate}}</td>
            <td>{{application.status}}</td>
            <td>{{application.country}}</td>
            <td>{{application.city}}</td>
            <td class="clickable" v-on:click="deleteApplication(application.id)">DELETE</td>
        </tr>
    </table>
</div>
</template>

<script>
import axios from 'axios'
import { sortBy } from '../../public/javascript/sort'
export default {
  name: 'ApplicationTable',
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
    this.applications = []
  },
  methods: {

    sort(field){
      sortBy(this.applications,  field)
    },

    pollData(){
      this.polling = setInterval(() => {
        this.getApplications()
      }, 10000)
    },


    deleteApplication(id){
      axios.delete(process.env.VUE_APP_SERVER_URL+'/applications/'+id)
      .then(() => {
        this.getApplications()
      })
      
    },


    getApplications(){
      axios.get(process.env.VUE_APP_SERVER_URL+'/applications')
      .then((res) =>{
        this.applications = res.data
      })
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
  
  width: 90%;
  margin-left:auto;
  margin-right:auto;
  border-collapse: collapse;
  padding: 10px;
}

td, th {
  border: 1px solid #eeeeee;
  padding: 5px
}

tr:nth-child(even) {
  background: #eeeeee
}
</style>