<template>
  <b-container>
    <HeaderStatus
      :data="this.$store.state.covid.countryData"
      title="India"
    />
    <b-row>
      <b-form-input
        v-model="searchKey"    
        placeholder="Search"
        class="mx-auto"
      />
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
export default {
  name: 'DashBoardPage',
  components:{CoronaDetailsCard,HeaderStatus},
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

</style>
