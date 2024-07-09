<script setup>
import SignosVitales from '@/components/PacientesComponents/SignosVitales.vue'
import DatosDiagnostico from '@/components/PacientesComponents/DatosDiagnostico.vue'
import MapaCorporal from '@/components/PacientesComponents/MapaCorporal.vue'
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
import { pacientesQueries } from '@/api/pacientes/pacientesQueries.js'

const route = useRoute()
let nombre = ref('')
let sexo = ref('')
let apellido = ref('')
let pacienteId = ref(route.params.id)
let loader = ref(false)
let imagen = ref(null)
let fechaNacimiento = ref(null)
let edad = ref(null)

onMounted(() => {
    datosPaciente()
})

const datosPaciente = async () => {
    loader.value = true
    let response = await pacientesQueries.getDatosPaciente(pacienteId.value)
    nombre.value = response.nombre
    apellido.value = response.apellido
    imagen.value = response.fotoPerfil
    fechaNacimiento.value = response.fechaNacimiento.substring(0, 10).replace(/-/g, '/')
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
                    <signos-vitales />
                </div>
                <!--Firma y refiere-->
                <div class="telefono:hidden flex flex-col gap-2">
                    <div class="basis-2/4">
                        <label class="block mb-2 text-sm font-medium">Refiere <span
                            class="text-blue-600">*</span></label>
                        <input type="text"
                               class="input-primary"
                               placeholder="Ingrese su nombre" />
                    </div>
                    <div class="basis-2/4">
                        <label class="block mb-2 text-sm font-medium">Cédula profesional
                            <span class="text-blue-600">*</span></label>
                        <input type="text"
                               class="input-primary"
                               placeholder="Ingrese la cédula profesional"
                               maxlength="5" />
                    </div>
                    <section class="telefono:w-full flex flex-col gap-1">
                        <button class="button-primary w-full">Finalizar cita</button>
                        <button class="text-blue-700 w-full underline hover:text-gray-500 telefono:basis-full">Volver
                        </button>
                    </section>
                </div>
            </div>
        </section>
        <section
            class="overflow-y-auto flex-col flex gap-5 style_scroll desktop:w-8/12 laptop:w-8/12 tablet:w-full telefono:w-full">
            <mapa-corporal></mapa-corporal>
            <datos-diagnostico />
        </section>
    </div>
</template>

<style scoped>
</style>
