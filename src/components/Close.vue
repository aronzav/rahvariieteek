<template>
  <div id="close" align="center">
    <button v-on:click="deleteDataFromLocalStorage">Esilehele ja kustuta andmed vahemälust</button><br><br><br>
  </div>
</template>

<script>
export default {
  name: "Close",
  data: function () {
    return {
      options: {},
      selected: "",
      role: "",
      firstName: "",
      lastName: ""
    }
  },
  methods: {
    deleteDataFromLocalStorage: function () {
      localStorage.removeItem('roleSelected')
      localStorage.removeItem('roleOptions')
      localStorage.removeItem('firstName')
      localStorage.removeItem('lastName')
      this.$router.push({name: 'Login'})

    }
  }
}
</script>

<style scoped>

</style>