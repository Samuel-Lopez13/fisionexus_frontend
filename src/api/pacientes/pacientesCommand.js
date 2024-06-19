import { apiUrl, autorizationJSON } from '@/api/headers.js'
import axios from 'axios'
import { globalCommand } from '@/api/global/globaCommand.js'
import { NotificacionesModal } from '@/helpers/notifications/NotificacionGeneral.js'

export const pacientesCommand = {

   postPacientes: async (nombre, edad, sexo, institucion, domicilio, codigoPostal, ocupacion, telefono, estadoCivilId, foto) => {
      try {
         let img = null;

         if(foto != null)
            img = await globalCommand.postImage(nombre.trim().replace(/\s+/g, ''), foto)

         const JSON = {
            "nombre": nombre,
            "edad": edad,
            "sexo": sexo,
            "institucion": institucion,
            "domicilio": domicilio,
            "codigoPostal": codigoPostal,
            "ocupacion": ocupacion,
            "telefono": telefono,
            "estadoCivilId": estadoCivilId,
            "fotoPerfil": img == null ? img : img.secure_url
         }

         const [data, config] = autorizationJSON(JSON)
         const response = await axios.post(apiUrl + "/Pacientes", data, config);

         await NotificacionesModal.PantallaExito()
      } catch (error) {
         if (error.response.status === 400) {
            return error.response.data.detail;
         }else{
            return 'Ocurrio un error en el registro'
         }
      }
   }

}