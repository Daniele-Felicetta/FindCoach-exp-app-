import { createRouter, createWebHistory } from 'vue-router'
import CoachesList from '../views/Coaches/CoachesList.vue'
import ContactCoach from '../views/Contact/ContactCoach.vue'
import ErrorPage from '../views/Error/ErrorPage.vue'
import RequestsList from '../views/Requests/RequestsList.vue'
const router = createRouter({
 history: createWebHistory(import.meta.env.BASE_URL),
 routes: [
  {
   path: '/',
   redirect: '/coaches'
  },
  {
   path: '/coaches',
   name: 'coaches',
   component: CoachesList
  },
  {
   path: '/contact/:id',
   name: 'contactId',
   component: ContactCoach
  },
  {
   path: '/register',
   name: 'register',
   component: RequestsList
  },
  {
   path: '/:notFound(.*)',
   component: ErrorPage
  }
 ]
})
export default router
