<template>
    <div class="col-md-3 py-2">
      <div class="card" @click="sortById(user.name)">
        <div class="card-body">
          <center>
            <img :src="user.image" alt="" height="50" width="50" />
            <h4 class="title">
              {{ user.name }}
            </h4>
            <p>
              {{ user.position }}
            </p>
          </center>
        </div>
      </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'UserCard',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    user: Object
  },
  computed:{
    ...mapGetters({
            nameFromStore: 'events'
        }),
    name: {
        get() {
          return this.events
        },
        set(newEvents) {
          return newEvents        
        } 
    }
  },
  methods: {
    sortById(name) {
      window.console.log(name)
    }
  },
}
</script>

<style scoped>
.card:hover {
  cursor: pointer;
}
</style>
