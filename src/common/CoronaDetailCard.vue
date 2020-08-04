<template>
  <b-card         
    :title="data.name"
    tag="article"    
    class="mx-auto my-3 corona-card"
    @click="navigate()"
  >
    <template v-slot:footer>
      <em>        
        <span><b-button
          pill
          variant="warning"
          class="corona-card_button"
        >Active Cases: {{ data.active.toLocaleString(undefined) }}</b-button></span><br>
        <span><b-button
          pill
          variant="danger"
          class="corona-card_button"
        >Deaths: {{ data.deceased.toLocaleString(undefined) }}</b-button></span><br>
        <span><b-button
          pill
          variant="info"
          class="corona-card_button"
        >Confirmed: {{ data.confirmed.toLocaleString(undefined) }}</b-button></span><br>
        <span><b-button
          pill
          variant="success"
          class="corona-card_button"
        >Recovered: {{ data.recovered.toLocaleString(undefined) }}</b-button></span>
      </em>
    </template>
  </b-card>
</template>

<script>
export default {
    name:'CoronaDetailsCard',
    props:['data','title'],
    methods:{
      navigate(){
        if(this.data.stateCode){
          this.$router.push(`/states/${this.data.stateCode}`);
        }
      }
    }
}
</script>

<style scoped>

.card-title{
    font-size: 13px;
    font-weight: bold;
}
.corona-card{
    max-width: 15rem; 
    width:20rem; 
    height:15rem;
    text-align: center;
    cursor: pointer;
}
.corona-card_button{
    min-width: 13em;
    max-width: 13rem;
}

</style>