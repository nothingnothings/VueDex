<template>
  <Pokedex
    v-if="!isError"
    :pokemons="filteredPokemons"
    :wrapperMessage="'Procurar por um Pokémon'"
    :isSearch="true"
    :isDetails="false"
    :isLoading="isLoading"
  ></Pokedex>
  <ErrorComponent :errorMessage="errorMessage" v-else></ErrorComponent>
</template>
<script lang="ts">
import ErrorComponent from '../components/ErrorComponent/ErrorComponent.vue';
import Pokedex from '@/components/Pokedex/Pokedex.vue';
import { SimplePokemon } from '../interfaces/SimplePokemon';
import { PropType, defineComponent } from 'vue';

interface PokemonSearchPageState {
  searchedPokemon: string;
  filteredPokemons: SimplePokemon[];
}

export default defineComponent({
  name: 'PokemonSearchPageComponent',
  components: {
    Pokedex,
    ErrorComponent,
  },

  data(): PokemonSearchPageState {
    return {
      searchedPokemon: '',
      filteredPokemons: [],
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

  watch: {
    searchedPokemon() {
      if (this.searchedPokemon !== '') {
        this.filteredPokemons = (this.$props.pokedex as SimplePokemon[]).filter(
          (pokemon: SimplePokemon) => {
            return pokemon.name
              .toUpperCase()
              .includes(this.searchedPokemon.toUpperCase());
          }
        );
      }
    },
  },
});
</script>
