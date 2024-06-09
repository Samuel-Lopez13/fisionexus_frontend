import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/layouts/FormLogin.vue'
import Panel from '@/views/layouts/PanelHome.vue'
import Inicio from '@/views/Navegacion/LayoutInicio.vue'
import Pacientes from '@/views/Navegacion/LayoutPacientes.vue'
import Metricas from '@/views/Navegacion/LayoutMetricas.vue'
import Ajustes from '@/views/Navegacion/LayoutAjustes.vue'

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
      component: Panel,
      redirect: '/Panel/Inicio',
      children: [
        {
          path: 'Inicio',
          name: 'Inicio',
          component: Inicio
        },
        {
          path: 'Pacientes',
          name: 'Pacientes',
          component: Pacientes
        },
        {
          path: 'Metricas',
          name: 'Metricas',
          component: Metricas
        },
        {
          path: 'Ajustes',
          name: 'Ajustes',
          component: Ajustes
        }
      ]
    }
  ]
})

export default router
