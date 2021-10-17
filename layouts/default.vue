<template>
  <div class="">
    <navBar />
    <div class="container">
      <Nuxt />
    </div>
  </div>
  
</template>

<script>
import NavBar from '~/components/NavBar.vue'

export default {
  components: {
    NavBar
  }
}

</script>

<style>
.container {
  margin-left: 15%;
  margin-right: 15%;
}
</style>
