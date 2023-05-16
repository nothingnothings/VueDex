<template>
  <PokedexWrapper :isDetails="true" :message="''">
    <div class="error-wrapper mt-sm-5 pt-sm-5">
      <div class="row d-flex justify-content-center mt-5 pt-5">
        <ThePokeBall :isSpin="false"></ThePokeBall>
        <div class="container">
          <div class="row d-flex justify-content-center my-2 text-center">
            <div class="col-9">
              <h1 class="error-page-body__message mt-5 pt-3">
                Parece que houve algum erro. Clique &nbsp;
                <router-link class="redirect-link" to="/">aqui</router-link
                >&nbsp; se deseja retornar ao início.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </PokedexWrapper>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import ThePokeBall from '../layout/ThePokeBall.vue';
import PokedexWrapper from '../layout/hocs/PokedexWrapper.vue';
export default defineComponent({
  name: 'ErrorComponent',

  components: {
    PokedexWrapper,
    ThePokeBall,
  },

  props: {
    errorMessage: String,
  },
});
</script>
<style lang="scss" scoped>
@import '@/styles/error-component.scss';
</style>
