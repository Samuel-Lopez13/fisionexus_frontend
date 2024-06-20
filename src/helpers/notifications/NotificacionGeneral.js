import Swal from 'sweetalert2'

const primaryColor = '#0062FF'

export const NotificacionesModal = {
   ExitosoSimple: async (msg = 'Proceso completado con exito', textBtn = 'Aceptar') => {
      return await Swal.fire({
         allowOutsideClick: false,
         allowEscapeKey: false,
         position: 'center',
         icon: 'success',
         iconColor: 'green',
         showConfirmButton: true,
         confirmButtonColor: `${primaryColor}`,
         confirmButtonText: textBtn,
         customClass: {
            popup: 'rounded-sm'
         },
         html: `<b class="text-lg">${msg}</b>`
      })
   },
   PantallaError: async (msg = 'Error') => {
      return await Swal.fire({
         allowOutsideClick: false,
         allowEscapeKey: false,
         position: 'center',
         icon: 'error',
         iconColor: 'red',
         showConfirmButton: true,
         confirmButtonColor: `${primaryColor}`,
         confirmButtonText: 'Aceptar',
         customClass: {
            popup: 'rounded-sm'
         },
         html: `<b class="text-lg">${msg}</b>`
      })
   }

}