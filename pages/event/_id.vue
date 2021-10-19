<template>
  <div>
    <h1>Event # {{ id }}</h1>
  </div>
</template>

<script>

export default{
  head() {
    const { id } = this

    return {
      title: 'Event #' + id,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 
            'What you need to know about event #' + id,
        }
      ]
    }
  },
  computed: {
      id() {
          return this.$route.params.id
      }
  },
}

</script>
