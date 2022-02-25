<template>
  <div class="roleSelection">

    <h3>Tere, {{ firstName }} {{ lastName }}! </h3>
    <span id="roleId">Valitud roll: {{ selected }}</span><br><br><br>

    <div>
      <select v-model="selected">
        <option disabled value="">Vali roll</option>
        <option v-for="option in options" :value="option.id">{{ option.roleTypeName }}, {{ option.groupGroupName }}
        </option>
        <br>
        <span>Valitud roll: {{ selected }} </span><br>
      </select>
    </div>
    <button v-on:click="selectAndProceedToAdminPage">Edasi</button>
    <br><br><br>
    <Close/>


<!--    <button v-on:click="deleteDataFromLocalStorage">Tühista sessioon</button>-->


  </div>
</template>

<script>

import Close from "@/components/Close";

export default {
  name: "RoleSelection",
  components: {
    Close
  },
  data: function () {
    return {
      options: {},
      selected: "",
      role: "",
      firstName: "",
      lastName: ""
    }
  },

  beforeMount() {
    this.selected = localStorage.getItem('roleSelected')
    this.options = JSON.parse(localStorage.getItem('roleOptions'))
    this.firstName = localStorage.getItem('firstName')
    this.lastName = localStorage.getItem('lastName')

  },
  methods: {
    selectAndProceedToAdminPage: function () {
      this.$router.push({name: 'Admin', query: {roleParam: this.role.id}})
    },
    mounted() {
    }
    // ,
    //
    //
    // deleteDataFromLocalStorage: function () {
    //   localStorage.removeItem('roleSelected')
    //   localStorage.removeItem('roleOptions')
    //   localStorage.removeItem('firstName')
    //   localStorage.removeItem('lastName')
    //   this.$router.push({name: 'Login'})
    // }
  }


}
</script>

<style scoped>

</style>