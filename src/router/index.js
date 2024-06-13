import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/layouts/FormLogin.vue'
import Panel from '@/views/layouts/PanelHome.vue'
import Navegacion from '@/views/Navegacion/NavegacionView.vue'
import LayoutInicio from '@/views/Navegacion/Inicio/LayoutInicio.vue'
import LayoutPacientes from '@/views/Navegacion/Pacientes/LayoutPacientes.vue'
import LayoutMetricas from '@/views/Navegacion/Metricas/LayoutMetricas.vue'
import AgregarPaciente from '@/views/Navegacion/Pacientes/AgregarPaciente.vue'
import { usuariosQueries } from '@/api/usuarios/usuariosQueries.js'

const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes: [
      {
         path: '/',
         name: 'login',
         component: Login,
         meta: { verifyToken: false }
      },
      {
         path: '/',
         name: 'Panel',
         component: Panel,
         meta: { verifyToken: true },
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
                  },
                  {
                     path: 'AgregarPaciente',
                     name: 'AgregarPaciente',
                     component: AgregarPaciente
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

router.beforeEach(async (to, from, next) => {
   if (to.meta.verifyToken) {
      console.log(to)
      const response = await usuariosQueries.verifyUser(localStorage.getItem(import.meta.env.VITE_CREDENCIALES))

      if (response.verify === false) {
         localStorage.removeItem(import.meta.env.VITE_CREDENCIALES)
         next('/')
      } else{
         next()
      }
   }

   next()
})

router.afterEach(async (to, from) => {

});

export default router