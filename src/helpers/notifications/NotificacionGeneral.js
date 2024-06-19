import Swal from 'sweetalert2'

export const NotificacionesModal = {
   PantallaExito: async (msg = 'Proceso completado') => {
      return await Swal.fire({
         allowOutsideClick: false,
         allowEscapeKey   : false,
         customClass      : {
            popup        : "swal2-border-radius",
            confirmButton: 'btn-square-round-success'
         },
         title            : `<i class="mdi mdi-check-circle-outline text-success" style="font-size:100px" >`,
         confirmButtonText: 'Aceptar',
         html              : `<b> ${msg}</b>`,
      })
   },
}