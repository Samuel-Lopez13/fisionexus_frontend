import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/layouts/FormLogin.vue'
import Panel from '@/views/layouts/PanelHome.vue'
import Inicio from '@/components/NavegacionViews/Inicio.vue'
import Pacientes from '@/components/NavegacionViews/Pacientes.vue'
import Metricas from '@/components/NavegacionViews/Metricas.vue'
import Ajustes from '@/components/NavegacionViews/Ajustes.vue'

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
          component: Inicio,
          redirect: { name: 'Dashboard' },
          children: [
            {
              path: '',
              name: 'Dashboard',
              component: () => import('@/views/Navegacion/LayoutInicio.vue')
            },
          ]
        },
        {
          path: 'Pacientes',
          name: 'Pacientes',
          component: Pacientes,
          redirect: { name: 'ListaPacientes' },
          children: [
            {
              path: '',
              name: 'ListaPacientes',
              component: () => import('@/views/Navegacion/LayoutPacientes.vue')
            }
          ]
        },
        {
          path: 'Metricas',
          name: 'Metricas',
          component: Metricas,
          redirect: { name: 'Estadisticas' },
          children: [
            {
              path: '',
              name: 'Estadisticas',
              component: () => import('@/views/Navegacion/LayoutMetricas.vue')
            }
          ]
        },
        {
          path: 'Ajustes',
          name: 'Ajustes',
          component: Ajustes,
          redirect: { name: 'Configuracion' },
          children: [
            {
              path: '',
              name: 'Configuracion',
              component: () => import('@/views/Navegacion/LayoutAjustes.vue')
            }
          ]
        }
      ]
    }
  ]
})

export default router
