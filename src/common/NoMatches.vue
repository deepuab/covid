<template>
  <b-alert
    class="no-macth_alert"
    variant="warning"
    :show="visible"
  >
    {{ message }}
  </b-alert>
</template>

<script>
export default {
  name: 'NoMatches',
  props: ['visible', 'message'],

};
</script>

<style scoped>
.no-macth_alert{
  margin-top: 20px;
  text-align: center;
}
</style>
