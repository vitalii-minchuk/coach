import { createRouter, createWebHistory } from 'vue-router';
import NotFoundPage from '../pages/NotFoundPage.vue';
import CoachesList from '../pages/CoachesList.vue';
import CoachDetails from '../pages/CoachDetails.vue';
import CoachRegistration from '../pages/CoachRegistration.vue';
import RequestsReceived from '../pages/RequestsReceived.vue';
import AuthPage from '../pages/AuthPage.vue';
import ContactCoach from '../pages/ContactCoach.vue';
import store from '../store';

const routes = [
  { path: '/', redirect: '/coaches' },
  { path: '/coaches', component: CoachesList },
  {
    path: '/coaches/:id',
    component: CoachDetails,
    props: true,
    children: [{ path: 'contact', component: ContactCoach }],
  },
  {
    path: '/register',
    component: CoachRegistration,
    meta: { requiredAuth: true },
  },
  {
    path: '/requests',
    component: RequestsReceived,
    meta: { requiredAuth: true },
  },
  { path: '/auth', component: AuthPage, meta: { requiredNotAuth: true } },
  { path: '/:notFound(.*)', component: NotFoundPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'router-active-link',
});

router.beforeEach(function (to, _, next) {
  if (to.meta.requiredAuth && !store.getters.isAuth) {
    next('/auth');
  } else if (to.meta.requiredNotAuth && store.getters.isAuth) {
    next('/coaches');
  } else {
    next();
  }
});

export default router;
