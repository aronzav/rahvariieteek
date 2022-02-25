<template>
<div id="folkDancers">
  <table>
    <tr>
      <th>Eesnimi</th>
      <th>Perekonnanimi</th>
      <th>Roll</th>
      <th>Telefon</th>
      <th>Meiliaadress</th>
    </tr>
    <tr v-for="row in users">
    <td>{{row.firstName}}</td>
    <td>{{row.lastName}}</td>
    <td>{{row.role.name}}</td>
    <td>{{row.phone}}</td>
    <td>{{row.email}}</td>
  </tr>>
  </table>

</div>
</template>

<script>
export default {
  name: "FolkDancers",
  props: {
    users: {}
  }
}
</script>

<style scoped>

</style>