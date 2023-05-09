<template>
  <Pokedex
    v-if="!errorMessage"
    :pokemons="pokemons"
    :wrapperMessage="'Pokedéx'"
    :isSearch="false"
    :isDetails="false"
    :isLoading="isLoading"
  ></Pokedex>
  <ErrorComponent v-else></ErrorComponent>
</template>
<script lang="ts">
import ErrorComponent from '../components/ErrorComponent/ErrorComponent.vue';
import Pokedex from '@/components/Pokedex/Pokedex.vue';
import { SimplePokemon } from '../interfaces/SimplePokemon';
import { PropType, defineComponent } from 'vue';

export default defineComponent({
  name: 'PokedexPageComponent',
  components: {
    Pokedex,
    ErrorComponent,
  },
  props: {
    pokemons: {
      type: Array as PropType<SimplePokemon[]>,
    },
    wrapperMessage: {
      type: String,
    },
    isLoading: {
      type: Boolean,
    },
    isSearch: {
      type: Boolean,
    },
    isDetails: {
      type: Boolean,
    },
    errorMessage: {
      type: String,
    },
  },
});
</script>
