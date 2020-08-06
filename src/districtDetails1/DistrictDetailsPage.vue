<template>
  <b-container>
    <HeaderStatus
      :data="stateData"
      :title="stateData.name"
    />
    <b-row class="district-search_input">
      <b-form-input
        v-model="searchKey"    
        placeholder="Search District"        
      />
    </b-row>
    <b-row>
      <b-col>
        <NoMatches
          :visible="stateData.districtData.length==0"
          message="No district data found!"
        />
      </b-col>
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
import NoMatches from '../common/NoMatches.vue';
export default {
    name:'DistrictDetailsPage',
    components:{CoronaDetailsCard,HeaderStatus,NoMatches},
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
.district-search_input{
  margin:0 5px 0 5px;
}

</style>