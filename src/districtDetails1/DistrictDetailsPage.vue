<template>
  <b-container>
    <HeaderStatus
      :data="stateData"
      :title="stateData.name"
    />
    <b-row>
      <b-form-input
        v-model="searchKey"    
        placeholder="Search"
      />
    </b-row>
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
        data: function () {
            return {
                searchKey: '',
                matchedState:{}
            }
        }, 
        computed:{
        stateData(){
          let state = JSON.parse(JSON.stringify(this.matchedState));    
          const filteredDistricts= this.matchedState.districtData.filter(district => {
            return district.name.toUpperCase().startsWith(this.searchKey.toUpperCase())
          });  
          state.districtData =filteredDistricts;
          return state;
        }
    },
    created(){
    window.scrollTo(0,0); 
    const { stateCode } = this.$route.params;
    const matchedState = this.$store.state.covid.statesData.find((state) => state.stateCode === stateCode); 
    this.matchedState=matchedState;
  },
  
   methods: {
     ...mapActions('covid', ['getCovidData']),
   }
}
</script>

<style scoped>

</style>