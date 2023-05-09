import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Pokedex',
    component: () => import('@/pages/PokedexPage.vue'),
  },
  {
    path: '/pokedex/pokemonId',
    name: 'PokemonDetails',
    component: () => import('@/pages/PokemonDetails.vue'),
  },
  {
    path: '/search',
    name: 'PokemonSearch',
    component: () => import('@/pages/PokemonSearch.vue'),
  },
  {
    path: '/notFound(.*)',
    component: () => import('@/pages/NotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active-path',
  routes,
});

export default router;
