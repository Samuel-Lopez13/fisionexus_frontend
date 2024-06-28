import axios from 'axios'
import { apiUrl, autorization } from '@/api/headers.js'

export const pacientesQueries = {

   //Devuelve una lista de pacientes
   getPacientes: async (pagina) => {
      try{
         const response = await axios.get(apiUrl + "/Pacientes?pagina=" + pagina, autorization())

         return response.data
      } catch (error){
         console.log(error)
      }
   },

   //Buscador de pacientes
   getBuscador: async (pagina, nombre) => {
      try{
         const response = await axios.get(apiUrl + "/Pacientes/Buscador?pagina=" + pagina + "&nombre=" + nombre, autorization())

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

   getUltimosPacientes: async () => {
      try{
         const response = await axios.get(apiUrl + "/Pacientes/UltimosRegistrados", autorization())

         return response.data
      } catch (error){
         console.log(error)
      }
   },

   getPerfil: async (id) => {
      try{
         const response = await axios.get(apiUrl + "/Pacientes/Paciente?id=" + id, autorization())
         console.log(response)
         return response.data
      } catch (error){
         console.log(error.data)
      }
   },
}