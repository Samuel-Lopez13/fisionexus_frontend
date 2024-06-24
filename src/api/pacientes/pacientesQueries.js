import axios from 'axios'
import { apiUrl, autorization } from '@/api/headers.js'
import router from '@/router/index.js'
import NotFound from '@/views/layouts/NotFound.vue'
import { irNotFound } from '@/router/rutasUtiles.js'

export const pacientesQueries = {

   getPaginas: async () => {
      try{
         const response = await axios.get(apiUrl + "/Pacientes/paginas", autorization())

         return response.data
      } catch (error){
         console.log(error)
      }
   },

   getDatosPaciente: async (id) => {
      try{
         const response = await axios.get(apiUrl + "/Pacientes/Datos?paciente=" + id, autorization())

         return response.data
      } catch (error){
         if(error.response.status === 404){
            irNotFound()
         }
      }
   },

   getPacientes: async (pagina) => {
      try{
         const response = await axios.get(apiUrl + "/Pacientes?pagina=" + pagina, autorization())

         return response.data
      } catch (error){
         console.log(error)
      }
   },

   getUltimosPacientes: async () => {
      try{
         const response = await axios.get(apiUrl + "/Pacientes/UltimosRegistrados", autorization())

         return response.data
      } catch (error){
         console.log(error)
      }
   }
}