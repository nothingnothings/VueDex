<template>
  <div
    class="pokedex-wrapper-container"
    :class="{ 'details-wrapper': isDetails }"
  ></div>
</template>
<script lang="ts">
import ThePokeball from './ThePokeball.vue';
export default {
  name: 'SpinnerComponent',

  components: {
    ThePokeball,
  },
  props: {
    isDetails: {
      type: Boolean,
    },
  },
};
</script>
<style lang="scss" scoped>
@import '@/styles/pokedex-wrapper.scss';
</style>
