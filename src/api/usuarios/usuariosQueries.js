import axios from 'axios'
import { apiUrl, autorization } from '@/api/headers.js'

export const usuariosQueries = {

   verifyUser: async (token) => {
      try{
         const response = await axios.get(apiUrl + "/Usuario/verifyUser/" + token, autorization())

         return response.data
      } catch (error){

      }
   }

}