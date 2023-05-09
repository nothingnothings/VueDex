<template>
  <div class="container spinner-wrapper mt-sm-5 pt-sm-5">
    <div class="row justify-content-center">
      <div class="col-8 d-flex justify-content-center mt-5 pt-5">
        <ThePokeball :isSpin="true"></ThePokeball>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import ThePokeball from './ThePokeball.vue';
export default {
  name: 'SpinnerComponent',

  components: {
    ThePokeball,
  },
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
