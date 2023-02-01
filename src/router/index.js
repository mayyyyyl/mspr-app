import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/ajouter_suivi',
    name: '/ajouter_suivi',
    component: () => import('../views/AddTrackingView.vue')
  },
  {
    path: '/ajouter_plante',
    name: 'ajouter_plante',
    component: () => import('../views/AddPlantView.vue')
  },
  {
    path: '/ajouter_conseil',
    name: 'ajouter_conseil',
    component: () => import('../views/AddCommentView.vue')
  },
  {
    path: '/garder_des_plantes',
    name: 'garder_des_plantes',
    component: () => import('../views/TakePlantView.vue')
  },
  {
    path: '/suivi',
    name: 'suivi',
    component: () => import('../views/TrackingView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
