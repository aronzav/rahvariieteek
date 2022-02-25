<template>
  <div class="dancer">
    <Close/><br>

    <img alt="Logo" src="../assets/logorhv.png">
    <HelloDancer/>


  </div>
</template>

<script>


import HelloDancer from "@/components/HelloDancer";
import Close from "@/components/Close";

export default {
   components: {
    HelloDancer,
     Close

  }
}
</script>

<style scoped>

</style>