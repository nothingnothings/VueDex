import {
  createRouter,
  createWebHashHistory,
  RouteRecordRaw,
  Route,
} from 'vue-router';

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
  // history: createWebHistory('/VueDex/'),
  history: createWebHashHistory('/VueDex/'),
  linkActiveClass: 'active-path',
  routes,
  scrollBehavior(_to: Route, _from: Route, savedPosition: unknown | null) {
    if (savedPosition) {
      return savedPosition;
    }
    return {
      top: 0,
      left: 0,
    };
  },
});

export default router;
