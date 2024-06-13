import axios from 'axios'
import { autorization } from '@/api/headers.js'

const apiUrl = import.meta.env.VITE_API_URL;

export const usuariosQueries = {

   verifyUser: async (token) => {
      try{
         const response = await axios.get(apiUrl + "/User/verifyUser/" + token, autorization())

         return response.data
      } catch (error){
      }
   }

}