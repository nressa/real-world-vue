<template>
  <div>
    <h1>Event Title: {{ event.title }}</h1>
  </div>
</template>

<script>
import EventService from '@/services/EventService.js'

export default{
  async asyncData({ error, params }) {
    try {
      const { data } = await EventService.getEvent(params.id)
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
