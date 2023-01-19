import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CircularLinkedListView from "../views/CircularLinkedListView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/circular-linked-list',
      name: 'ccl',
      component: CircularLinkedListView
    },
  ]
})

export default router
