import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CategoriaView from '../views/CategoriaView.vue'
import MaterialView from '../views/MaterialView.vue'
import MaterialNew from '../views/MaterialNew.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/categoria',
    name: 'categoria',
    component: CategoriaView
  },
  {
    path: '/material',
    name: 'material',
    component: MaterialView
  },
  {
    path: '/materialnew',
    name: 'materialnew',
    component: MaterialNew
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
