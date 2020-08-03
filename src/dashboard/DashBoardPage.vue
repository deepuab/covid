<template>
  <b-container>
    <!-- <span class="dashboard-country-count">
      Covid Affected Indian States : {{ Object.keys(countryData).length }}
    </span> -->
    <b-row>
      <StateCard 
        v-for="(state,index) in countryData"
        :key="index"
        :state-data="state"
        :name="index"
      />
    </b-row>
  </b-container>
</template>

<script>
import { mapActions } from 'vuex';
import StateCard from '../state/StateCard.vue';
export default {
  name: 'DashBoardPage',
  components:{StateCard},
  computed:{
    countryData(){      
      console.log(this.$store.state.covid.indiaData)
      return this.$store.state.covid.indiaData;
    },
    stateStatistics(){
      const states = Object.keys(this.$store.state.covid.indiaData);
          let stateStatistics= {
          active:0,
          confirmed:0,
          deceased:0,
          recovered:0
        };
      states.forEach(state => {   
        const districts = Object.keys(this.$store.state.covid.indiaData[state]['districtData']);
        districts.forEach(district=>{
          const districtData = this.$store.state.covid.indiaData[state]['districtData'][district];
          stateStatistics.active+=districtData.active;
          stateStatistics.confirmed+=districtData.confirmed;
          stateStatistics.deceased+=districtData.deceased;
          stateStatistics.recovered+=districtData.recovered;
        });
      });
      console.log(stateStatistics);
      return stateStatistics;
    },
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
