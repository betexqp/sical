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
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/categoria',
    name: 'categoria',
    component: CategoriaView
  },
  {
    path: '/materialnew',
    name: 'materialnew',
    component: MaterialNew
  },
  {
    path: '/tareas',
    name: 'tareas',
    component: () => import(/* webpackChunkName: "tareas" */ '../views/TareaView.vue')
  },
  {
    path: '/tareas/:id',
    name: 'verTarea',
    component: () => import(/* webpackChunkName: "verTarea" */ '../views/VerTareaView.vue')
  },
  {
    path: '/tareas/:id/editar',
    name: 'editarTarea',
    component: () => import(/* webpackChunkName: "verTarea" */ '../views/EditarTareaView.vue')
  },
  {
    path: '/material',
    name: 'material',
    component: () => import(/* webpackChunkName: "tareas" */ '../views/TareaView.vue')
  },
  {
    path: '/material/:id',
    name: 'verMaterial',
    component: () => import(/* webpackChunkName: "verTarea" */ '../views/VerMaterialView.vue')
  },
  {
    path: '/material/:id/editar',
    name: 'editarMaterial',
    component: () => import(/* webpackChunkName: "verTarea" */ '../views/EditarMaterialView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
