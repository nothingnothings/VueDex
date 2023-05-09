<template>
  <div class="container spinner-wrapper mt-sm-5 pt-sm-5">
    <div class="row justify-content-center">
      <div class="col-8 d-flex justify-content-center mt-5 pt-5">
        <ThePokeBall :isSpin="true"></ThePokeBall>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import ThePokeBall from '../layout/ThePokeBall.vue';
export default defineComponent({
  name: 'TheSpinnerComponent',

  components: {
    ThePokeBall,
  },
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
