import axios from 'axios'
import { apiUrl, autorization } from '@/api/headers.js'

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
         console.log(error)
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
   },

   getBuscador: async (pagina, nombre) => {
      try{
         const response = await axios.get(import.meta.env.VITE_API_LOCAL + "/Pacientes/Buscador?pagina=" + pagina + "&nombre=" + nombre, autorization())

         return response.data.pacientes
      } catch (error){
         console.log(error)
      }
   },
}