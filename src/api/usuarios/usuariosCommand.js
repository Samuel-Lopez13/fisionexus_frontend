import { apiUrl, autorizationJSON, sinAutorizationJSON } from '@/api/headers.js'
import axios from 'axios'
import { irInicio } from '@/router/rutasUtiles.js'
import { globalCommand } from '@/api/global/globaCommand.js'
import { NotificacionesModal } from '@/helpers/notifications/NotificacionGeneral.js'

export const usuarioCommand = {

   /*Login*/
   login: async (username, contrasena) => {
      try {
         const JSON = {
            username: username,
            contraseña: contrasena
         }

         const [data, config] = sinAutorizationJSON(JSON)
         const response = await axios.post(apiUrl + '/Usuario/Login', data, config)

         //Se agrega la credencial al localStorage
         localStorage.setItem(import.meta.env.VITE_CREDENCIALES, response.data.accessToken)
         localStorage.setItem(import.meta.env.VITE_USUARIO, response.data.user.username)

         //Te redirecciona al Dashboard
         irInicio()

         //El return solo es para saber si, si se ejecuto correctamente
         return null
      } catch (error) {
         if (error.response.status === 400) {
            return 'Rellena los campos solicitados'
         } else if (error.response.status === 404) {
            return 'Nombre de usuario y/o contraseña incorrectos'
         }
      }
   },

   agregarIntegrante: async (nombre, correo, telefono, especialidad, cedula, foto) => {
      try {
         let img = null

         if (foto != null)
            img = await globalCommand.postImage(nombre.trim().replace(/\s+/g, ''), foto)
         const JSON = {
            nombre,
            correo,
            telefono,
            especialidad,
            cedula,
            foto: img == null ? img : img.secure_url
         }
         const [data, config] = autorizationJSON(JSON)

         await axios.post(apiUrl + '/Fisio', data, config)

         await NotificacionesModal.ExitosoSimple('Se registro correctamente el fisioterapeuta')

         //El return solo es para saber si, si se ejecuto correctamente
         return true
      } catch (error) {
         if (error.response.status === 400){
            if ('El telefono ya esta registrado' === error.response.data.detail) {
               await NotificacionesModal.PantallaError('Ya existe un usuario con este telefono')
            } else if('La cedula ya esta registrada'  === error.response.data.detail) {
               await NotificacionesModal.PantallaError('La cedula profesional ya esta registrada')
            } else {
               //El correo ya esta registrado
               await NotificacionesModal.PantallaError('Ya existe un usuario con este correo')
            }
         }
      }
   }
}