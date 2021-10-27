<template>
  <div>
    <navBar />
    <div class="d-flex">
      <div class="container py-5">
        <Nuxt />
      </div>
    </div>
  </div>
  
</template>

<script>
import NavBar from '~/components/NavBar.vue'

export default {
  components: {
    NavBar
  },
  head() {
    return {
      titleTemplate: '%s - Real World Events',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 
            'Dashboard for managing your calendar!',
        }
      ]
    }
  },
}

</script>

<style>
body {
  font-family: 'Poppins', 'Arial Narrow', Arial, sans-serif;
}

.container {
  margin-left: 15%;
  margin-right: 15%;
}
</style>
