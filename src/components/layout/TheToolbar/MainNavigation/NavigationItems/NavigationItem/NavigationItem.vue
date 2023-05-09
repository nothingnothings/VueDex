<template>
  <li>
    <router-link :to="link">{{ text }}</router-link>
  </li>
</template>
<script lang="ts">
export default {
  name: 'NavigationItemComponent',

  props: {
    text: {
      type: String,
    },
    link: {
      type: String,
    },
  },
};
</script>
<style lang="scss" scoped>
@import '@/styles/navigation-item.scss';
</style>
