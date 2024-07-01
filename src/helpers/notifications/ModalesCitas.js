import Swal from 'sweetalert2'
import { primaryColor } from '@/helpers/notifications/NotificacionGeneral.js'

export const citasModal = {
   agendarCita: async (Paciente) =>{
      return await Swal.fire({
         title: 'Agendar consulta',
         showConfirmButton: true,
         confirmButtonText: 'Agendar',
         confirmButtonColor:`${primaryColor}`,
         showCancelButton: true,
         cancelButtonText:'Cancelar',
         customClass:{
            popup: 'rounded-sm',
            title: 'text-2xl font-semibold p-4 rounded-t-sm bg-gray-100'
         },
         html: `
             <div class="flex flex-col gap-2">
             <p>Paciente: <span class="text-blue-600"> ${Paciente}</span></p>
             <div>
             <label>Fecha:</label>
             <input class="input-primary text-center mb-2" type="date">
             <label>Hora:</label>
             <input class="input-primary text-center mb-2" type="time" min="09:00" max="18:00" value="00:00">
             </div>
             <label>Motivo:</label>
             <input class="input-primary text-center" type="text" placeholder="Dolor en la rodilla">
             </div>
`
      })
   }
}
