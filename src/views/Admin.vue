<template>
  <div id="admin">
    <Close/>
    <img alt="Logo" src="../assets/logorhv.png">

    <HelloAdmin/>
    <AdUser/>


  </div>
</template>

<script>
import HelloAdmin from "@/components/HelloAdmin";
import Close from "@/components/Close";
import AdUser from "@/components/AdUser";

export default {
  name: 'Admin',
  components: {
    HelloAdmin,
    AdUser,
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

  }
}
</script>

<style scoped>

</style>