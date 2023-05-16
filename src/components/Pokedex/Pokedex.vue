<template>
  <PokedexWrapper
    v-if="!isLoading"
    :message="wrapperMessage"
    :isDetails="isDetails"
  >
    <div class="container pokedex mt-3 pt-2">
      <PokeSearch v-if="isSearch" :inputChanged="inputChanged"></PokeSearch>
      <div
        v-if="!isLoading && pokemons?.length === 0"
        class="col-12 col-sm-11 col-md-8 col-lg-6 mt-4 text-center font-weight-bold"
      >
        Nenhum Pokémon encontrado.
      </div>
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
  <PokedexWrapper
    v-if="isLoading && pokemons!.length === 0 && !noPokemonFoundMessage"
    :message="wrapperMessage"
    :isDetails="true"
  >
    <Spinner></Spinner>
  </PokedexWrapper>
</template>
<script lang="ts">
import PokedexWrapper from '../layout/hocs/PokedexWrapper.vue';
import Spinner from '../layout/TheSpinner.vue';
import PokeSearch from '../PokeSearch/PokeSearch.vue';
import Card from './Card/Card.vue';
import { PropType, defineComponent } from 'vue';
import { SimplePokemon } from '../../interfaces/SimplePokemon';

interface PokedexComponentState {
  originalPokemons: SimplePokemon[];
  noPokemonFoundMessage: string | null;
}

export default defineComponent({
  name: 'PokedexComponent',

  data(): PokedexComponentState {
    return {
      originalPokemons: [],
      noPokemonFoundMessage: null,
    };
  },

  components: {
    PokedexWrapper,
    PokeSearch,
    Card,
    Spinner,
  },
  props: {
    pokemons: {
      type: Array as PropType<SimplePokemon[]>,
    },
    isLoading: {
      type: Boolean,
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
});
</script>
