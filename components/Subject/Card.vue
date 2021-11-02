<template>
    <div class="col-md-3 py-2">
      <div class="card" @click="sortById(user.id)">
        <div class="card-body">
            <h3>animal welfare</h3>
        </div>
      </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'SubjectCard',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    user: Object
  },
  computed: mapState({
    events: state => state.events.events,
    users: state  => state.users.users
  }),
  methods: {
    sortById(id) {
      const sortedEvents = this.events
      this.$store.commit('events/SET_EVENTS', sortedEvents)
    }
  }
}
</script>

<style scoped>
.card:hover {
  cursor: pointer;
}
</style>
