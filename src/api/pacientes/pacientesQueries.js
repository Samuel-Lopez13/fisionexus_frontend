import axios from 'axios'
import { apiUrl, autorization } from '@/api/headers.js'

export const pacientesQueries = {

   getPaginas: async () => {
      try{
         const response = await axios.get(apiUrl + "/Pacientes/paginas", autorization())

         return response.data
      } catch (error){

      }
   },

   getPacientes: async (pagina) => {
      try{
         const response = await axios.get(apiUrl + "/Pacientes?pagina=" + pagina, autorization())

         return response.data
      } catch (error){

      }
   },

   getUltimosPacientes: async () => {
      try{
         const response = await axios.get(apiUrl + "/Pacientes/UltimosRegistrados", autorization())

         return response.data
      } catch (error){

      }
   }
}