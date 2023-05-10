<template>
  <div>
    <PokedexWrapper
      v-if="!pokemon && isLoading"
      :isDetails="true"
      :message="'Quem é esse Pokémon?'"
    >
      <TheSpinner></TheSpinner>
    </PokedexWrapper>
    <PokedexWrapper
      v-if="pokemon && !detailsIsError && !isLoading"
      :isDetails="true"
      :message="'Quem é esse Pokémon?'"
    >
      <PokemonDetailsCard :pokemon="pokemon"></PokemonDetailsCard>
    </PokedexWrapper>
    <ErrorComponent
      v-if="detailsIsError && !isLoading"
      :errorMessage="detailsErrorMessage"
    ></ErrorComponent>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import axios, { AxiosError } from 'axios';
import PokedexWrapper from '../components/layout/hocs/PokedexWrapper.vue';
import TheSpinner from '../components/layout/TheSpinner.vue';
import ErrorComponent from '../components/ErrorComponent/ErrorComponent.vue';
import PokemonDetailsCard from '../components/PokemonDetailsCard/PokemonDetailsCard.vue';
import { Pokemon } from '../interfaces/Pokemon';

interface PokemonDetailsPageState {
  pokemon: null | Pokemon;
  isLoading: boolean;
  detailsIsError: boolean;
  detailsErrorMessage: string;
}

export default defineComponent({
  data(): PokemonDetailsPageState {
    return {
      pokemon: null,
      isLoading: false,
      detailsIsError: false,
      detailsErrorMessage: '',
    };
  },
  components: {
    PokedexWrapper,
    TheSpinner,
    PokemonDetailsCard,
    ErrorComponent,
  },
  mounted() {
    this.loadPokemon();
  },
  methods: {
    async loadPokemon() {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${this.$route.params.pokemonId}`
        );
        this.isLoading = false;
        this.pokemon = response.data;
      } catch (error: unknown | Error) {
        console.log(error);
        this.detailsIsError = true;
        if (error instanceof AxiosError) {
          this.detailsErrorMessage = error.message;
        }
      }
    },
  },
});
</script>
<style lang="scss"></style>
