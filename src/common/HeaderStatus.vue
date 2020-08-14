<template>
  <b-container>
    <b-row>
      <b-col class="header-title">
        {{ title }} Covid Status
      </b-col>
    </b-row>
    <b-row>
      <b-col class="header-label active-count">
        <span class="header-category_label ">Active </span>
        <span class="header-count_label text-warning">{{ data.active | number-formatter }}</span>
      </b-col>
      <b-col class="header-label deceased-count">
        <span class="header-category_label ">Deaths </span>
        <span class="header-count_label text-danger">{{ data.deceased | number-formatter }}</span>
      </b-col>
      <b-col class="header-label recovered-count">
        <span class="header-category_label ">Recovered </span>
        <span class="header-count_label text-success">{{ data.recovered | number-formatter }}</span>
      </b-col>
      <b-col class="header-label confirmed-count">
        <span class="header-category_label ">Confirmed </span>
        <span class="header-count_label text-info">{{ data.confirmed | number-formatter }}</span>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  name: 'HeaderStatus',
  props: ['data', 'title'],

};
</script>
<style scoped>
.header-label{
  text-align: center;
}
.header-title{
  text-align: center;
  font-size: 3em;
  color: honeydew
}
.header-count_label{
  font-size: 1.8em;
}
.header-category_label{
  color: white;
  font-size: 1.2em;;
}

</style>
