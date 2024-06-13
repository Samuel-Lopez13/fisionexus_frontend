import { usuariosQueries } from '@/api/usuarios/usuariosQueries.js'

export const verify = async () =>{
   /* Verifica que el token JWT sea correcto */
   const response = await usuariosQueries.verifyUser(localStorage.getItem(import.meta.env.VITE_CREDENCIALES))
   return response
}