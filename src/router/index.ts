import {
  createRouter,
  createWebHashHistory,
  RouteRecordRaw,
  RouterScrollBehavior,
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

const scrollBehavior: RouterScrollBehavior = (_to, _from, savedPosition) => {
  if (savedPosition) {
    return savedPosition;
  }
  return {
    top: 0,
    left: 0,
  };
};

const router = createRouter({
  // history: createWebHistory('/VueDex/'),
  history: createWebHashHistory('/VueDex/'),
  linkActiveClass: 'active-path',
  routes,
  scrollBehavior,
});

export default router;
