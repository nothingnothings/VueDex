<template>
  <ul class="main-header__item-list navbar-nav">
    <NavigationItem
      v-for="navItem in navItems"
      :key="navItem.id"
      :link="navItem.link"
      :text="navItem.text"
    ></NavigationItem>
  </ul>
</template>
<script lang="ts">
import NavigationItem from './NavigationItem/NavigationItem.vue';
export default {
  name: 'NavigationItemsComponent',

  data() {
    return {
      navItems: [
        { id: 'pokedex', text: 'Pokédex', link: '/' },
        { id: 'search', text: 'Procurar por um Pokémon', link: '/search' },
      ],
    };
  },

  components: {
    NavigationItem,
  },
  props: {},
};
</script>
<style lang="scss" scoped>
@import '@/styles/navigation-items.scss';
</style>
