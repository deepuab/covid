<template>
  <div id="app"> 
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
}
header {
  background-color: #999;
  width: 1184px;
  margin: 0 auto;
}
</style>
