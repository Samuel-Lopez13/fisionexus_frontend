import { apiUrl, autorizationFormData} from '@/api/headers.js'
import axios from 'axios'

export const pacientesCommand = {

   postPacientes: async (nombre, edad, sexo, institucion, domicilio, codigoPostal, ocupacion, telefono, estadoCivilId) => {
      try {
         const formData = new FormData();
         formData.append("Nombre", nombre);
         formData.append("Edad", edad);
         formData.append("Sexo", sexo);
         formData.append("Institucion", institucion);
         formData.append("Domicilio", domicilio);
         formData.append("CodigoPostal", codigoPostal);
         formData.append("Ocupacion", ocupacion);
         formData.append("Telefono", telefono);
         formData.append("EstadoCivilId", estadoCivilId);

         const [data, config] = autorizationFormData(formData)
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