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
import EventCard from '~/components/Event/Card.vue'
export default {
  components: {
    EventCard
  },
  asyncData({ $axios }) {
    return  $axios.get('http://localhost:4000/events')
            .then(response => {
                // merge data with component
                return {
                  events: response.data 
                }
            })
  },
  head() {
      return {
        title: 'Dashboard'
      }
    },
}
</script>
