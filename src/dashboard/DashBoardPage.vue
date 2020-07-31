<template>
  <div class="dashboard">
    <span class="dashboard-country-count">
      Covid Affected Countries : {{ countryData.length }}
    </span>    
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'DashBoardPage',
  computed:{
    countryData(){
      console.log(this.$store.state)
      return this.$store.state.covid.countryData;
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
