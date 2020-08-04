<template>
  <b-container>
    <b-row :v-if="this.$store.state.covid.statesData.length">
      <CoronaDetailsCard 
        v-for="(district,index) in districtsData"
        :key="index"
        :data="district"
        :name="district.name"
      />
    </b-row>
  </b-container>
</template>

<script>
import { mapActions } from 'vuex';
import CoronaDetailsCard from '../common/CoronaDetailCard.vue';
export default {
    name:'DistrictDetailsPage',
    components:{CoronaDetailsCard},
        computed:{
        districtsData(){
          const { stateCode } = this.$route.params;
          const matchedState = this.$store.state.covid.statesData.find((state) => state.stateCode === stateCode);
          return matchedState.districtData;
          }
    },
    created(){
    window.scrollTo(0,0);
  },
  
   methods: {
     ...mapActions('covid', ['getCovidData']),
   }
}
</script>

<style scoped>

</style>