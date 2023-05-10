<template>
  <nav class="navbar navbar-dark navbar-expand">
    <div class="container navbar-container">
      <NavigationItems></NavigationItems>
      <img
        src="../../../../assets/vue-logo.png"
        alt="vue"
        className="vue-image d-none d-md-block"
      />
      <a
        href="https://github.com/nothingnothings/VueDex"
        rel="noreferrer"
        target="_blank"
      >
        <img
          src="../../../../assets/github-logo.png"
          alt="github-source-code"
          className="github-image d-none d-sm-block"
        />
      </a>
    </div>
  </nav>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import NavigationItems from './NavigationItems/NavigationItems.vue';
export default defineComponent({
  name: 'MainNavigationComponent',

  components: {
    NavigationItems,
  },
  props: {
    isSpin: {
      type: Boolean,
    },
  },
});
</script>
<style lang="scss" scoped>
@import '@/styles/toolbar.scss';
@import '@/styles/main-navigation.scss';
</style>
