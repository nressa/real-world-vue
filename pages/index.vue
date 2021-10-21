<template>
  <div>
    <h1>Dashboard</h1>
    <EventCard
      v-for="(event, index) in events"
      :key="index"
      :event="event"
      :data-index="index"
    />
  </div>
</template>

<script>
import EventCard from '@/components/Event/Card.vue'
import EventService from '@/services/EventService.js'

export default {
  components: {
    EventCard
  },
  async asyncData({ error }) {
    try {
      const { data } = await EventService.getEvents()
      // merge data with component
      return {
        events: data 
      }

    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch events at this time. Please try again.'
      })
    }




  },
  head() {
      return {
        title: 'Dashboard'
      }
    },
}
</script>
