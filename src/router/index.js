import { createRouter, createWebHistory } from 'vue-router';
import NotFoundPage from '../pages/NotFoundPage.vue';
import CoachesList from '../pages/CoachesList.vue';
import CoachDetails from '../pages/CoachDetails.vue';
import CoachRegistration from '../pages/CoachRegistration.vue';
import RequestsReceived from '../pages/RequestsReceived.vue';
import ContactCoach from '../pages/ContactCoach.vue';

const routes = [
  { path: '/', redirect: '/coaches' },
  { path: '/coaches', component: CoachesList },
  {
    path: '/coaches/:id',
    component: CoachDetails,
    props: true,
    children: [{ path: 'contact', component: ContactCoach }],
  },
  { path: '/register', component: CoachRegistration },
  { path: '/requests', component: RequestsReceived },
  { path: '/:notFound(.*)', component: NotFoundPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'router-active-link',
});

export default router;
