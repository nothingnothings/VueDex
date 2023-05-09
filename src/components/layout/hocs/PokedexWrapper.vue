<template>
  <div
    class="pokedex-wrapper-container"
    :class="{ 'details-wrapper': isDetails }"
  >
    <div class="pokedex-title pt-2 mt-4 mt-md-0">
      <h1 class="text-center text-md-nowrap mt-5 pt-5">{{ message }}</h1>
    </div>
    <slot></slot>
  </div>
</template>
<script lang="ts">
export default {
  name: 'PokedexWrapperComponent',

  props: {
    message: {
      type: String,
    },
    isDetails: {
      type: Boolean,
    },
  },
};
</script>
<style lang="scss" scoped>
@import '@/styles/pokedex-wrapper.scss';
</style>
