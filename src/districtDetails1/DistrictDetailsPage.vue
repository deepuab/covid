<template>
  <b-container>
    <HeaderStatus
      :data="stateData"
      :title="stateData.name"
    />
    <b-row>
      <CoronaDetailsCard 
        v-for="(district,index) in stateData.districtData"
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
import HeaderStatus from '../common/HeaderStatus.vue';
export default {
    name:'DistrictDetailsPage',
    components:{CoronaDetailsCard,HeaderStatus},
        computed:{
        stateData(){
          const { stateCode } = this.$route.params;
          const matchedState = this.$store.state.covid.statesData.find((state) => state.stateCode === stateCode);
          return matchedState;
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