<template>
  <div id="app">
    <router-link to="/login"></router-link> <br><br>

    <router-view/>


  </div>
</template>

<style>
#app {
  font-family: Noto, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 25px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>export default {
  components: {}
}
</script>