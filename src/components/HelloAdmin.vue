<template>
  <div class="helloAdmin">

    <div id="nav">
      <router-link to="/role/selection">Vali roll</router-link> |
      <router-link to="/dancer">Tantsija</router-link> |
      <router-link to="/inventory">Rahvariided</router-link> |
      <router-link to="/transaction">Laenutus</router-link> |
      <router-link to="/juhend">Juhend</router-link> <br><br>

      <h1>Siin peaks olema eesnimi ja perek.nimi ?? {{ firstName }} {{lastName}}</h1>

      <p>
        Admin lehekülg

        1. Saab vaadata kasutaja andmeid
        2. Saab lisada kasutajat
        3. Saab muuta kasutajat
        4. Saab lisada gruppi
        5. Saab muuta gruppe
        6. Saab vaadata gruppe




      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: "HelloAdmin",
  props: {
    firstName: '',
    lastName: '',
    roleParam: ''
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