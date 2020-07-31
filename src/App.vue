<template>
  <div id="app"> 
    <DashBoardPage />
  </div>
</template>

<script>
import DashBoardPage from './dashboard/DashBoardPage.vue'

export default {
  name: 'App',
  components: {
    DashBoardPage
  }
}
</script>

<style >
body{
  background: linear-gradient(to bottom,#555, #999);
  background-attachment: fixed;
}
</style>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
