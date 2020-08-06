<template>
  <b-container>
    <b-col>
      <HeaderStatus
        :data="this.$store.state.covid.countryData"
        title="India"
      />
    </b-col>
    <b-row class="dashboard-search_input">
      <b-form-input
        v-model="searchKey"    
        placeholder="Search States"               
      />
    </b-row>
    <b-row>
      <b-col>
        <NoMatches
          :visible="statesData.length==0"
          message="No state data found!"
        />
      </b-col>
    </b-row>
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
import NoMatches from '../common/NoMatches.vue';
export default {
  name: 'DashBoardPage',
  components:{CoronaDetailsCard,HeaderStatus, NoMatches},
    data: function () {
            return {
                searchKey: '',
                filteredStates:[]
            }
        }, 
  computed:{
    statesData(){  
      return this.filteredStates.filter(state => {
        return state.name.toUpperCase().startsWith(this.searchKey.toUpperCase())
      });      
    },
  },
  created(){
    this.getCovidData().then(()=>{
      this.filteredStates=this.$store.state.covid.statesData;
    });
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
.dashboard-search_input{
    margin:0 5px 0 5px;
}

</style>
