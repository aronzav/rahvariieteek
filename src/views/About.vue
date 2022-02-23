<template>
  <div class="about">
    <h1>Vali roll</h1>
    <span>Valitud roll: {{selected}}</span>

    <div>
      <select v-model="selected">
        <option disabled value="">Vali roll</option>
        <option v-for="option in options" :value="option.id">{{ option.roleTypeName }}, {{option.groupGroupName}}</option>
        <br>
        <span>Valitud roll: {{ selected }} </span><br>
      </select>
    </div>
    <button v-on:click="getInputAndRedirectToOutputPage">Edasi</button><br><br><br>


    <button v-on:click="deleteDataFromLocalStorage">Kustuta local storage andmed</button>


  </div>
</template>
<script>
export default {
  name: "About",
  data: function () {
    return{
      options: {},
      selected: "",
      role: ""
    }
  },

  beforeMount() {
    this.selected = localStorage.getItem('roleSelected')
    this.options = JSON.parse(localStorage.getItem('roleOptions'))
  },
  methods: {
    deleteDataFromLocalStorage: function () {
      localStorage.removeItem('roleSelected')
      localStorage.removeItem('roleOptions')
    }

  }
}

</script>
