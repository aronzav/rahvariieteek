<template>
  <div id="nav">


    <router-link to="/admin">Admin</router-link> |
    <router-link to="/user">Kasutaja</router-link> <br><br>
    <router-link to="/inventory">Rahvariided</router-link> |
    <router-link to="/transaction">Laenutus</router-link> |
    <router-link to="/juhend">Juhend</router-link> <br><br>
    <router-link to="/about" >About</router-link> |
    <router-link to="/role/selection">Vali roll</router-link>

  </div>
</template>

<script>
export default {
  name: "Vastutav"
}
</script>

<style scoped>

</style>