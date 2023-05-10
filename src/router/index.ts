import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Pokedex',
    component: () => import('../pages/PokedexPage.vue'),
  },
  {
    path: '/pokedex/:pokemonId',
    name: 'PokemonDetails',
    component: () => import('../pages/PokemonDetails.vue'),
  },
  {
    path: '/search',
    props: true,
    name: 'PokemonSearch',
    component: () => import('../pages/PokemonSearch.vue'),
  },
  // {
  //   path: '/notFound(.*)',
  //   component: () => import('../pages/NotFound.vue'),
  // },
];
const router = createRouter({
  history: createWebHistory('https://nothingnothings.github.io/VueDex'),
  linkActiveClass: 'active-path',
  routes,
});

export default router;
