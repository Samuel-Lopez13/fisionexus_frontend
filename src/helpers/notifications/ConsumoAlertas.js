import Swal from 'sweetalert2'
import { NotificacionesModal, primaryColor } from '@/helpers/notifications/NotificacionGeneral.js'
import { usuarioCommand } from '@/api/usuarios/usuariosCommand.js'
import { globalCommand } from '@/api/global/globaCommand.js'

export const notifiacionApi = {
   agendarCita: async (paciente) => {
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
              <input type="date" placeholder="Select date" class="w-full border-none focus:ring-0">
              <input type="time" min="09:00" max="18:00" value="00:00" class="w-full border-none focus:ring-0"/>
          </div>
          <div class="p-2 border-t">
              <input type="text" placeholder="Motivo de la consulta" class="w-full border-none focus:ring-0">
          </div>
          <div class="p-2 border-t flex gap-1">
              <button id="agendar-btn" class="rounded-[3px] p-2 bg-blue-600 text-white w-full hover:bg-pHover">Agendar</button>
              <button id="cancelar-btn" class="rounded-[3px] p-2 text-white bg-gray-600 w-full hover:bg-gray-500">Cancelar</button>
          </div>
        </div>
      `,
         didRender: () => {
            document.getElementById('agendar-btn').addEventListener('click', () => {
               /*NotificacionesModal.ExitosoSimple('Cita agendada con exito').then(() => {
                   Swal.close();
                });*/
            })
            document.getElementById('cancelar-btn').addEventListener('click', () => {
               Swal.close()
            })
         }
      })
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
               Swal.showValidationMessage('Todos los campos son obligatorios');
               return false;
            }
            return { nombre, correo, telefono, especialidad, foto };
         }
      });

      if (formValue) {
         const { nombre, correo, telefono, especialidad, foto } = formValue;
         try {
            let response = await usuarioCommand.agregarIntegrante(nombre, correo, telefono, especialidad, foto);
            if (response === 'Se creo el fisioterapeuta correctamente'){
               NotificacionesModal.ExitosoSimple('Se agrego un nuevo integrante')
            }else{
               NotificacionesModal.PantallaError('Ocurrio un error al agregar')
            }
         } catch (error) {
            console.log(error);
         }
      }
   }
}
