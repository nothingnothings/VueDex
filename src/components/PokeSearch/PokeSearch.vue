<template>
  <div class="container pokeSearch-container mt-5 pb-3">
    <div class="row justify-content-center">
      <div class="col-8">
        <div class="form-group">
          <input
            type="text"
            class="form-control custom-form-control"
            placeholder="Procurar por um Pokémon"
            @input="
              (event: Event) => {
                inputChanged(event);
              }
            "
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { PropType, defineComponent } from 'vue';

export default defineComponent({
  name: 'PokeSearchComponent',

  props: {
    inputChanged: {
      type: Function as PropType<(event: Event) => void>,
      required: true,
    },
  },
});
</script>
<style lang="scss" scoped></style>
