<template xmlns="http://www.w3.org/1999/html">

  <div class="login">

    <img alt="Rahvariieteek" src="../assets/logorhv.png"><br><br>
    <HelloWorld msg="Rahvariiete laenutuse sisselogimise leht "/>
    <br><br>

    <input placeholder="Kasutajanimi" v-model="username"><br><br>
    <input placeholder="Salasõna" v-model="password"><br><br>

    <button v-on:click="login">Sisene</button>


    <br>
    <br>
    <!--    <button v-on:click="saveDataToLocalStorage"> Salvesta andmed local storage alla</button>-->
  </div>
</template>

<script>
export default {
  name: "Login",
  props: {
    value: String
  },
  data: function () {
    return {
      username: "",
      password: "",
      options: {},
      selected: ""

    }
  },
  methods: {
    login: function () {
      this.$http.get("/log/in", {
            params: {
              username: this.username,
              password: this.password,
            }
          }
      ).then(response => {
            alert("Tere " + response.data.firstname + " " + response.data.lastname)
            this.options = response.data.groupAndRoleList

            localStorage.setItem('roleSelected', this.selected)
            localStorage.setItem('roleOptions', JSON.stringify(this.options))
            localStorage.setItem('firstName', response.data.firstname)
            localStorage.setItem('lastName', response.data.lastname)
            this.$router.push({
              name: 'RoleSelection'
            })
          }
      ).catch(error => {

        alert(error.response.data.message + "Error code: " + error.response.data.errorCode)
        console.log(error)
      })
    }
  }

}
</script>

<style scoped>

</style>