import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/LoginView.vue';
import MyTurnsView from '../views/MyTurnsView.vue';
import HomeView from '../views/HomeView.vue';
import FormularioView from '../views/FormularioView.vue';
import AboutUsView from '../views/AboutUsView.vue';
import EditView from '../views/EditView.vue';
import ContactUsView from '../views/ContactUsView.vue';
import NotFound from '../views/NotFound.vue';
import { useLoginStore } from '../stores/login';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/',
        name: 'login',
        component: LoginView,
      },
      {
        path: '/myTurns',
        name: 'myTurns',
        component: MyTurnsView,
        meta: { RequireAuth: true },
      },
      {
        path: '/myTurns/:id',
        name: 'myTurn',
        component: EditView,
        meta: { RequireAuth: true },
      },
      {
        path: '/home',
        name: 'home',
        component: HomeView,
      },
      {
        path: '/booking',
        name: 'booking',
        component: FormularioView,
        meta: { RequireAuth: true },
      },
      {
        path: '/aboutus',
        name: 'aboutus',
        component: AboutUsView,
      },
      {
        path: '/contactus',
        name: 'contactus',
        component: ContactUsView,
      },
      {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound,
      },
    ],
  });
  
  router.beforeEach((to, from, next) => {
    const store = useLoginStore();
    if (to.matched.some((record) => record.meta.RequireAuth) && !store.isLogin) {
      next('/');
    } else {
      next();
    }
  });
  
  export default router;