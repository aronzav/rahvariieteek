<template>
  <div class="about">
    <h1>This is an about page</h1>
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
