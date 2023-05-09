<template>
  <div :class="'selector-container ' + (isOpen ? 'active' : '')">
    <div class="selector">
      <div class="selector__close">
        <button @click="isOpen = !isOpen">x</button>
      </div>

      <div class="selector__body">
        <div class="card">
          <BaseCard />
          <BaseCard />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BaseCard from '@/components/cards/BaseCard.vue';

export default defineComponent({
  components: {
    BaseCard,
  },
  data() {
    return {
      isOpen: false,
    };
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/essentials.scss';

.selector-container {
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  transform: translateX(0);

  // transform: translateX(100%);

  background: $morning-mist;
  transition: 0.8s;

  @include break-up(map-get($breakpoints, 'lg')) {
    max-width: 300px;
    left: inherit;
    width: 100%;
    transform: translateX(0);
  }
  @include break-up(map-get($breakpoints, 'xl')) {
    max-width: 380px;
  }

  .selector {
    &__body {
      height: 100vh;
      padding: 10px 5px;
      display: flex;
      flex-direction: column;
      overflow-y: scroll;

      & ::v-deep() .base-card-container {
        margin-bottom: 10px;

        &:last-child {
          margin-bottom: 60px;
        }
      }
    }
  }
}

.active {
  transform: translateX(0);
}
</style>
