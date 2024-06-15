import { apiUrl, autorizationFormData} from '@/api/headers.js'
import axios from 'axios'

export const pacientesCommand = {

   postPacientes: async (nombre, edad, sexo, institucion, domicilio, codigoPostal, ocupacion, telefono, estadoCivilId, fotoPerfil) => {
      try {
         const formData = new FormData();
         formData.append("nombre", nombre);
         formData.append("edad", edad);
         formData.append("sexo", sexo);
         formData.append("institucion", institucion);
         formData.append("domicilio", domicilio);
         formData.append("codigoPostal", codigoPostal);
         formData.append("ocupacion", ocupacion);
         formData.append("telefono", telefono);
         formData.append("estadoCivilId", estadoCivilId);
         formData.append("fotoPerfil", fotoPerfil);

         const [data, config] = autorizationFormData(formData)
         const response = await axios.post(apiUrl + "Pacientes/CrearPaciente", data, config);
         return response.data;

      } catch (error) {
         if (error.response && error.response.status === 400) {
            return "El numero telefonico ya existe para otro paciente";
         }
      }
   }

}