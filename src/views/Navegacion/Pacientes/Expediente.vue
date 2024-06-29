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
let pacienteId = ref(route.params.id)
let loader = ref(true)

onMounted(() => {
    datosPaciente()
})

/* Peticiones HTTP */
const datosPaciente = async () => {
    loader.value = true
    let response = await pacientesQueries.getDatosPaciente(pacienteId.value)
    nombre.value = response.nombre
    sexo.value = response.sexo
    loader.value = false
}

</script>

<template>
    <div class="flex gap-3 tablet:flex-wrap tablet:gap-0 telefono:flex-wrap">
        <section class="desktop:w-3/12 laptop:w-3/12 tablet:w-6/12 tablet:order-1 telefono:w-full mb-4">
                <div class="flex gap-2 py-3 px-2 border shadow-sm rounded-sm mb-2 items-center telefono:flex-col animate-pulse" v-if="loader">
                    <div class="h-12 w-12 rounded-full bg-blue-300"></div>
                    <div class="flex-1">
                        <div class="h-4 w-[90%] rounded-lg bg-blue-300 text-sm mb-1"></div>
                        <div class="h-4 w-3/5 rounded-lg bg-blue-300 text-lg"></div>
                    </div>
                </div>
            <header v-else class="flex gap-2 py-3 px-2 border shadow-sm rounded-sm mb-2 items-center telefono:flex-col">
                <div>
                    <img
                        src="https://scontent.fcjs3-2.fna.fbcdn.net/v/t39.30808-6/377918234_719064643611287_1682649016782720225_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHv4yAdgkUvY7N3S-F3yVIeMkOZEZBi3_kyQ5kRkGLf-Z7IETOMAM6jrNJvo8MRwHapZnZH0HGKsvjhy-8vUcWH&_nc_ohc=I26TfuFwKoQQ7kNvgGODrra&_nc_ht=scontent.fcjs3-2.fna&oh=00_AYBisLmcZR5POSnVxSxC5l9hpPJu367yCb1t5zvfFJ02gg&oe=666B1603"
                        class="rounded-full h-12 w-12">
                </div>
                <div class="text-gray-600">
                    <h4 class="font-bold">{{ nombre }} <span class="text-blue-500">({{ sexo }})</span></h4>
                    <div class="flex text-sm text-blue-800">
                        <p>13/11/2001 - <span>22 años</span></p>
                    </div>
                </div>
            </header>
            <div>
                <signos-vitales />
            </div>
        </section>
        <section class="desktop:w-6/12 laptop:w-6/12 tablet:w-full tablet:order-3 telefono:w-full desktop:h-[766px] laptop:h-[766px] overflow-x-auto style_scroll">
            <interrogatorio-expediente :pacienteId="pacienteId" :sexo="sexo"/>
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
            <div class="h-[450px] laptop:h-[450px] tablet:h-[220px] telefono:h-[200px] overflow-y-auto flex-col flex gap-5 style_scroll">
                <card-cita-expediente />
                <card-cita-expediente />
                <card-cita-expediente />
            </div>
        </section>
    </div>
</template>

<style scoped>

</style>