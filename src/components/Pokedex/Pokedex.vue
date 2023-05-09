<template>
  <PokedexWrapper :message="wrapperMessage" :isDetails="isDetails">
    <div class="container pokedex mt-3 pt-2">
      <PokeSearch v-if="isSearch" :inputChanged="inputChanged"></PokeSearch>
    </div>
    <div class="row d-flex justify-content-center mt-5">
      <div
        v-for="pokemon in pokemons"
        :key="pokemon.name + Math.random()"
        class="col-12 col-sm-11 col-md-8 col-lg-6"
      >
        <Card :pokemon="pokemon"></Card>
      </div>
    </div>
  </PokedexWrapper>
</template>
<script lang="ts">
import PokedexWrapper from '../hocs/PokedexWrapper/PokedexWrapper';
import PokeSearch from '../PokeSearch/PokeSearch';
import Card from '../Card/Card';
import { PropType } from 'vue';
import { SimplePokemon } from '@/interfaces/SimplePokemon';

export default {
  name: 'PokedexComponent',
  components: {
    PokedexWrapper,
    PokeSearch,
    Card,
    Spinner,
  },
  props: {
    pokemons: {
      type: Array as PropType<SimplePokemon[]>,
      default: [],
    },
    wrapperMessage: {
      type: String,
    },
    isDetails: {
      type: Boolean,
    },
    isSearch: {
      type: Boolean,
    },
    inputChanged: {
      type: Function as PropType<(event: Event) => void>,
    },
  },
};
</script>
<style lang="scss" scoped></style>
