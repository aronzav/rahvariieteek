<template>
  <div class="about">
    <h1>Testime kas local storage toimib</h1>
    <span>Valitud roll: {{selected}}</span>

    <div>
      <select v-model="selected">
        <option disabled value="">Vali roll</option>
        <option v-for="option in options" :value="option.id">{{ option.roleTypeName }}, {{option.groupGroupName}}</option>
        <br>
        <span>Valitud roll: {{ selected }} </span>
      </select>
    </div>
    <button v-on:click="deleteDataToLocalStorage">Kustuta local storage andmed</button>


  </div>
</template>
<script>
export default {
  name: "About",
  data: function () {
    return{
      options: {},
      selected: ""
    }
  },
  beforeMount() {
    this.selected = localStorage.getItem('roleSelected')
    this.options = JSON.parse(localStorage.getItem('roleOptions'))
  },
  methods: {
    deleteDataToLocalStorage: function () {
      localStorage.removeItem('roleSelected')
      localStorage.removeItem('roleOptions')
    },

  }
}

</script>
