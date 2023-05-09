<template>
  <li class="main-header__item nav-item px-4 text-nowrap">
    <router-link :to="link">{{ text }}</router-link>
  </li>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NavigationItemComponent',

  props: {
    text: {
      type: String,
    },
    link: {
      type: String,
    },
  },
});
</script>

<style lang="scss">
@import '@/styles/navigation-item.scss';
</style>
