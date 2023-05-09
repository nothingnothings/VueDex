<template>
  <nav class="navbar navbar-dark navbar-expand">
    <div class="container navbar-container">
      <NavigationItems></NavigationItems>
    </div>
  </nav>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import NavigationItems from './NavigationItems/NavigationItems.vue';
export default defineComponent({
  name: 'MainNavigationComponent',

  components: {
    NavigationItems,
  },
  props: {
    isSpin: {
      type: Boolean,
    },
  },
});
</script>
<style lang="scss" scoped>
@import '@/styles/toolbar.scss';
</style>
