import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const vueApp = createApp(App);

vueApp.use(router);

router.isReady().then(() => {
  // ? Helps with animating route changes with the <transition> component, inside '<router-view>'...
  vueApp.mount('#app');
});
