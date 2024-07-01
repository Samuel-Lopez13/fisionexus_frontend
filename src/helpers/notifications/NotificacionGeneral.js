import Swal from 'sweetalert2'

export const primaryColor = '#0062FF'
export const cancelColor = '#ce4257'

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
         html: `<p class="text-lg font-semibold">${msg}</p>`
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
         html: `<p class="text-lg font-semibold">${msg}</p>`
      })
   },
   PantallaWarning: async (msg = 'Warning', msgAceptar = 'Aceptar', msgNegar = 'Cancelar') => {
      return await Swal.fire({
         allowOutsideClick: false,
         allowEscapeKey: false,
         position: 'center',
         icon: 'warning',
         showConfirmButton: true,
         confirmButtonColor: `${primaryColor}`,
         confirmButtonText: msgAceptar,
         showCancelButton: true,
         cancelButtonText: msgNegar,
         customClass: {
            popup: 'rounded-sm',
            cancelButton: 'rounded-sm',
            confirmButton: 'rounded-sm'
         },
         html: `<p class="text-lg font-semibold">${msg}</p>`
      })
   },
   PantallaEliminar: async (msg = 'Eliminar', msgAceptar = 'Aceptar', msgNegar = 'Cancelar') => {
      return await Swal.fire({
         allowOutsideClick: false,
         allowEscapeKey: false,
         position: 'center',
         icon: 'error',
         iconHtml:`
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10">
  <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
</svg>
         `,
         iconColor: `${cancelColor}`,
         showConfirmButton: true,
         confirmButtonColor: `${primaryColor}`,
         confirmButtonText: msgAceptar,
         showCancelButton: true,
         cancelButtonText: msgNegar,
         cancelButtonColor:`${cancelColor}`,
         customClass: {
            popup: 'rounded-sm',
            cancelButton: 'rounded-sm',
            confirmButton: 'rounded-sm'
         },
         html: `<p class="text-lg font-semibold">${msg}</p>`
      })
   }


}