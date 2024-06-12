import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/layouts/FormLogin.vue'
import Panel from '@/views/layouts/PanelHome.vue'
import Navegacion from '@/views/Navegacion/NavegacionView.vue'
import LayoutInicio from '@/views/Navegacion/Inicio/LayoutInicio.vue'
import LayoutPacientes from '@/views/Navegacion/Pacientes/LayoutPacientes.vue'
import LayoutMetricas from '@/views/Navegacion/Metricas/LayoutMetricas.vue'

const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes: [
      {
         path: '/',
         name: 'login',
         component: Login,
         meta: { requiresAuth: false },
      },
      {
         path: '/',
         name: 'Panel',
         component: Panel,
         meta: { requiresAuth: true },
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
                     component: LayoutInicio
                  }
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
                     component: LayoutPacientes
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
                     component: LayoutMetricas
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
                     component: LayoutMetricas
                  }
               ]
            }
         ]
      }
   ]
})

router.beforeEach((to, from, next) =>{
   if (to.meta.requiresAuth) {
      if(localStorage.getItem(import.meta.env.VITE_CREDENCIALES) === null){
         next('/')
      } else{
         next()
      }
   }

   next();
})

export default router
