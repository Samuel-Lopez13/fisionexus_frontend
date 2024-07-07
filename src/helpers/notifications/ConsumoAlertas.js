import Swal from 'sweetalert2'
import { NotificacionesModal, primaryColor } from '@/helpers/notifications/NotificacionGeneral.js'
import { usuarioCommand } from '@/api/usuarios/usuariosCommand.js'
import { pacientesCommand } from '@/api/pacientes/pacientesCommand.js'

export const notifiacionApi = {
   agendarCita: async (paciente, id) => {
      return await Swal.fire({
         allowOutsideClick: false,
         allowEscapeKey: false,
         showConfirmButton: false,
         customClass: {
            popup: 'rounded-sm bg-transparent'
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
          <input type="date" id="fecha" placeholder="Select date" class="w-full border-none focus:ring-0">
          <input type="time" id="hora" min="09:00" max="18:00" value="00:00" class="w-full border-none focus:ring-0"/>
        </div>
        <div class="p-2 border-t border-b">
          <input type="text" id="motivo" placeholder="Motivo de la consulta" class="w-full border-none focus:ring-0">
        </div>
        <div>
          <p id="error" class="text-red-400 text-sm py-2" style="display: none;"></p>
        </div>
        <div class="p-2 flex gap-1">
          <button id="agendar-btn" class="rounded-[3px] p-2 bg-blue-600 text-white w-full hover:bg-pHover">Agendar</button>
          <button id="cancelar-btn" class="rounded-[3px] p-2 text-white bg-gray-600 w-full hover:bg-gray-500">Cancelar</button>
        </div>
      </div>
    `,
         didRender: () => {
            document.getElementById('agendar-btn').addEventListener('click', async () => {
               const fecha = document.getElementById('fecha').value
               const hora = document.getElementById('hora').value
               const motivo = document.getElementById('motivo').value
               const error = document.getElementById('error');

               if (!fecha || !hora || !motivo) {
                  error.innerHTML = 'Por favor, complete todos los campos';
                  error.style.display = 'block';
                  return;
               } else {
                  error.innerHTML = '';
                  error.style.display = 'none';
               }

               const agendarBtn = document.getElementById('agendar-btn');
               agendarBtn.disabled = true;
               agendarBtn.innerHTML = `
                <div class="flex gap-1 items-center justify-center">
                    <svg aria-hidden="true" class="w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                       <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg>
                  <span>Agendando</span>
                </div>`;

               try {
                  const fechaHora = new Date(`${fecha}T${hora}`).toISOString();
                  const response = await pacientesCommand.crearCita(id, fechaHora, hora, motivo);
                  console.log(id, fechaHora, hora, motivo);

                  if (response === 'Se creo la cita correctamente') {
                     NotificacionesModal.ExitosoSimple('Cita agendada con exito').then(() => {
                        Swal.close();
                     });
                  } else {
                     NotificacionesModal.PantallaError('Error al agendar la cita');
                  }
               } catch (error) {
                  NotificacionesModal.PantallaError('Ocurrió un error inesperado');
               } finally {
                  agendarBtn.disabled = false;
                  agendarBtn.innerHTML = 'Agendar';
               }
            });

            document.getElementById('cancelar-btn').addEventListener('click', () => {
               Swal.close();
            });
         }
      });
   },

   agregarUsuario: async () => {
      const { value: formValue } = await Swal.fire({
         title: 'Agregar integrante',
         allowOutsideClick: false,
         allowEscapeKey: false,
         showConfirmButton: true,
         showCancelButton: true,
         confirmButtonText: 'Agregar',
         cancelButtonText: 'Cancelar',
         confirmButtonColor: `${primaryColor}`,
         customClass: {
            popup: 'rounded-sm',
            title: 'text-xl p-5 bg-gray-100'
         },
         html: ` 
        <div class="flex flex-col gap-2">
            <label>Nombre completo</label>
            <input id="nombre" type="text" class="input-primary" placeholder="Pedro Davies">
            <label>Correo:</label>
            <input id="correo" type="text" class="input-primary" placeholder="Correo">
            <label>Telefono:</label>
            <input id="telefono" maxlength="10" type="text" class="input-primary" placeholder="Telefono">
            <label>Especialidad:</label>
            <input id="especialidad" type="text" class="input-primary" placeholder="Especialidad">
            <label>Foto:</label>
            <input id="foto" type="file" class="hover:border-blue-300 border border-gray-300 text-gray-900 text-sm rounded-[3px] focus:ring-blue-500 focus:border-blue-500 block focus:text-blue-900">
        </div> 
        `,
         preConfirm: () => {
            let nombre = document.getElementById('nombre').value
            let correo = document.getElementById('correo').value
            let telefono = document.getElementById('telefono').value
            let especialidad = document.getElementById('especialidad').value
            let foto = document.getElementById('foto').files[0]

            if (!nombre || !correo || !telefono || !especialidad || !foto) {
               Swal.showValidationMessage('Todos los campos son obligatorios')
               return false
            }
            return { nombre, correo, telefono, especialidad, foto }
         }
      })

      if (formValue) {
         const { nombre, correo, telefono, especialidad, foto } = formValue
         try {
            let response = await usuarioCommand.agregarIntegrante(nombre, correo, telefono, especialidad, foto)
            if (response === 'Se creo el fisioterapeuta correctamente') {
               NotificacionesModal.ExitosoSimple('Se agrego un nuevo integrante')
            } else {
               NotificacionesModal.PantallaError('Ocurrio un error al agregar')
            }
         } catch (error) {
            console.log(error)
         }
      }
   }
}
