<template>
  <b-container>  
    <span>Active:{{ this.$store.state.covid.countryData.active }}</span><br>
    <span>Confirmed:{{ this.$store.state.covid.countryData.confirmed }}</span><br>
    <span>Deaths:{{ this.$store.state.covid.countryData.deceased }}</span><br>
    <span>Revovered:{{ this.$store.state.covid.countryData.recovered }}</span><br>
    <b-row>
      <CoronaDetailsCard 
        v-for="(state,index) in statesData"
        :key="index"
        :data="state"
        :name="state.name"
      />
    </b-row>
  </b-container>
</template>

<script>
import { mapActions } from 'vuex';
import CoronaDetailsCard from '../common/CoronaDetailCard.vue';
export default {
  name: 'DashBoardPage',
  components:{CoronaDetailsCard},
  computed:{
    statesData(){      
      return this.$store.state.covid.statesData;
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
