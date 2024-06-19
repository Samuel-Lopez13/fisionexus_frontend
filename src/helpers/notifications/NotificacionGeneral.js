import Swal from 'sweetalert2'
import { ref } from 'vue'

const primaryColor = "#0062FF";

export const NotificacionesModal = {
   PantallaExito: async (msg = 'Proceso completado') => {
      return await Swal.fire({
         allowOutsideClick: false,
         allowEscapeKey: false,
         customClass: {
            popup: 'swal2-border-radius',
            confirmButton: 'btn-square-round-success'
         },
         title: `<i class="mdi mdi-check-circle-outline text-success" style="font-size:100px" >`,
         confirmButtonText: 'Aceptar',
         html: `<b> ${msg}</b>`
      })
   },
   ExitosoSimple: async (msg = 'Proceso completado con exito') => {
      return await Swal.fire({
         allowOutsideClick: false,
         allowEscapeKey: false,
         position: 'center',
         icon: 'success',
         iconColor: 'green',
         showConfirmButton: true,
         confirmButtonColor: `${primaryColor}`,
         confirmButtonText:'Aceptar',
         customClass: {
            popup: 'rounded-sm'
         },
         html: `<b class="text-lg">${msg}</b>`
      })
   }
}