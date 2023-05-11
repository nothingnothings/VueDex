<template>
  <header class="main-header">
    <MainNavigation></MainNavigation>
  </header>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import MainNavigation from './MainNavigation/MainNavigation.vue';
export default defineComponent({
  name: 'TheToolbarComponent',

  components: {
    MainNavigation,
  },
});
</script>
<style lang="scss" scoped>
@import '@/styles/toolbar.scss';
</style>
