<template>
  <Pokedex
    v-if="!isError"
    :pokemons="manipulatedPokemons"
    :wrapperMessage="'Procurar por um Pokémon'"
    :isSearch="true"
    :isDetails="true"
    :isLoading="isLoading"
    :inputChanged="inputChangedHandler"
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
  created() {
    this.filteredPokemons = this.$props.pokemons as SimplePokemon[];
  },
  props: {
    pokemons: {
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
      const searchedPokemon = (event.target as HTMLInputElement).value;
      this.searchedPokemon = searchedPokemon;
    },
  },

  computed: {
    manipulatedPokemons() {
      return (this.pokemons as SimplePokemon[]).filter(
        (pokemon: SimplePokemon) => {
          return pokemon.name
            .toUpperCase()
            .includes(this.searchedPokemon.toUpperCase());
        }
      );
    },
  },
});
</script>
