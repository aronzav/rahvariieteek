<template>
  <div class="home">
    <img alt="Logo" src="../assets/logorhv.png">
    <HelloWorld msg="Just need õiged riided sulle tantsimiseks"/>
  </div>

<h1>Tere, Aronza</h1>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
