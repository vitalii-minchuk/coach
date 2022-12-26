import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import TeamsPage from '../pages/TeamsPage.vue';
import ProductsPage from '../pages/ProductsPage.vue';
import UsersPage from '../pages/UsersPage.vue';
import SingleTeamPage from '../pages/SingleTeamPage.vue';
import NotFound from '../pages/NotFound.vue';
import TeamsFooter from '../components/teams/TeamsFooter.vue';
import UsersFooter from '../components/user/UserFooter.vue';
import TheFooter from '../components/layout/TheFooter.vue';

const routes = [
  {
    path: '/',
    components: { default: HomePage, footer: TheFooter },
  },
  {
    path: '/teams',
    components: { default: TeamsPage, footer: TeamsFooter },
    // children: [
    //   {
    //     path: ':teamId',
    //     component: SingleTeamPage,
    //     props: true,
    //   },
    // ],
  },
  {
    path: '/about',
    redirect: '/teams',
  },
  {
    path: '/products',
    component: ProductsPage,
  },
  {
    name: 'team-members',
    path: '/teams/:teamId',
    components: { default: SingleTeamPage, footer: TeamsFooter },
    props: true,
  },
  {
    path: '/users',
    components: { default: UsersPage, footer: UsersFooter },
    beforeEnter(to, from, next) {
      console.log('before users enter');
      next();
    },
  },
  {
    path: '/:pathMatch(.*)',
    component: NotFound,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
  linkActiveClass: 'active-link',
  scrollBehavior(_, _2, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  },
});

// router.beforeEach((to, from, next) => {
//   console.log('global before each');
//   next();
// });

export default router;
