<template>
  <div class="container">
    <div class="row justify-content-center text-white mt-4">
      <div class="col-md-11 col-lg-9 mt-2">
        <div
          class="pokemon-details-card mt-4 pt-4 d-flex flex-column align-items-center"
          :class="pokemonType() + '-bg'"
        >
          <div class="outer-wrapper d-flex mt-4">
            <div
              class="pokemon-text outer-wrapper align-self-start d-flex flex-column mr-md-5 pr-md-5"
            >
              <h1 class="pokemon-details-card__pokemon-title">
                {{ pokemon?.name }}
              </h1>
              <div class="pokemon-details-card__pokemon-types text-dark">
                <div
                  v-for="typeObject in pokemon?.types"
                  :key="typeObject.type.name"
                  class="pokemon-details-card__pokemon-type ml-2 mr-1 px-3 py-1"
                  :class="typeObject.type.name"
                >
                  {{ typeObject.type.name }}
                </div>
              </div>
            </div>
            <div
              class="pokemon-details-card__pokemon-number d-flex flex-column justify-content-center ml-5 pl-5"
            >
              <h3 class="pokemon-number-content">
                #{{ zeroPad(pokemon!.id, 3) }}
              </h3>
            </div>
          </div>
          <div
            class="pokemon-details-card__image-wrapper d-flex justify-content-center mt-4 mt-sm-5"
          >
            <img
              :src="pokemonImage"
              :alt="pokemon?.name"
              class="pokemon-details-card__image"
            />
          </div>
          <div class="pokemon-details-card__body px-5 py-3 py-md-4 mx-5 mt-4">
            <div
              class="pokemon-details-card__body__skills text-nowrap d-flex flex-wrap flex-sm-nowrap align-items-center my-3"
            >
              <strong class="mb-2 mb-sm-0">Habilidades:</strong>&nbsp;
              <div
                v-for="abilityObject in pokemon?.abilities"
                class="pokemon-details-card__body-skill my-1 my-sm-0 ml-2 mr-1 px-2 py-1"
                :key="abilityObject.ability.name"
              >
                {{ abilityObject.ability.name }}
              </div>
            </div>
            <div
              class="pokemon-details-card__body__height d-flex align-items-center my-3"
            >
              <strong class="py-1">Altura: &nbsp;</strong>
              <p class="mb-0">&nbsp; {{ pokemon!.height * 10 }} cm</p>
            </div>
            <div
              class="pokemon-details-card__body__weight d-flex align-items-center my-3"
            >
              <strong class="py-1">Peso: &nbsp;</strong>
              <p class="mb-0">&nbsp; {{ pokemon!.weight / 10 }} kg</p>
            </div>
            <div
              class="pokemon-details-card__body__experience d-flex align-items-center my-3"
            >
              <strong class="py-1">Experiência: &nbsp;</strong>
              <p class="mb-0">&nbsp; {{ pokemon!.base_experience }} xp</p>
            </div>
            <div
              class="pokemon-details-card__body__forms d-flex flex-wrap align-items-center"
            >
              <strong class="mb-2 mb-sm-0 text-nowrap">Formas: &nbsp;</strong>

              <div
                v-for="formObject in pokemon!.forms"
                class="pokemon-details-card__body-form text-nowrap ml-2 mr-1 px-2 py-1 my-1"
                :key="formObject.name"
              >
                {{ formObject.name }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { PropType, defineComponent } from 'vue';
import { Pokemon } from '../../interfaces/Pokemon';

export default defineComponent({
  name: 'PokemonDetailsCardComponent',

  props: {
    pokemon: Object as PropType<Pokemon>,
  },

  methods: {
    pokemonType() {
      return this.pokemon?.types[0].type.name;
    },

    zeroPad(num: number, places: number) {
      return String(num).padStart(places, '0');
    },
  },

  computed: {
    pokemonImage() {
      return `https://img.pokemondb.net/artwork/large/${this.pokemon?.name}.jpg`;
    },
  },
});
</script>
<style lang="scss" scoped>
@import '@/styles/pokemon-details.scss';
</style>
