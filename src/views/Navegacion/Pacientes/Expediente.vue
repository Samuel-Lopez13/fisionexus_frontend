<script setup>
import SignosVitales from '@/components/PacientesComponents/SignosVitales.vue'
import InterrogatorioExpediente from '@/components/PacientesComponents/InterrogatorioExpediente.vue'
import CardCitas from '@/components/PacientesComponents/CardCitas.vue'
import CardCitaExpediente from '@/components/PacientesComponents/CardCitaExpediente.vue'
import { onMounted, ref } from 'vue'
import { pacientesQueries } from '@/api/pacientes/pacientesQueries.js'
import { useRoute } from 'vue-router'

const route = useRoute()
let nombre = ref('')
let sexo = ref('')
let apellido = ref('')
let pacienteId = ref(route.params.id)
let loader = ref(true)
let imagen = ref(null)
let fechaNacimiento = ref(null)
let edad = ref(null)

onMounted(() => {
    datosPaciente()
})

/* Peticiones HTTP */
const datosPaciente = async () => {
    loader.value = true
    let response = await pacientesQueries.getDatosPaciente(pacienteId.value)
    nombre.value = response.nombre
    apellido.value = response.apellido
    imagen.value = response.fotoPerfil
    fechaNacimiento.value = response.fechaNacimiento.substring(0,10).replace(/-/g, '/')
    edad.value = response.edad
    if (response.sexo === false) {
        sexo.value = 'Mujer'
    } else {
        sexo.value = 'Hombre'
    }
    loader.value = false
}

</script>

<template>
    <div class="flex gap-3 tablet:flex-wrap tablet:gap-0 telefono:flex-wrap">
        <section class="desktop:w-3/12 laptop:w-3/12 tablet:w-6/12 tablet:order-1 telefono:w-full mb-4">
            <div
                class="flex gap-2 py-3 px-2 border shadow-sm rounded-sm mb-2 items-center telefono:flex-col animate-pulse"
                v-if="loader">
                <div class="h-12 w-12 rounded-full bg-blue-300"></div>
                <div class="flex-1">
                    <div class="h-4 w-[90%] rounded-lg bg-blue-300 text-sm mb-1"></div>
                    <div class="h-4 w-3/5 rounded-lg bg-blue-300 text-lg"></div>
                </div>
            </div>
            <header v-else class="flex gap-2 py-3 px-2 border shadow-sm rounded-sm mb-2 items-center telefono:flex-col">
                <div>
                    <img
                        :src="imagen"
                        class="rounded-full h-12 w-12">
                </div>
                <div class="text-gray-600">
                    <h4 class="font-bold">{{ nombre + ' ' + apellido }} <span class="text-blue-500">({{ sexo }})</span>
                    </h4>
                    <div class="flex text-sm text-blue-800">
                        <p>{{ fechaNacimiento }} - <span>{{ edad }} años</span></p>
                    </div>
                </div>
            </header>
            <div>
                <signos-vitales />
            </div>
        </section>
        <section
            class="desktop:w-6/12 laptop:w-6/12 tablet:w-full tablet:order-3 telefono:w-full desktop:h-[766px] laptop:h-[766px] overflow-x-auto style_scroll">
            <interrogatorio-expediente :pacienteId :sexo />
        </section>

        <section
            class="desktop:w-3/12 laptop:w-3/12 tablet:w-5/12 tablet:ml-5 tablet:order-2 telefono:w-full flex flex-col gap-3">
            <button class="button-primary w-full">Iniciar Consulta</button>
            <card-citas />
            <button
                class="bg-principal font-poppins text-white rounded-[3px] w-1/2 hover:bg-pHover telefono:w-full p-2 py-3">
                Agendar cita
            </button>
            <h5 class="text-gray-500 font-bold telefono:text-center mt-3 mb-2">Consultas agendadas</h5>
            <div
                class="h-[450px] laptop:h-[450px] tablet:h-[220px] telefono:h-[200px] overflow-y-auto flex-col flex gap-5 style_scroll">
                <card-cita-expediente />
                <card-cita-expediente />
                <card-cita-expediente />
            </div>
        </section>
    </div>
</template>

<style scoped>

</style>