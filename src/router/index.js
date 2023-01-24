import { createRouter, createWebHistory } from 'vue-router'
import Afficheproduit from '../views/show-product.vue'
import Formulaire from '../views/forms-good.vue'


const routes = [
  {
    path: '/',
    name: 'Formulaire',
    component: Formulaire,
  },
  {
    path: '/produits',
    name: 'afficheproduit',
    component: Afficheproduit,
  },
  
]

const Router = createRouter({
 // history: createWebHistory(process.env.BASE_URL),
  history: createWebHistory(),
  routes
})

export default Router
