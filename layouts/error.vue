<template>
  <div>
        <h1 v-if="error.statusCode === 404">{{ error.message }}</h1>
        <h1 v-else-if="error.statusCode === 500">{{ error.message }}</h1>
        <h1 v-else-if="error.statusCode === 503">{{ error.message }}</h1>
        <h1 v-else>Something went wrong</h1>
        <nuxt-link to="/" class="">
          Dashboard
        </nuxt-link>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    head() {
        const { error } = this;
        return {
            title: error.statusCode,
            meta: [
                {
                hid: 'description',
                name: 'description',
                content: 
                    error.message
                }
            ]
        }
    },
    layout: 'error' // you can set a custom layout for the error page
  }
</script>