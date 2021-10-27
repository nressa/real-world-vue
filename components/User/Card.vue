<template>
    <div class="col-md-4">
      <span class="eyebrow">
        {{ user.name }}
      </span>
      <h4 class="title">
        {{ user.position }}
      </h4>
    </div>
</template>
<script>
export default {
  name: 'UserCard',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    user: Object
  },
}
</script>
