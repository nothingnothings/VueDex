<template>
  <div class="pokeball" :class="{ spin: isSpin, wiggle: !isSpin }"></div>
</template>
<script lang="ts">
export default {
  name: 'ThePokeBallComponent',

  props: {
    isSpin: {
      type: Boolean,
    },
  },
};
</script>
<style lang="scss" scoped>
@import '@/styles/pokeball.scss';
</style>
