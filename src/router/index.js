import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/layouts/FormLogin.vue'
import Panel from '@/views/layouts/PanelHome.vue'
import Navegacion from '@/views/Navegacion/NavegacionView.vue'
import LayoutInicio from '@/views/Navegacion/Inicio/LayoutInicio.vue'
import LayoutPacientes from '@/views/Navegacion/Pacientes/LayoutPacientes.vue'
import LayoutMetricas from '@/views/Navegacion/Metricas/LayoutMetricas.vue'
import AgregarPaciente from '@/views/Navegacion/Pacientes/AgregarPaciente.vue'
import LayoutAjustes from '@/views/Navegacion/Ajustes/LayoutAjustes.vue'
import { usuariosQueries } from '@/api/usuarios/usuariosQueries.js'

const routes = [
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
      meta: { verifyToken: true},
      children: [
         {
            path: 'Inicio',
            name: 'Inicio',
            component: Navegacion,
            meta: {title: 'Dashboard - Fisiolabs'},
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
            meta: {title: 'Pacientes - Fisiolabs'},
            children: [
               {
                  path: '',
                  name: 'ListaPacientes',
                  component: LayoutPacientes
               },
               {
                  path: 'AgregarPaciente',
                  name: 'AgregarPaciente',
                  component: AgregarPaciente,
               }
            ]
         },
         {
            path: 'Metricas',
            name: 'Metricas',
            component: Navegacion,
            meta: {title: 'Metricas - Fisiolabs'},
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
            meta: {title: 'Ajustes - Fisiolabs'},
            redirect: { name: 'Configuracion' },
            children: [
               {
                  path: '',
                  name: 'Configuracion',
                  component: LayoutAjustes
               }
            ]
         }
      ]
   }
];
const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes
})

router.beforeEach( async (to, from, next) => {
      if (to.meta.verifyToken) {
         const token = localStorage.getItem(import.meta.env.VITE_CREDENCIALES);
         if (!token) {
            next('/');
         } else {
            usuariosQueries.verifyUser(token)
              .then(response => {
                 console.log(response + 'then')
                 if (!response || response.verify === false) {
                    console.log(response + 'en if')
                    localStorage.removeItem(import.meta.env.VITE_CREDENCIALES);
                    next('/');
                 } else {
                    console.log(response + 'En else')
                    next();
                 }
              })
              .catch(error => {
                 console.error('Error during token verification:', error);
                 localStorage.removeItem(import.meta.env.VITE_CREDENCIALES);
                 next('/');
              });
         }
      } else {
         next();
      }

   /*Cambia el titulo dependiendo de la pagina*/
   if(to.meta.title){
      document.title = to.meta.title;
   } else {
      document.title = 'Fisiolabs'; // Título por defecto
   }

   next()
})

export default router