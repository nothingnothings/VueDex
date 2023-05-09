<template>
  <div class="pokeball" :class="{ spin: isSpin, wiggle: !isSpin }"></div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PokeBallComponent',

  props: {
    isSpin: {
      type: Boolean,
    },
  },
});
</script>
<style lang="scss" scoped>
@import '@/styles/pokeball.scss';
</style>
