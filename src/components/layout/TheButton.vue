<!-- <template>
  <button :class="classButton" @click="handleClick">
    <slot name="button"></slot>
  </button>
</template> -->

<!-- <script setup lang="ts">
import { defineProps, defineEmits } from "vue";

// defineEmits<(e: "notify") => void>();

const TheButton = {
  template: "#the-button",
  name: "TheButton",
  props: {
    classButton: {
      type: String,
      default: "btn__primary",
    },
  },

  methods: {
    handleClick() {
      // emit("click");
    },
  },
};
</script> -->
<template>
  <div>{{ name }} : {{ msg }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  props: {
    classButton: {
      type: String,
      default: 'btn__primary',
    },
  },
  data() {
    return {
      name: 'TheButton',
    };
  },
});
</script>
<style lang="scss" scoped>
@import '@/styles/buttons.scss';
</style>
