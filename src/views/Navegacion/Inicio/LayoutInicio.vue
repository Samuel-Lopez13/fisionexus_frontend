<script setup>
import { onMounted, ref } from 'vue'
import CardCita from '@/components/InicioComponents/CardCita.vue'
import NuevosUsuarios from '@/components/InicioComponents/Charts/NuevosUsuarios.vue'
import UltimosUsuarios from '@/components/InicioComponents/UltimosUsuarios.vue'
import CitasChart from '@/components/InicioComponents/Charts/CitasChart.vue'
import Fisiotepeutas from '@/components/InicioComponents/Fisiotepeutas.vue'
import { pacientesQueries } from '@/api/pacientes/pacientesQueries.js'

let saludo = ref('')
let nombre = ref(localStorage.getItem('Usuario'))
let citas = ref([])
let loader = ref(false)

onMounted(() => {
    Saludar()
    citasDia()
})

const Saludar = () => {
    const horaActual = new Date().getHours()
    saludo.value = horaActual < 12 ? 'Buenos días 🌤️' : (horaActual < 19 ? 'Buenas tardes 🌇' : 'Buenas noches 🌙')
}

const citasDia = async () => {
    loader.value = true
    citas.value = await pacientesQueries.getCitasDia()
    loader.value = false
}
</script>

<template>
    <header class="flex flex-col md:flex-row items-center justify-between mb-5">
        <section class="flex flex-col sm:flex-row items-start sm:items-center gap-3 animate-fade-right animate-once">
            <h1 class="text-xl font-bold m-0">{{ saludo }}, {{ nombre }} <span>👋</span></h1>
            <p class="text-gray-700 font-semibold">Los datos mostrados se actualizan en tiempo real</p>
        </section>
    </header>
    <main class="flex flex-col gap-3">
        <section>
            <p class="text-lg font-bold text-gray-500 mb-2"> Citas del dia </p>
            <div class="style_scroll flex gap-4 w-12/12 overflow-x-auto py-2">
                <div v-if="loader" v-for="load in 6"
                     class="flex-none bg-gray-300 animate-pulse h-[130px] w-[280px] telefono:w-[180px] telefono:h-[150px] max-w-sm rounded-lg hover:bg-blue-300">
                </div>
                <CardCita v-else v-for="cita in citas" :foto="cita.foto" :nombre="cita.nombre"
                          :hora="cita.hora.substring(0,5)" :numero="cita.telefono" />
            </div>
        </section>
        <section
            class="flex telefono:flex-col py-2 style_scroll overflow-x-auto gap-10 telefono:gap-4 tablet:gap-4 laptop:justify-between">
            <div class="telefono:flex telefono:justify-center">
                <NuevosUsuarios />
            </div>
            <div class="telefono:flex telefono:justify-center">
                <CitasChart />
            </div>
            <div class="telefono:flex telefono:justify-center w-100">
                <Fisiotepeutas />
            </div>
            <div class="laptop:w-full">
                <p class="text-gray-600 mb-1 font-semibold">Ultimos pacientes agregados</p>
                <UltimosUsuarios />
            </div>
        </section>
    </main>
</template>

<style scoped>
</style>