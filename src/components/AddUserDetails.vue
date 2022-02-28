<template>
  <div class="addUserDetails">
    <h3>Kasutaja lisamine:</h3>
    <div><input placeholder="Eesnimi" v-model="firstname"></div><br>
    <div><input placeholder="Perekonnanimi" v-model="lastname"></div><br>
    <div><input placeholder="Meiliaadress" v-model="email"></div><br>
    <div><input placeholder="Telefoni number" v-model="telephone"></div><br>
    <div><input placeholder="Sünnikuupäev" v-model="birthday"></div><br>
    <div><button v-on:click="addUserDetails">Salvesta </button></div><br>

  </div>
</template>

<script>
export default {
  name: "AddUserDetails"
  ,
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
        this.$router.push({name: 'AddUserDetails'})
      }).catch(error =>
      {
        alert(error.response.data.message)
        console.log(error)
      })
    }
  }}

</script>

<style scoped>

</style>