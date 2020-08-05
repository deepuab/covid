<template>
  <b-container>
    <HeaderStatus
      :data="this.$store.state.covid.countryData"
      title="India"
    />
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
import HeaderStatus from '../common/HeaderStatus.vue';
export default {
  name: 'DashBoardPage',
  components:{CoronaDetailsCard,HeaderStatus},
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
