<script setup>
import { irEditarPaciente, irExpediente, irInterrogatorio } from '@/router/rutasUtiles.js'
import { onMounted, ref, watch } from 'vue'
import { pacientesQueries } from '@/api/pacientes/pacientesQueries.js'
import { NotificacionesModal } from '@/helpers/notifications/NotificacionGeneral.js'
import { notifiacionApi } from '@/helpers/notifications/ConsumoAlertas.js'

let props = defineProps({
    pagina: Number,
    buscador: String
})

let pacientes = ref([])
let paginas = ref(null)
let paginaActual = ref(1)
let ultimaPagina = ref(null)
let totalPacientes = ref(null)
let inicioPaciente = ref(null)
let finalPaciente = ref(null)
let buscador = ref(props.buscador)
let loader = ref(false)

//El watch sera para we este a la escucha de que el props cambie
watch(() => props.buscador, (newVal) => {
    buscador.value = newVal
    obtenerTablaPacientes(1)
})

onMounted(() => {
    obtenerTablaPacientes(1)
})

let actualizar = ref(true)

const paginacion = (page) => {
    ultimaPagina.value = page

    muestraPacientes(paginaActual, totalPacientes.value)

    if (page > 5) {
        let alto = page - 1

        let inicial = Math.max(1, paginaActual.value - 2)

        if (paginas.value !== null) {
            /* Hacia adelante */
            let posicion = paginas.value[3]

            if (posicion <= paginaActual.value) {
                actualizar.value = true
                if (paginaActual.value === page - 1) {
                    inicial = Math.max(1, paginaActual.value - 3)
                }
            }

            if (posicion === alto) {
                actualizar.value = false
            }

            /* Hacia atras */
            posicion = paginas.value[1]

            if (posicion >= paginaActual.value) {
                actualizar.value = true
            }
        }

        if (actualizar.value) {
            paginas.value = Array.from({ length: 5 }, (_, index) => inicial + index)
            actualizar.value = false
        }
    } else {
        paginas.value = Array.from({ length: page }, (_, index) => index + 1)
    }
}

const muestraPacientes = (pagina, total) => {
    inicioPaciente.value = pagina.value === 1 ? '1' : (pagina.value - 1) + '1'
    finalPaciente.value = paginaActual.value === Math.ceil(total / 10) ? (pagina.value - 1) + '' + (total % 10) : pagina.value + '0'
}

const obtenerTablaPacientes = async (pagina) => {
    loader.value = true
    paginaActual.value = pagina
    //Si el buscador no hay nada devolvera todos los pacientes
    if (props.buscador.length > 0) {
        let searching = await pacientesQueries.getBuscador(pagina, buscador.value)
        //Este es el numero de paginas total
        pacientes.value = searching.pacientes
        //Para cuando busquemos algo por defecto inicie en la pagina 1
        //paginaActual.value = 1;
        //Nos pintara las paginas
        paginacion(searching.numPaginas)
        totalPacientes.value = searching.total
    } else {
        let getAll = await pacientesQueries.getPacientes(pagina)
        pacientes.value = getAll.pacientes
        paginacion(getAll.numPaginas)
        totalPacientes.value = getAll.total
    }
    loader.value = false
}

const citas = async (id) => {
    const pregunta = await NotificacionesModal.PantallaWarning('Es necesario realizar el interrogatorio a este paciente', 'Continuar', 'Despues')
    if (pregunta.isConfirmed) {
        irInterrogatorio(id)
    }
}

const eliminar = async (id, nombre) => {
    const pregunta = await NotificacionesModal.PantallaEliminar(`¿Desea eliminar a este paciente: ${nombre}?`)
    if (pregunta.isConfirmed) {
        let respuesta = await pacientesQueries.eliminarPaciente(id)
        if (respuesta === 200) {
            await NotificacionesModal.ExitosoSimple('El paciente se elimino correctamente')
            if (pacientes.value.length === 1) {
                obtenerTablaPacientes(paginaActual.value - 1)
            } else {
                await obtenerTablaPacientes(paginaActual.value)
                finalPaciente.value -= 1
            }
        } else {
            NotificacionesModal.PantallaError('Ocurrio un error al eliminar al paciente')
        }
    }
}

</script>

<template>
    <div class=" overflow-x-auto mb-5 style_scroll">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 border-b">
            <tr>
                <th scope="col" class="w-5/12 py-3 px-2 telefono:p-4">Nombre</th>
                <th scope="col" class="w-2/12 py-3 telefono:p-4">Edad</th>
                <th scope="col" class="w-2/12 py-3 telefono:p-4">Sexo</th>
                <th scope="col" class="w-2/12 py-3 telefono:p-4">Teléfono</th>
                <th scope="col" class="w-1/12 py-3 telefono:p-4"></th>
            </tr>
            </thead>
            <tbody>
            <tr class="hover:bg-gray-50 hover:text-blue-500 border-b" v-for="paciente in pacientes" :key="paciente.id">
                <td class="py-3 telefono:p-4 truncate px-2">{{ paciente.nombre }}</td>
                <td class="py-3 telefono:p-4">{{ paciente.edad }}</td>
                <td class="py-3 telefono:p-4">{{ paciente.sexo }}</td>
                <td class="py-3 telefono:p-4">{{ paciente.telefono }}</td>
                <td class="py-3 telefono:p-4 flex gap-2">
                    <svg class="hover:stroke-green-500 cursor-pointer" width="28px" stroke="#758CA3"
                         v-if="paciente.verificado === true"
                         @click="notifiacionApi.agendarCita(paciente.nombre, paciente.pacienteId)"
                         viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="1" width="38" height="38" rx="19" stroke-width="2" />
                        <path d="M11.5 20H28.5M20 11.5V28.5" stroke-width="2" stroke-linecap="round"
                              stroke-linejoin="round" />
                    </svg>
                    <svg v-else class="hover:stroke-green-500 cursor-pointer" width="28px" stroke="#758CA3"
                         @click="citas(paciente.pacienteId)"
                         viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="1" width="38" height="38" rx="19" stroke-width="2" />
                        <path d="M11.5 20H28.5M20 11.5V28.5" stroke-width="2" stroke-linecap="round"
                              stroke-linejoin="round" />
                    </svg>
                    <svg @click="irEditarPaciente(paciente.pacienteId)" class="hover:stroke-blue-500 cursor-pointer"
                         stroke="#758CA3" width="28px"
                         viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="1" width="38" height="38" rx="19" stroke-width="2" />
                        <path
                            d="M25.5 18.5L28.5 15.5L24.5 11.5L21.5 14.5M25.5 18.5L15.5 28.5H11.5V24.5L21.5 14.5M25.5 18.5L21.5 14.5"
                            stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <svg v-if="paciente.verificado === false" @click="citas(paciente.pacienteId)"
                         class="hover:stroke-blue-500 cursor-pointer"
                         stroke="#758CA3" width="28px"
                         viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="1" width="38" height="38" rx="19" stroke-width="2" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M20 20C18.116 20 16.5838 18.4751 16.5838 16.6C16.5838 14.7249 18.116 13.2 20 13.2C21.884 13.2 23.4162 14.7249 23.4162 16.6C23.4162 18.4751 21.884 20 20 20ZM23.2095 20.572C24.5649 19.4866 25.3549 17.7313 25.0645 15.8094C24.7272 13.5799 22.8636 11.7958 20.6141 11.5357C17.5096 11.1761 14.8757 13.5816 14.8757 16.6C14.8757 18.2065 15.6239 19.6379 16.7905 20.572C13.9243 21.6439 11.8319 24.1607 11.5039 27.5573C11.4561 28.0597 11.8498 28.5 12.3571 28.5C12.7918 28.5 13.1625 28.1736 13.2009 27.7426C13.5434 23.9491 16.4617 21.7 20 21.7C23.5383 21.7 26.4566 23.9491 26.7991 27.7426C26.8375 28.1736 27.2082 28.5 27.6429 28.5C28.1502 28.5 28.5439 28.0597 28.4961 27.5573C28.1681 24.1607 26.0757 21.6439 23.2095 20.572Z"
                              fill="#758CA3" />
                    </svg>
                    <svg v-else @click="irExpediente(paciente.pacienteId)" class="hover:stroke-blue-500 cursor-pointer"
                         stroke="#758CA3" width="28px"
                         viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="1" width="38" height="38" rx="19" stroke-width="2" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M20 20C18.116 20 16.5838 18.4751 16.5838 16.6C16.5838 14.7249 18.116 13.2 20 13.2C21.884 13.2 23.4162 14.7249 23.4162 16.6C23.4162 18.4751 21.884 20 20 20ZM23.2095 20.572C24.5649 19.4866 25.3549 17.7313 25.0645 15.8094C24.7272 13.5799 22.8636 11.7958 20.6141 11.5357C17.5096 11.1761 14.8757 13.5816 14.8757 16.6C14.8757 18.2065 15.6239 19.6379 16.7905 20.572C13.9243 21.6439 11.8319 24.1607 11.5039 27.5573C11.4561 28.0597 11.8498 28.5 12.3571 28.5C12.7918 28.5 13.1625 28.1736 13.2009 27.7426C13.5434 23.9491 16.4617 21.7 20 21.7C23.5383 21.7 26.4566 23.9491 26.7991 27.7426C26.8375 28.1736 27.2082 28.5 27.6429 28.5C28.1502 28.5 28.5439 28.0597 28.4961 27.5573C28.1681 24.1607 26.0757 21.6439 23.2095 20.572Z"
                              fill="#758CA3" />
                    </svg>
                    <svg @click="eliminar(paciente.pacienteId,paciente.nombre)"
                         class="hover:stroke-red-500 cursor-pointer" stroke="#758CA3" width="28px"
                         viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="1" width="38" height="38" rx="19" stroke-width="2" />
                        <path d="M17.875 18.9375V25.3125" stroke-width="2" stroke-linecap="round"
                              stroke-linejoin="round" />
                        <path d="M22.125 18.9375V25.3125" stroke-width="2" stroke-linecap="round"
                              stroke-linejoin="round" />
                        <path d="M11.5 14.6875H28.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path
                            d="M13.625 14.6875H20H26.375V26.375C26.375 28.1355 24.948 29.5625 23.1875 29.5625H16.8125C15.0521 29.5625 13.625 28.1355 13.625 26.375V14.6875Z"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path
                            d="M16.8125 12.5625C16.8125 11.3889 17.7639 10.4375 18.9375 10.4375H21.0625C22.2361 10.4375 23.1875 11.3889 23.1875 12.5625V14.6875H16.8125V12.5625Z"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
    <div class="flex justify-between relative">
        <!-- --------------------------------------------- Area Botones --------------------------------------------- -->
        <div class="relative flex items-center text-gray-600 button-with-hover group">
            <button class="group-hover:text-blue-600 flex gap-2 items-center" :disabled="paginaActual === 1"
                    @click="obtenerTablaPacientes(1)">
                <svg class="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                     viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M5 1 1 5l4 4" />
                </svg>
                <svg class="w-3 h-3 rtl:rotate-180 desktop:hidden laptop:hidden tablet:hidden" aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M5 1 1 5l4 4" />
                </svg>
                <p class="telefono:hidden">Inicio</p>
            </button>
        </div>
        <div class="flex items-center h-[20px] text-gray-600 gap-3">
            <button @click="obtenerTablaPacientes(paginaActual - 1)" :disabled="paginaActual === 1"
                    class="hover:text-blue-600">
                <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M5 1 1 5l4 4" />
                </svg>
            </button>
            <button class="relative pr-2 pl-2" v-for="pagina in paginas" :key="pagina.pacienteId"
                    :class="{'hover:text-blue-600': pagina !== paginaActual, 'border-blue-600 border-b text-blue-600': pagina === paginaActual}"
                    @click="obtenerTablaPacientes(pagina)">{{ pagina }}
            </button>
            <button @click="obtenerTablaPacientes(paginaActual + 1);" :disabled="paginaActual === ultimaPagina"
                    class="hover:text-blue-600">
                <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="m1 9 4-4-4-4" />
                </svg>
            </button>
        </div>
        <div class="relative flex items-center text-gray-600 button-with-hover group">
            <button class="group-hover:text-blue-600 flex gap-2 items-center" :disabled="paginaActual === ultimaPagina"
                    @click="obtenerTablaPacientes(ultimaPagina)">
                <p class="telefono:hidden">Ultimo</p>
                <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                     fill="#FFFFFF"
                     viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="m1 9 4-4-4-4" />
                </svg>
                <svg class="w-2.5 h-2.5 rtl:rotate-180 desktop:hidden laptop:hidden tablet:hidden" aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="m1 9 4-4-4-4" />
                </svg>
            </button>
        </div>
    </div>
    <div class="w-full mt-4 flex items-center gap-4 telefono:justify-center">
        <span class="text-sm text-blue-800">Mostrando {{ inicioPaciente }} - {{ finalPaciente
            }} pacientes de {{ totalPacientes }}</span>
        <svg v-if="loader" aria-hidden="true"
             class="w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
             viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor" />
            <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill" />
        </svg>
    </div>
</template>

<style scoped>
</style>