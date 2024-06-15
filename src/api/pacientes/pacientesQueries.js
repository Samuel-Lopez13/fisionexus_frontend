import axios from 'axios'
import { apiUrl, autorization } from '@/api/headers.js'

export const pacientesQueries = {

   getPacientes: async (pagina) => {
      try{
         const response = await axios.get(apiUrl + "/Pacientes/Pacientes?pagina=" + 1, autorization())

         return response.data
      } catch (error){

      }
   },

   getUltimosPacientes: async () => {
      try{
         const response = await axios.get(apiUrl + "/Pacientes/UltimosPacientes", autorization())

         return response.data
      } catch (error){

      }
   }
}