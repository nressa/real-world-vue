<template>
  <div>
    <h1>Event Title: {{ event.title }}</h1>
  </div>
</template>

<script>

export default{
  async asyncData({ $axios, error, params }) {
    try {
      const { data } = await  $axios.get('http://localhost:4000/events/' + params.id)
                  // merge data with component
                  return {
                    event: data 
                  }

    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch event #'+ params.id +' at this time. Please try again.'
      })
    }
  },
  head() {
    const { event } = this

    return {
      title: 'Event #' + event.id,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 
            'What you need to know about event #' + event.id,
        }
      ]
    }
  },
}

</script>
