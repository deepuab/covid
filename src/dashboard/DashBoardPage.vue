<template>
  <b-container>
    <span class="dashboard-country-count">
      Covid Affected Indian States : {{ Object.keys(countryData).length }}
    </span>
    <b-row>
      <b-card
        v-for="(state,index) in Object.keys(countryData)"
        :key="index"
        :title="state"
        tag="article"
        style="max-width: 20rem; width:20rem; height:15rem;"
        class="mb-2">
        <b-card-text>
          District Count: {{ Object.keys(countryData[state].districtData).length }}
        </b-card-text>       
      </b-card> 
    </b-row>
  </b-container>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'DashBoardPage',
  computed:{
    countryData(){      
      console.log(Object.keys(this.$store.state.covid.indiaData) );
      return this.$store.state.covid.indiaData;
      console.log(Object.keys(this.$store.state.covid.indiaData) );

    }
  },
  created(){
    this.getCovidData();
  },

   methods: {
     ...mapActions('covid', ['getCovidData']),
   }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dashboard{
  text-align: center;
  padding: 5px;
}
.dashboard-country-count{
  color: white;
  font-size: 18px;
  text-align: center;
}

</style>
