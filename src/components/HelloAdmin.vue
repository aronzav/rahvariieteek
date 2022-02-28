<template>
  <div class="helloAdmin">

    <div id="nav">
      <router-link to="/role/selection">Vali roll</router-link> |
      <router-link to="/dancer">Tantsija</router-link> |
      <router-link to="/inventory">Rahvariided</router-link> |
      <router-link to="/transaction">Laenutus</router-link> |
      <router-link to="/juhend">Juhend</router-link> <br><br>

      <h3>{{ firstName}} {{lastName}}</h3>

        Admin:<br>
        <ul><li>1.  Saab lisada kasutajat</li>
      <li>2. Saab vaadata kasutaja andmeid</li>
      <li>3. Saab muuta kasutajat</li>
      <li>4. Saab lisada gruppi</li>
      <li> 5. Saab muuta gruppe</li>
      <li>6. Saab vaadata gruppe</li></ul>

    </div>
  </div>
</template>

<script>

export default {
  name: "HelloAdmin",
  props: {
    firstName: '',
    lastName: '',
    roleSelected: '',
    roleName:''
  },

  beforeMount() {
    this.roleSelected = localStorage.getItem('roleSelected')
    this.roleName = JSON.parse(localStorage.getItem('roleOptions.roleTypeName'))
    this.firstName = localStorage.getItem('firstName')
    this.lastName = localStorage.getItem('lastName')

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