<template>
  <div id="app"> 
    <b-container>
      <b-row>
        <b-col class="country-title">
          India Covid Status
        </b-col>
      </b-row>
      <b-row>
        <b-col class="country-label">
          <span class="country-category_label ">Active </span><span class="country-count_label text-warning">{{ this.$store.state.covid.countryData.active | number-formatter }}</span>
        </b-col>
        <b-col class="country-label">
          <span class="country-category_label ">Deaths </span><span class="country-count_label text-danger">{{ this.$store.state.covid.countryData.deceased | number-formatter }}</span>
        </b-col> 
        <b-col class="country-label">
          <span class="country-category_label ">Confirmed </span><span class="country-count_label text-info">{{ this.$store.state.covid.countryData.confirmed | number-formatter }}</span>
        </b-col>     
        <b-col class="country-label">
          <span class="country-category_label ">Recovered </span><span class="country-count_label text-success">{{ this.$store.state.covid.countryData.recovered | number-formatter }}</span>
        </b-col>     
      </b-row>
    </b-container>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style >
body{
  background: linear-gradient(to bottom,#555, #999);
  background-attachment: fixed;
}
</style>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin-top: 1em;
}
header {
  background-color: #999;
  width: 1184px;
  margin: 0 auto;
}

.country-label{
  text-align: center;  
}
.country-title{
  text-align: center;
  font-size: 3em;
  color: honeydew
}
.country-count_label{
  font-size: 2em;
}
.country-category_label{
  color: white;
  font-size: 1.2em;;
}
</style>
