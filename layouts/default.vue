<template>
  <div>
    <NavBar />
    <div class="d-flex">
      <div class="container py-5">
        <Nuxt />
      </div>
    </div>
    <Footer />
  </div>
  
</template>

<script>
import NavBar from '~/components/NavBar.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    NavBar,
    Footer
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
