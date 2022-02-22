<template>
  <div id="app">
    <div id="nav">

      <router-link to="/login">Login</router-link> <br><br>
      <router-link to="/admin">Admin</router-link> |
      <router-link to="/user">Kasutaja</router-link> <br><br>
      <router-link to="/inventory">Rahvariided</router-link> |
      <router-link to="/transaction">Laenutus</router-link> |
      <router-link to="/juhend">Juhend</router-link> <br><br>
      <router-link to="/about">Local storage</router-link>

    </div>
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
