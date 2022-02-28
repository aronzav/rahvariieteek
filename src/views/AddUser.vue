<template>
  <div class="addUser">
  <h3>Lisa kasutaja:</h3>
  <div><input placeholder="Kasutajanimi" v-model="userName"></div><br>
  <div><input placeholder="Salasõna" v-model="password"></div><br>
    <div><button v-on:click="addNewUser">Salvesta</button></div><br>

  </div>
</template>

<script>
export default {
  name: "AddUser",
  data: function () {
    return {
      userName: '',
      password: ''
    }
  },
  methods: {
    addNewUser: function () {
      let user ={
        username: this.userName,
        password: this.password
      }
      this.$http.post("/user/add/new", user
      ).then(response =>
      {
        alert("Kasutajanimi " + this.userName + " on lisatud")
        console.log(response.data)
      }).catch(error =>
      {
        alert(error.response.data.message)
        console.log(error)
      })
    },
  }
}
</script>

<style scoped>

</style>