import Swal from 'sweetalert2'
import { NotificacionesModal, primaryColor } from '@/helpers/notifications/NotificacionGeneral.js'

export const notifiacionApi = {
   agendarCita: async (paciente) => {
      return await Swal.fire({
         allowOutsideClick: false,
         allowEscapeKey: false,
         showConfirmButton: false,
         customClass: {
            popup: 'rounded-sm bg-transparent',
         },
         html: `
        <div class="rounded-sm border bg-white">
          <header class="text-gray-600 text-center p-3 border-b bg-gray-100">
              <h5 class="telefono:text-center text-lg">Agendar consulta</h5>
          </header>
          <div class="p-2 text-center border-b text-blue-600">
              <span class="text-base">${paciente}</span>
          </div>
          <div class="flex p-2 gap-2 text-gray-600">
              <input type="date" placeholder="Select date" class="w-full border-0 focus:ring-0">
              <input type="time" min="09:00" max="18:00" value="00:00" class="w-full border-0 focus:ring-0"/>
          </div>
          <div class="p-2 border-t">
              <input type="text" placeholder="Motivo de la consulta" class="w-full border-none focus:ring-0">
          </div>
          <div class="p-2 border-t flex gap-1">
              <button id="agendar-btn" class="rounded-[3px] p-2 bg-blue-600 text-white w-full hover:bg-pHover">Agendar</button>
              <button id="cancelar-btn" class="rounded-[3px]  p-2 text-white bg-gray-600 w-full hover:bg-gray-500">Cancelar</button>
          </div>
        </div>
      `,
         didRender: () => {
            document.getElementById('agendar-btn').addEventListener('click', () => {
              NotificacionesModal.ExitosoSimple('Cita agendada con exito').then(() => {
                  Swal.close();
               });
            });
            document.getElementById('cancelar-btn').addEventListener('click', () => {
               Swal.close();
            });
         },
      });
   },
   agregarUsuario: async ()=>{
      return Swal.fire({
         title:'Agregar integrante',
         allowOutsideClick: false,
         allowEscapeKey: false,
         showConfirmButton: true,
         showCancelButton: true,
         confirmButtonText:'Agregar',
         cancelButtonText:'Cancelar',
         confirmButtonColor: `${primaryColor}`,
         customClass: {
            popup: 'rounded-sm',
            title: 'text-xl p-5 bg-gray-100'
         },
         html: ` 
 <div class="flex flex-col gap-2">
            <label>Nombre completo</label>
            <input type="text" class="input-primary" placeholder="Pedro Davies">
            <label>Correo:</label>
            <input type="text" class="input-primary" placeholder="Correo">
            <label>Telefono:</label>
            <input type="text" class="input-primary" placeholder="Telefono">
            <label>Especialidad:</label>
            <input type="text" class="input-primary" placeholder="Especialidad">
            <label>Foto:</label>
            <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50  focus:outline-none" aria-describedby="file_input_help" id="file_input" type="file">
</div> 
          `
      })
   }
}
