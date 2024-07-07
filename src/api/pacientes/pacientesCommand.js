import { apiUrl, autorizationJSON } from '@/api/headers.js'
import axios from 'axios'
import { globalCommand } from '@/api/global/globaCommand.js'
import { NotificacionesModal } from '@/helpers/notifications/NotificacionGeneral.js'
import { irExpediente, irInterrogatorio, irPacientes } from '@/router/rutasUtiles.js'

export const pacientesCommand = {

   postPacientes: async (nombre, apellido, edad, sexo, institucion, domicilio, codigoPostal, ocupacion, telefono, estadoCivilId, foto) => {
      try {
         let img = null

         if (foto != null)
            img = await globalCommand.postImage(nombre.trim().replace(/\s+/g, ''), foto)

         const JSON = {
            'nombre': nombre,
            'apellido': apellido,
            'edad': edad,
            'sexo': sexo,
            'institucion': institucion,
            'domicilio': domicilio,
            'codigoPostal': codigoPostal,
            'ocupacion': ocupacion,
            'telefono': telefono,
            'estadoCivilId': estadoCivilId,
            'fotoPerfil': img == null ? img : img.secure_url
         }

         const [data, config] = autorizationJSON(JSON)
         let response = await axios.post(apiUrl + '/Pacientes', data, config)

         await NotificacionesModal.ExitosoSimple('Paciente agregado con éxito', 'Aceptar')
         irInterrogatorio(response.data.pacienteId)

         return null
      } catch (error) {
         if (error.response.status === 400) {
            if ('Ya existe un paciente con el numero telefonico ingresado' === error.response.data.detail) {
               return error.response.data.detail
            } else {
               return 'Existen campos vacios'
            }
         } else {
            return NotificacionesModal.PantallaError('Ocurrio un error en el registro')
         }
      }
   },

   postInterrogatorio: async (sexo, pacienteId, tipoInterrogatorio, responsable, padres, padresVivos, padresCausaMuerte, hermanos, hermanosVivos, hermanosCausaMuerte, hijos, hijosVivos, hijosCausaMuerte, dm, hta, cancer, alcoholismo, tabaquismo, drogas, antecedentesPatologicos, medioLaboral, medioSociocultural, medioFisicoambiental, fum, fpp, edadGestional, semanas, menarca, ritmo, gestas, partos, cesareas, abortos, cirugias, flujoVaginalId, tipoAnticonceptivoId) => {

      try {
         let interrogatorio = null
         if (sexo === 'Hombre') {
            interrogatorio = {
               pacienteId,
               tipoInterrogatorio,
               responsable,
               heredoFamiliar: {
                  padres,
                  padresVivos,
                  padresCausaMuerte,
                  hermanos,
                  hermanosVivos,
                  hermanosCausaMuerte,
                  hijos,
                  hijosVivos,
                  hijosCausaMuerte,
                  dm,
                  hta,
                  cancer,
                  alcoholismo,
                  tabaquismo,
                  drogas
               },
               antecedente: {
                  antecedentesPatologicos,
                  medioLaboral,
                  medioSociocultural,
                  medioFisicoambiental
               }
            }
         } else {
            interrogatorio = {
               pacienteId,
               tipoInterrogatorio,
               responsable,
               heredoFamiliar: {
                  padres,
                  padresVivos,
                  padresCausaMuerte,
                  hermanos,
                  hermanosVivos,
                  hermanosCausaMuerte,
                  hijos,
                  hijosVivos,
                  hijosCausaMuerte,
                  dm,
                  hta,
                  cancer,
                  alcoholismo,
                  tabaquismo,
                  drogas
               },
               antecedente: {
                  antecedentesPatologicos,
                  medioLaboral,
                  medioSociocultural,
                  medioFisicoambiental
               },
               ginecobstetricos: {
                  fum,
                  fpp,
                  edadGestional,
                  semanas,
                  menarca,
                  ritmo,
                  gestas,
                  partos,
                  cesareas,
                  abortos,
                  cirugias,
                  flujoVaginalId,
                  tipoAnticonceptivoId
               }
            }
         }

         console.log(interrogatorio)

         const [data, config] = autorizationJSON(interrogatorio)
         await axios.post(apiUrl + '/Expediente', data, config)

         await NotificacionesModal.ExitosoSimple('Datos del paciente guardados con éxito', 'Aceptar')
         irExpediente(pacienteId)

      } catch (error) {
         if (error.response.status === 400) {
            console.log('Error al cargar los archivos')
         }
      }

   },

   crearCita: async (pacienteId,fecha,hora,motivo) => {
      try {
         const JSON ={
            pacienteId,
            fecha,
            hora: hora + ':00',
            motivo
         }
         const [data, config] = autorizationJSON(JSON)
         const response = await axios.post(apiUrl + '/Date', data, config)
         return response.data
      }catch (error){
         console.log(error)
      }
   }
}