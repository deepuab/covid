<template>
  <b-container>
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
