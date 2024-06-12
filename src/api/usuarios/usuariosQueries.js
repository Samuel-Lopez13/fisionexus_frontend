import axios from 'axios'
import { autorization } from '@/api/headers.js'

export const usuariosQueries = {

   verifyUser: async (token) => {
      try{
         const response = await axios.get(import.meta.env.VITE_API_LOCAL + "/User/verifyUser/" + token, autorization())

         return response.data
      } catch (error){
      }
   }

}