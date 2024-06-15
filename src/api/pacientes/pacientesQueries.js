import axios from 'axios'
import { autorization } from '@/api/headers.js'

const apiUrl = import.meta.env.VITE_API_URL;

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