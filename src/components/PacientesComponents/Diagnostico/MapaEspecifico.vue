<script setup>
import { onMounted, ref } from 'vue'
import { areasAnterior, areasLateral, areasPosterior } from '@/helpers/mapaCorporal.js'

const areasSeleccionadas = ref([])

const nota = ref("Hola soy una nota")
const valores = ref([8, 36, 52])
const dolor = ref([6, 8, 4])
const mapa = ref([])

//Esto solo lo meti en el onMounted para prueba pero en si es el metodo cuando consumas
onMounted(() => {
    //Recorro un arreglo del tamano de valores
    for (let i = 0; i < valores.value.length; i++) {
        let valor = valores.value[i] //Guardo el primer valor
        let map = null

        //Verifico en que rango esta
        if(valor >= 1 && valor <= 26)
            map = areasAnterior.find(area => area.id === valor) //Obtengo los datos que coincidan con el id
        else if(valor >= 27 && valor <= 48)
            map = areasPosterior.find(area => area.id === valor)
        else
            map = areasLateral.find(area => area.id === valor)

        let corporal = {name: map.name, rango: dolor.value[i]} //Solo guardo lo que necesito

        areasSeleccionadas.value.push(map.name) //Son los puntos que se colorearan de azul

        mapa.value.push(corporal) //El mapa corporal de rango de dolor
    }
})

const isSelected = (areaName) => {
    return areasSeleccionadas.value.includes(areaName)
}
</script>

<template>
    <div class="flex justify-around telefono:flex-wrap border rounded-sm">
        <!-- Vista Anterior -->
        <section class="relative">
            <img src="/src/assets/CuerpoHumano/VistaAnterior.jpeg" alt="Cuerpo Humano" class="w-[225px] h-[400px]">
            <div v-for="area in areasAnterior" :key="'anterior-' + area.name"
                 :style="{ left: area.x + 'px', top: area.y + 'px', width: area.width + 'px', height: area.height + 'px', backgroundColor: isSelected(area.name) ? '#0d6efd' : 'transparent' }"
                 class="absolute border border-opacity-50 rounded-full hover:bg-blue-500"
                 :title="area.name">
            </div>
        </section>
        <!-- Vista Posterior -->
        <section class="relative">
            <img src="/src/assets/CuerpoHumano/VistaPosterior.jpeg" alt="Otra Vista del Cuerpo" class="w-[225px] h-[400px]">
            <div v-for="area in areasPosterior" :key="'otra-' + area.name"
                 :style="{ left: area.x + 'px', top: area.y + 'px', width: area.width + 'px', height: area.height + 'px', backgroundColor: isSelected(area.name) ? '#0d6efd' : 'transparent' }"
                 class="absolute border border-opacity-50 rounded-full hover:bg-blue-500"
                 :title="area.name">
            </div>
        </section>
        <!-- Vista Lateral-->
        <section class="relative">
            <img src="/src/assets/CuerpoHumano/VistaLateral.jpeg" alt="Otra Vista del Cuerpo" class="w-[125px] h-[400px]">
            <div v-for="area in areasLateral" :key="'otra-' + area.name"
                 :style="{ left: area.x + 'px', top: area.y + 'px', width: area.width + 'px', height: area.height + 'px', backgroundColor: isSelected(area.name) ? '#0d6efd' : 'transparent' }"
                 class="absolute border border-opacity-50 rounded-full hover:bg-blue-500"
                 :title="area.name">
            </div>
        </section>
    </div>

    <!--Escala del dolor-->
    <section v-show="areasSeleccionadas.length > 0" class="rounded-sm border shadow mt-6">
        <details open class="group">
            <summary
                class="flex items-center w-full text-sm text-left rtl:text-right text-black bg-gray-100 px-6 py-3 telefono:text-center cursor-pointer">
                Escala del dolor
                <svg class="ml-auto fill-current opacity-75 w-4 h-4 transition-transform transform group-open:rotate-90"
                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
                </svg>
            </summary>
            <div class="px-6 py-3 text-gray-500 flex flex-col gap-3 animate-fade-down">
                <div v-for="(selectedAreas, index) in [areasSeleccionadas]" :key="index">
                    <div v-if="selectedAreas.length > 0">
                        <section v-for="area in mapa" :key="(index === 0 ? 'anterior-' : 'otra-') + area">
                            <header class="text-center">
                                <h3>{{ area.name }}</h3>
                            </header>
                            <div class="relative">
                                <input type="range" min="0" max="10" :value="area.rango" disabled
                                       class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer">
                                <span class="absolute top-0 left-0 transform -translate-y-full bg-gray-100 px-2 py-1 text-xs rounded shadow-lg">{{ area.rango }}</span>
                            </div>
                            <div class="flex justify-between text-xs font-medium text-gray-500">
                                <span>Sin dolor</span>
                                <span>Dolor insoportable</span>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <div class="px-6 py-3">
                <textarea disabled v-model="nota"
                    class=" input-primary resize-none bg-gray-100"
                    placeholder="Ingrese su nota"
                ></textarea>
            </div>
        </details>
    </section>
</template>



<style scoped>
input[type="range"]::-webkit-slider-thumb {
    background-color: #0d6efd; /* Tailwind 'green-500' color */
}

input[type="range"]::-moz-range-thumb {
    background-color: #0d6efd; /* Tailwind 'green-500' color */
}

input[type="range"]::-ms-thumb {
    background-color: #0d6efd; /* Tailwind 'green-500' color */
}
</style>
