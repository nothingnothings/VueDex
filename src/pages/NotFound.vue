<template>
  <ErrorComponent></ErrorComponent>
</template>
<script lang="ts">
import ErrorComponent from '../components/ErrorComponent/ErrorComponent.vue';
import { SimplePokemon } from '../interfaces/SimplePokemon';
import { PropType, defineComponent } from 'vue';

export default defineComponent({
  name: 'PokedexPageComponent',
  components: {
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
