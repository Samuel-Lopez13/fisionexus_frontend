import { createRouter, createWebHistory } from 'vue-router'
import Login from "@/views/layouts/FormLogin.vue";
import Panel from '@/views/layouts/Panel.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/Panel',
      name: 'Panel',
      component: Panel
    },
  ]
})

export default router
