<template>
  <router-link :to="pokemonLink">
    <div
      class="card px-2 mb-5 d-flex flex-row align-items-center justify-content-center position-relative"
    >
      <h3 class="pokemon-number text-right position-absolute">
        # {{ pokemon?.id }}
      </h3>
      <div class="pokemon-img-wrapper">
        <img
          :src="
            pokemon?.id !== 778 && pokemon?.id !== 774
              ? `https://img.pokemondb.net/artwork/large/${pokemon?.name}.jpg`
              : 'https://img.pokemondb.net/artwork/large/pikachu.jpg'
          "
          class="pokemon-img"
          :alt="pokemon + '-' + pokemon?.id"
        />
      </div>
      <div class="pokemon-desc-wrapper">
        <div class="ml-sm-4 pl-4">
          <h2 class="text-nowrap pokemon-name">
            {{ pokemonName }}
          </h2>
        </div>
      </div>
    </div>
  </router-link>
</template>
<script lang="ts">
import { PropType } from 'vue';
import { SimplePokemon } from '@/interfaces/SimplePokemon';

export default {
  name: 'CardComponent',

  props: {
    pokemon: {
      type: Object as PropType<SimplePokemon>,
    },
  },

  computed: {
    pokemonName() {
      return (
        this.$props.pokemon?.name[0].toUpperCase() +
        (this.pokemon as SimplePokemon).name.slice(1)
      );
    },

    pokemonLink() {
      return `/pokedex/${this.$props.pokemon?.id}`;
    },
  },
};
</script>
<style lang="scss" scoped>
@import '@/styles/card.scss';
</style>
