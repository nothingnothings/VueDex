<template>
  <nav class="navbar navbar-dark navbar-expand">
    <div class="container navbar-container">
      <NavigationItems></NavigationItems>
    </div>
  </nav>
</template>
<script lang="ts">
import NavigationItems from './NavigationItems/NavigationItems.vue';
export default {
  name: 'SpinnerComponent',

  components: {
    NavigationItems,
  },
  props: {
    isSpin: {
      type: Boolean,
    },
  },
};
</script>
<style lang="scss" scoped>
@import '@/styles/toolbar.scss';
</style>
