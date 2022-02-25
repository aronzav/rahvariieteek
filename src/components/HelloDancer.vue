<template>
  <div class="helloDancer">
    <h1>{{ msg }}</h1>
    <div id="nav">
      <router-link to="/role/selection">Vali roll</router-link> |
      <router-link to="/inventory">Rahvariided</router-link> |
      <router-link to="/transaction">Laenutus</router-link> |
      <router-link to="/juhend">Juhend</router-link> <br><br>
    </div>
    <p>
      Mingi sisu
    </p>

  </div>
</template>

<script>
export default {
  name: "HelloDancer",
  props: {
    msg: String
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>