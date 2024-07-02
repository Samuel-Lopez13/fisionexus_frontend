import Swal from 'sweetalert2'
import { primaryColor } from '@/helpers/notifications/NotificacionGeneral.js'
import { fechaActual } from '@/services/verifyToken.js'

export const citasModal = {
   agendarCita: async (Paciente) => {
      const { value: formValues } = await Swal.fire({
         title: 'Agendar consulta',
         showConfirmButton: true,
         confirmButtonText: 'Agendar',
         confirmButtonColor: `${primaryColor}`,
         showCancelButton: true,
         cancelButtonText: 'Cancelar',
         customClass: {
            popup: 'rounded-sm',
            title: 'text-2xl font-semibold p-4 rounded-t-sm bg-gray-100'
         },
         html: `
             <div class="flex flex-col gap-2 px-5">
             <p>Paciente: <span class="text-blue-600"> ${Paciente}</span></p>
             <label>Fecha:</label>
             <input id="fecha" class="input-primary text-center mb-2" type="date">
             <label>Hora:</label>
             <input id="hora" class="input-primary text-center mb-2" type="time" min="09:00" max="18:00" value="00:00">
             <label>Motivo:</label>
             <input id="motivo" class="input-primary text-center" type="text" placeholder="Dolor en la rodilla">
             </div>
         `,
         didOpen: () => {
            // Establecer la fecha actual en el campo de fecha
            const fechaInput = document.getElementById('fecha');
            if (fechaInput) {
               fechaInput.value = fechaActual;
            }
         },
         preConfirm: () => {
            return {
               fecha: document.getElementById('fecha').value,
               hora: document.getElementById('hora').value,
               motivo: document.getElementById('motivo').value
            }
         }
      });

      if (formValues) {
         console.log(formValues);
         // Aquí puedes manejar los valores obtenidos del formulario
      }
   }
}
