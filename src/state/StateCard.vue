<template>
  <b-card         
    :title="name"
    tag="article"    
    class="mx-auto my-3 state-card"
  >
    <template v-slot:footer>
      <em>        
        <span><b-button
          pill
          variant="warning"
          class="state-card_button"
        >Active Cases: {{ stateStatistics.active }}</b-button></span><br>
        <span><b-button
          pill
          variant="danger"
          class="state-card_button"
        >Deaths: {{ stateStatistics.deceased }}</b-button></span><br>
        <span><b-button
          pill
          variant="info"
          class="state-card_button"
        >Confirmed: {{ stateStatistics.confirmed }}</b-button></span><br>
        <span><b-button
          pill
          variant="success"
          class="state-card_button"
        >Recovered: {{ stateStatistics.recovered }}</b-button></span>
      </em>
    </template>
    <!-- <b-card-text>
 
    </b-card-text> -->
  </b-card>    
</template>

<script>
export default {
    name:'StateCard',
    props:['stateData','name'],
    computed:{
        stateStatistics(){
          let stateStatistics= {
            districtCount:0,
          active:0,
          confirmed:0,
          deceased:0,
          recovered:0
        };
        const districts = Object.keys(this.stateData['districtData']);
        stateStatistics.districtCount=districts.length;
        districts.forEach(district=>{
          const districtData = this.stateData['districtData'][district];
          stateStatistics.active+=districtData.active;
          stateStatistics.confirmed+=districtData.confirmed;
          stateStatistics.deceased+=districtData.deceased;
          stateStatistics.recovered+=districtData.recovered;
        });
      return stateStatistics;
        }
    }
}
</script>

<style scoped>
.card-title{
    font-size: 13px;
    font-weight: bold;
}
.state-card{
    max-width: 15rem; 
    width:20rem; 
    height:15rem;
    text-align: center;
    cursor: pointer;
}
.state-card_button{
    min-width: 13em;
    max-width: 13rem;
}

</style>