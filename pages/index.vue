<template>
  <div>
    <h1>Dashboard</h1>

    <div class="row">
      <UserCard
        v-for="(user, index) in users"
        :key="index"
        :user="user"
        :data-index="index"
      />

      <EventCard
        v-for="(event, index) in events"
        :key="index"
        :event="event"
        :data-index="index"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import EventCard from '@/components/Event/Card.vue'
import UserCard from '@/components/User/Card.vue'

export default {
  components: {
    EventCard,
    UserCard
  },
  async fetch({ store, error }) {
    try {
      await Promise.all([
                          store.dispatch("events/fetchEvents"),
                          store.dispatch("users/fetchUsers")
                        ]);

    } catch (e) {
      error({
        statusCode: 503,
        message: e
      })
    }
  },
  head() {
      return {
        title: 'Dashboard'
      }
  },
  computed: mapState({
    events: state => state.events.events,
    users: state  => state.users.users
  }),
}
</script>
