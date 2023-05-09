<template>
  <Pokedex
    v-if="!isError"
    :pokemons="pokedex"
    :wrapperMessage="'Procurar por um Pokémon'"
    :isSearch="true"
    :isDetails="true"
    :isLoading="isLoading"
  ></Pokedex>
  <ErrorComponent :errorMessage="errorMessage" v-else></ErrorComponent>
</template>
<script lang="ts">
import ErrorComponent from '../components/ErrorComponent/ErrorComponent.vue';
import Pokedex from '@/components/Pokedex/Pokedex.vue';
import { SimplePokemon } from '@/interfaces/SimplePokemon';
import { PropType } from 'vue';

export default {
  name: 'PokedexPageComponent',
  components: {
    Pokedex,
    ErrorComponent,
  },

  data() {
    return {
      searchedPokemon: '',
    };
  },
  props: {
    pokedex: {
      type: Array as PropType<SimplePokemon[]>,
    },
    isLoading: {
      type: Boolean,
    },
    isError: {
      type: Boolean,
    },
    errorMessage: {
      type: String,
    },
  },

  methods: {
    inputChangedHandler(event: Event) {
      this.searchedPokemon = (event.target as HTMLInputElement).value;
    },
  },
};
</script>
