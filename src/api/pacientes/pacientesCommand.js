import { apiUrl, autorizationJSON } from '@/api/headers.js'
import axios from 'axios'
import { globalCommand } from '@/api/global/globaCommand.js'

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
         const response = await axios.post(apiUrl + "/Pacientes/CrearPaciente", data, config);

         return response.data;
      } catch (error) {
         if (error.response && error.response.status === 400) {
            return "El numero telefonico ya existe para otro paciente";
         }else{
            return 'Ocurrio un error en el registro'
         }
      }
   }

}