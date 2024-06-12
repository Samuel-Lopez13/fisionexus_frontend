import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { usuariosQueries } from '@/api/usuarios/usuariosQueries.js'

/* ------------------------------------------------------------------------------------------------------------------ */
/*const verify = async () =>{
   const response = await usuariosQueries.verifyUser(localStorage.getItem(import.meta.env.VITE_CREDENCIALES))

   if(response.verify === false){
      localStorage.removeItem(import.meta.env.VITE_CREDENCIALES)
   }
}

verify()*/
/* ------------------------------------------------------------------------------------------------------------------ */

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')