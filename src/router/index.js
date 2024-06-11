import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/layouts/FormLogin.vue'
import Panel from '@/views/layouts/PanelHome.vue'
import Navegacion from '@/views/Navegacion/NavegacionView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'Panel',
      component: Panel,
      children: [
        {
          path: 'Inicio',
          name: 'Inicio',
          component: Navegacion,
          redirect: { name: 'Dashboard' },
          children: [
            {
              path: '',
              name: 'Dashboard',
              component: () => import('@/views/Navegacion/Inicio/LayoutInicio.vue')
            },
          ]
        },
        {
          path: 'Pacientes',
          name: 'Pacientes',
          component: Navegacion,
          redirect: { name: 'ListaPacientes' },
          children: [
            {
              path: '',
              name: 'ListaPacientes',
              component: () => import('@/views/Navegacion/Pacientes/LayoutPacientes.vue')
            }
          ]
        },
        {
          path: 'Metricas',
          name: 'Metricas',
          component: Navegacion,
          redirect: { name: 'Estadisticas' },
          children: [
            {
              path: '',
              name: 'Estadisticas',
              component: () => import('@/views/Navegacion/Metricas/LayoutMetricas.vue')
            }
          ]
        },
        {
          path: 'Ajustes',
          name: 'Ajustes',
          component: Navegacion,
          redirect: { name: 'Configuracion' },
          children: [
            {
              path: '',
              name: 'Configuracion',
              component: () => import('@/views/Navegacion/Ajustes/LayoutAjustes.vue')
            }
          ]
        }
      ]
    }
  ]
})

export default router
