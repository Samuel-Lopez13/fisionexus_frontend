<script setup>
import SignosVitales from '@/components/PacientesComponents/SignosVitales/SignosPost.vue'
import DatosDiagnostico from '@/components/PacientesComponents/Diagnostico/DatosDiagnostico.vue'
import MapaCorporal from '@/components/PacientesComponents/Diagnostico/MapaCorporal.vue'
import { useRoute } from 'vue-router'
import { nextTick, onMounted, ref } from 'vue'
import { pacientesQueries } from '@/api/pacientes/pacientesQueries.js'
import { usuariosQueries } from '@/api/usuarios/usuariosQueries.js'
import router from '@/router/index.js'
import { NotificacionesModal } from '@/helpers/notifications/NotificacionGeneral.js'
import { notifiacionApi } from '@/helpers/notifications/ConsumoAlertas.js'
import AltaUsuario from '@/components/PacientesComponents/Diagnostico/AltaUsuario.vue'
import { pacientesCommand } from '@/api/pacientes/pacientesCommand.js'

const route = useRoute()
let nombre = ref('')
let sexo = ref('')
let apellido = ref('')
let pacienteId = ref(route.params.id)
let expedienteId = ref(null)
let loader = ref(false)
let imagen = ref(null)
let fechaNacimiento = ref(null)
let edad = ref(null)
let fisios = ref([])
let citaInicial = ref(true)
let notaFinal = ref(false)

//REVISADO POR
let fisioterapeutaId = ref('ZLeVXm9L5Ykz14x8')
let comprobantePago = ref(null)

//SIGNOS VITALES
let temperatura = ref(null)
let fr = ref(null)
let fc = ref(null)
let presionArterial = ref(null)
let peso = ref(null)
let estatura = ref(null)
let imc = ref(null)
let indiceCinturaCadera = ref(null)
let saturacionoxigeno = ref(null)
//MAPA CORPORAL
let valores = ref(null)
let rangoDolor = ref(null)
let nota = ref(null)

//DATOS DIAGNOSTIC
let diagnostico = ref(null)
let refiere = ref(null)
let categoria = ref(null)
let diagnosticoPrevio = ref(null)
let terapeuticaEmpleada = ref(null)
let diagnosticoFuncional = ref(null)
let padecimientoActual = ref(null)
let inspeccion = ref(null)
let palpitacion = ref(null)
let movibilidad = ref(null)
let estudiosComplementarios = ref(null)
let diagnosticoNosologico = ref(null)

//DATOS PROGRAM
let cortoPlazo = ref(null)
let medianoPlazo = ref(null)
let largoPlazo = ref(null)
let tratamientoFisioterapeutico = ref(null)
let sugerencias = ref(null)
let pronostico = ref(null)

onMounted(() => {
    datosPaciente()
    getExpediente()
})

const getExpediente = async ()=>{
    let response = await pacientesQueries.getExpediente(pacienteId.value)
    expedienteId.value = response.expedienteId
}
const datosPaciente = async () => {
    loader.value = true
    let response = await pacientesQueries.getDatosPaciente(pacienteId.value)
    nombre.value = response.nombre
    apellido.value = response.apellido
    imagen.value = response.fotoPerfil
    fechaNacimiento.value = response.fechaNacimiento.substring(0, 10).replace(/-/g, '/').split('/').reverse().join('/')
    edad.value = response.edad
    if (response.sexo === false) {
        sexo.value = 'Mujer'
    } else {
        sexo.value = 'Hombre'
    }
    loader.value = false
}

const revisionNueva = async () => {
    await notifiacionApi.subirRevision()
}

const verFisios = async () => {
    fisios.value = await usuariosQueries.getFisios()
}

/* Scroll para terminar el diagnostico */

const container = ref(null)
const final = ref(null)

const irFinal = () => {
    notaFinal.value = true

    nextTick().then(() => {
        if (final.value) {
            final.value.scrollIntoView({ behavior: 'smooth' })
        }
    })
}
/* Confirmación de finalizacion */

const finalizarDiagnostico = () => {
    irFinal()
}

const diagnosticoListo = async () => {
    const pregunta = await NotificacionesModal.PantallaWarning('¿Estas seguro que deseas concluir el caso?')

    if (pregunta.isConfirmed)
        console.log('Se termino el diagnostico')
}

const ejecucionFinal = () => {
    if (notaFinal.value)
        diagnosticoListo()
    else
        finalizarDiagnostico()
}

const obtenerSignos = (datos) => {
    temperatura.value = datos.temperatura
    fr.value = datos.fr
    fc.value = datos.fc
    presionArterial.value = datos.presionArterial
    peso.value = datos.peso
    estatura.value = datos.estatura
    imc.value = datos.imc
    indiceCinturaCadera.value = datos.indiceCinturaCadera
    saturacionoxigeno.value = datos.saturacionOxigeno
}

const obtenerMapa = (datos) => {
    valores.value = datos.valores
    rangoDolor.value = datos.rangoDolor
    nota.value = datos.notas

    console.log(valores.value)
    console.log(rangoDolor.value)
    console.log(nota.value)
}

const obtenerDiagnostic = (datos) => {
    diagnostico.value = datos.diagnostico
    refiere.value = datos.refiere
    categoria.value = datos.categoria
    diagnosticoPrevio.value = datos.diagnosticoPrevio
    terapeuticaEmpleada.value = datos.terapeuticaEmpleada
    diagnosticoFuncional.value = datos.diagnosticoFuncional
    padecimientoActual.value = datos.padecimientoActual
    inspeccion.value = datos.inspeccion
    palpitacion.value = datos.palpitacion
    movibilidad.value = datos.movibilidad
    estudiosComplementarios.value = datos.estudiosComplementarios
    diagnosticoNosologico.value = datos.diagnosticoNosologico

    cortoPlazo.value = datos.cortoPlazo
    medianoPlazo.value = datos.medianoPlazo
    largoPlazo.value = datos.largoPlazo
    tratamientoFisioterapeutico.value = datos.tratamientoFisioterapeutico
    sugerencias.value = datos.sugerencias
    pronostico.value = datos.pronostico

    console.log(diagnostico.value)
}

const enviarDiagnostico = async () => {
    let response = await pacientesCommand.postDiagnostico(
        expedienteId.value,
        temperatura.value,
        fr.value,
        fc.value,
        presionArterial.value,
        peso.value,
        estatura.value,
        imc.value,
        indiceCinturaCadera.value,
        saturacionoxigeno.value,
        valores.value,
        rangoDolor.value,
        nota.value,
        diagnostico.value,
        refiere.value,
        categoria.value,
        diagnosticoPrevio.value,
        terapeuticaEmpleada.value,
        diagnosticoFuncional.value,
        padecimientoActual.value,
        inspeccion.value,
        palpitacion.value,
        movibilidad.value,
        estudiosComplementarios.value,
        diagnosticoNosologico.value,
        cortoPlazo.value,
        medianoPlazo.value,
        largoPlazo.value,
        tratamientoFisioterapeutico.value,
        sugerencias.value,
        pronostico.value,
        fisioterapeutaId.value,
        'Comprobante'
    )

    if(response === 'Se creo el diagnostico correctamente'){
        console.log('Jalo')
    }
    else {
        console.log('Valio verga')
    }
}
/*const mostrar = () => {
    console.log(
        estatura.value,
        peso.value,
        temperatura.value,
        fc.value,
        fr.value,
        presionArterial.value,
        saturacionoxigeno.value,
        indiceCinturaCadera.value,
        imc.value,
    )
}*/

</script>

<template>
    <div class="flex gap-3 tablet:flex-wrap tablet:gap-0 telefono:flex-wrap">
        <section class="desktop:w-3/12 laptop:w-3/12 tablet:w-full telefono:w-full">
            <div class="sticky top-0 flex flex-col gap-2">
                <div
                    class="flex gap-2 py-3 px-2 border shadow-sm rounded-sm items-center telefono:flex-col animate-pulse"
                    v-if="loader">
                    <div class="h-12 w-12 rounded-full bg-blue-300"></div>
                    <div class="flex-1">
                        <div class="h-4 w-[90%] rounded-lg bg-blue-300 text-sm mb-1"></div>
                        <div class="h-4 w-3/5 rounded-lg bg-blue-300 text-lg"></div>
                    </div>
                </div>
                <header v-else
                        class="flex gap-2 py-3 px-2 border shadow-sm rounded-sm items-center telefono:flex-col">
                    <div>
                        <img
                            :src="imagen"
                            class="rounded-full h-12 w-12">
                    </div>
                    <div class="text-gray-600">
                        <h4 class="font-bold">{{ nombre + ' ' + apellido }} <span class="text-blue-500">({{ sexo
                            }})</span></h4>
                        <div class="flex text-sm text-blue-800">
                            <p>{{ fechaNacimiento }} - <span>{{ edad }} años</span></p>
                        </div>
                    </div>
                </header>
                <div>
                    <signos-vitales @signos="obtenerSignos" />
                </div>
                <div
                    class="flex items-center w-full text-left rtl:text-right text-black bg-gray-100 border px-6 py-3 telefono:text-center">
                    <p>Motivo: <span class="text-blue-600">Dolor de espalda</span></p>
                </div>
                <div v-show="citaInicial">
                    <button class="input-primary" @click="ejecucionFinal()"><span class="text-gray-600">Finalizar</span>
                    </button>
                </div>
            </div>
        </section>
        <section ref="container"
                 class="overflow-y-auto flex-col flex gap-5 style_scroll desktop:w-6/12 laptop:w-8/12 tablet:w-full telefono:w-full">
            <mapa-corporal @mapaC="obtenerMapa"></mapa-corporal>
            <datos-diagnostico @datosDiagnostico="obtenerDiagnostic" />
            <div ref="final" v-show="notaFinal">
                <AltaUsuario></AltaUsuario>
            </div>
        </section>
        <section class="laptop:w-3/12 tablet:w-full telefono:w-full desktop:w-3/12">
            <!--Firma y refiere-->
            <div v-show="!citaInicial" class="sticky top-0 flex flex-col gap-2 telefono:mb-2">
                <h3 class="text-gray-600 text-lg font-semibold mb-2 tablet:mt-3">Datos para finalizar</h3>
                <div class="basis-2/4">
                    <label class="block mb-2 text-sm font-medium">Fisioterapeuta<span
                        class="text-blue-600">*</span></label>
                    <input type="text" list="fisios" class="input-primary" placeholder="Ingrese su nombre" v-model="fisioterapeutaId"
                           @focus="verFisios">
                    <datalist id="fisios">
                        <option v-for="fisio in fisios" :key="fisio.id" :value="fisio.fisioterapeutaId"> {{ fisio.nombre }}
                        </option>
                    </datalist>
                </div>
                <div class="basis-2/4">
                    <label class="block mb-2 text-sm font-medium">Cédula profesional
                        <span class="text-blue-600">*</span></label>
                    <input type="text"
                           class="input-primary"
                           placeholder="Ingrese la cédula profesional"
                           maxlength="5" />
                </div>
                <div class="basis-2/4">
                    <label class="block mb-2 text-sm font-medium">Comprobante de pago
                        <span class="text-blue-600">*</span></label>
                    <input type="file"
                           placeholder="Ingrese la cédula profesional"
                           class="border border-gray-300 hover:border-blue-300 rounded-[3px] text-sm text-gray-500 w-full"
                           maxlength="5" />
                </div>
                <section class="telefono:w-full flex flex-col items-center pt-2">
                    <button class="button-primary w-full" @click="enviarDiagnostico">Finalizar</button>
                    <a class="text-blue-700 p-2 underline hover:text-gray-500 telefono:basis-full cursor-pointer"
                       @click="router.back()">Volver</a>
                </section>
            </div>
            <div v-show="citaInicial">
                <div>
                    <button @click="revisionNueva" class="button-primary w-full mb-4">Nueva revisión</button>
                    <h3 class="text-gray-600 text-lg font-semibold mb-3">Revisiones</h3>
                </div>
                <ul class="relative border-s border-gray-200 w-[400px] telefono:w-full tablet:w-full">
                    <li class="pl-6 pb-6" v-for="loead in 3">
                        <div
                            class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
                        <time class="mb-1 text-sm font-normal leading-none text-gray-400">
                            18/04/2024 14:30 hrs.
                        </time>
                        <div class="w-full flex items-end gap-2">
                            <h3 class="font-semibold text-gray-900">Descargar comprobante</h3>
                            <div class="hover:text-blue-600" role="button" title="Descargar comprobante de pago">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke-width="1.5"
                                     stroke="currentColor" class="size-5">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            </div>
                        </div>
                        <div class="flex items-center gap-2 text-gray-500">
                            <p>Esto es un texto de prueba para ver como se comporta el input que agrega todo esto, al
                                parecer me esta dejando bastante espacio, no se porque
                                pero bueno, sigo escribiendo a ver como queda asi que sigo sigo y sigo
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    </div>
</template>

<style scoped>
</style>
