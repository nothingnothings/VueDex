import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: { name: 'Pokedex' },
  },
  {
    path: '/VueDex',
    name: 'Pokedex',
    component: () => import('../pages/PokedexPage.vue'),
  },
  {
    path: 'VueDex/pokedex/:pokemonId',
    name: 'PokemonDetails',
    component: () => import('../pages/PokemonDetails.vue'),
  },
  {
    path: 'VueDex/search',
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
  history: createWebHistory('/VueDex'),
  linkActiveClass: 'active-path',
  routes,
});

export default router;
