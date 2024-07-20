<script setup>
import { ref, reactive } from 'vue'

const areasAnterior = [
    { name: 'Cabeza', x: 102, y: 20, width: 20, height: 20 },
    { name: 'Región cervical anterior', x: 102, y: 70, width: 20, height: 10 },
    { name: 'Deltoides anterior izquierdo', x: 42, y: 82, width: 20, height: 20 },
    { name: 'Deltoides anterior derecho', x: 162, y: 82, width: 20, height: 20 },
    { name: 'Bicep izquierdo', x: 27, y: 115, width: 20, height: 20 },
    { name: 'Bicep derecho', x: 177, y: 115, width: 20, height: 20 },
    { name: 'Antebrazo anterior izquierdo', x: 7, y: 155, width: 20, height: 20 },
    { name: 'Antebrazo anterior derecho', x: 197, y: 155, width: 20, height: 20 },
    { name: 'Muñeca izquierda', x: 7, y: 185, width: 20, height: 5 },
    { name: 'Muñeca derecha', x: 197, y: 185, width: 20, height: 5 },
    { name: 'Mano izquierda', x: 7, y: 200, width: 20, height: 20 },
    { name: 'Mano derecha', x: 197, y: 200, width: 20, height: 20 },
    { name: 'Pecho derecho', x: 82, y: 100, width: 20, height: 20 },
    { name: 'Pecho izquierdo', x: 122, y: 100, width: 20, height: 20 },
    { name: 'Región abdominal', x: 102, y: 150, width: 20, height: 20 },
    { name: 'Pelvis', x: 92, y: 190, width: 40, height: 5 },
    { name: 'Muslo anterior izquierdo', x: 72, y: 220, width: 20, height: 20 },
    { name: 'Muslo anterior derecho', x: 132, y: 220, width: 20, height: 20 },
    { name: 'Rodilla anterior izquierda', x: 74, y: 275, width: 20, height: 20 },
    { name: 'Rodilla anterior derecha', x: 130, y: 275, width: 20, height: 20 },
    { name: 'Tibial derecho', x: 132, y: 310, width: 20, height: 20 },
    { name: 'Tibial izquierdo', x: 72, y: 310, width: 20, height: 20 },
    { name: 'Tobillo derecho', x: 128, y: 365, width: 20, height: 5 },
    { name: 'Tobillo izquierdo', x: 76, y: 365, width: 20, height: 5 },
    { name: 'Empeine izquierdo', x: 74, y: 370, width: 20, height: 20 },
    { name: 'Empeine derecho', x: 130, y: 370, width: 20, height: 20 }
]

const areasPosterior = [
    { name: 'Occipital', x: 102, y: 30, width: 20, height: 20 },
    { name: 'Cervical Posterior', x: 102, y: 50, width: 20, height: 20 },
    { name: 'Región Torácica', x: 107, y: 70, width: 10, height: 60 },
    { name: 'Región Lumbar', x: 107, y: 135, width: 10, height: 40 },
    { name: 'Región Escapular Derecha', x: 77, y: 75, width: 20, height: 20 },
    { name: 'Región Escapular Izquierda', x: 127, y: 75, width: 20, height: 20 },
    { name: 'Tríceps Derecho', x: 32, y: 105, width: 20, height: 20 },
    { name: 'Tríceps Izquierdo', x: 172, y: 105, width: 20, height: 20 },
    { name: 'Antebrazo Posterior Derecho', x: 12, y: 148, width: 20, height: 20 },
    { name: 'Antebrazo Posterior Izquierdo', x: 192, y: 148, width: 20, height: 20 },
    { name: 'Glúteo Izquierdo', x: 77, y: 180, width: 20, height: 20 },
    { name: 'Glúteo Derecho', x: 127, y: 180, width: 20, height: 20 },
    { name: 'Isquiotibiales Derechos', x: 72, y: 220, width: 20, height: 20 },
    { name: 'Isquiotibiales Izquierdos', x: 132, y: 220, width: 20, height: 20 },
    { name: 'Región Poplítea Derecha', x: 76, y: 265, width: 20, height: 20 },
    { name: 'Región Poplítea Izquierda', x: 121, y: 265, width: 20, height: 20 },
    { name: 'Pantorrilla Derecha', x: 72, y: 300, width: 20, height: 20 },
    { name: 'Pantorrilla Izquierda', x: 132, y: 300, width: 20, height: 20 },
    { name: 'Tendón de Aquiles Derecho', x: 76, y: 360, width: 20, height: 5 },
    { name: 'Tendón de Aquiles Izquierdo', x: 128, y: 360, width: 20, height: 5 },
    { name: 'Talón Derecho', x: 74, y: 365, width: 20, height: 20 },
    { name: 'Talón Izquierdo', x: 130, y: 365, width: 20, height: 20 }
]

const areasLateral = [
    { name: 'Región Temporal', x: 46, y: 30, width: 20, height: 20 },
    { name: 'Región Mandibular', x: 65, y: 53, width: 20, height: 20 },
    { name: 'Región Cervical Lateral', x: 46, y: 65, width: 20, height: 20 },

    { name: 'Región Torácica Lateral', x: 75, y: 100, width: 20, height: 20 },

    { name: 'Deltoides lateral', x: 46, y: 90, width: 20, height: 20 },
    { name: 'Codo', x: 52, y: 140, width: 20, height: 20 },

    { name: 'Región Ilíaca', x: 71, y: 182, width: 20, height: 20 },
    { name: 'Muslo Lateral', x: 41, y: 182, width: 20, height: 20 }
]


const selectedAreasAnterior = ref([])
const selectedAreasOtraVista = ref([])
const painLevels = reactive({})

const handleClick = (vista, area) => {
    const selectedAreas = vista === 'anterior' ? selectedAreasAnterior : selectedAreasOtraVista
    if (!selectedAreas.value.includes(area.name)) {
        selectedAreas.value.push(area.name)
        painLevels[area.name] = 0
    } else {
        const index = selectedAreas.value.indexOf(area.name)
        selectedAreas.value.splice(index, 1)
        delete painLevels[area.name]
    }
}

const isSelected = (vista, areaName) => {
    const selectedAreas = vista === 'anterior' ? selectedAreasAnterior.value : selectedAreasOtraVista.value
    return selectedAreas.includes(areaName)
}
</script>

<template>
    <div class="flex justify-around telefono:flex-wrap border rounded-sm">
        <!-- Vista Anterior -->
        <section class="relative">
            <img src="/src/assets/CuerpoHumano/VistaAnterior.jpeg" alt="Cuerpo Humano" class="w-[225px] h-[400px]">
            <div v-for="area in areasAnterior" :key="'anterior-' + area.name"
                 :style="{ left: area.x + 'px', top: area.y + 'px', width: area.width + 'px', height: area.height + 'px', backgroundColor: isSelected('anterior', area.name) ? '#0d6efd' : 'transparent' }"
                 class="absolute border border-opacity-50 cursor-pointer rounded-full hover:bg-blue-500"
                 @click="handleClick('anterior', area)"
                 :title="area.name">
            </div>
        </section>
        <!-- Vista Posterior -->
        <section class="relative">
            <img src="/src/assets/CuerpoHumano/VistaPosterior.jpeg" alt="Otra Vista del Cuerpo"
                 class="w-[225px] h-[400px]">
            <div v-for="area in areasPosterior" :key="'otra-' + area.name"
                 :style="{ left: area.x + 'px', top: area.y + 'px', width: area.width + 'px', height: area.height + 'px', backgroundColor: isSelected('otra', area.name) ? '#0d6efd' : 'transparent' }"
                 class="absolute border border-opacity-50 cursor-pointer rounded-full hover:bg-blue-500"
                 @click="handleClick('otra', area)"
                 :title="area.name">
            </div>
        </section>
        <!-- Vista Lateral-->
        <section class="relative">
            <img src="/src/assets/CuerpoHumano/VistaLateral.jpeg" alt="Otra Vista del Cuerpo"
                 class="w-[125px] h-[400px]">
            <div v-for="area in areasLateral" :key="'otra-' + area.name"
                 :style="{ left: area.x + 'px', top: area.y + 'px', width: area.width + 'px', height: area.height + 'px', backgroundColor: isSelected('otra', area.name) ? '#0d6efd' : 'transparent' }"
                 class="absolute border border-opacity-50 cursor-pointer rounded-full hover:bg-blue-500"
                 @click="handleClick('otra', area)"
                 :title="area.name">
            </div>
        </section>
    </div>

    <!--Escala del dolor-->
    <section v-if="selectedAreasAnterior.length > 0 || selectedAreasOtraVista.length > 0"
             class="rounded-sm border shadow mt-6">
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
                <div v-for="(selectedAreas, index) in [selectedAreasAnterior, selectedAreasOtraVista]" :key="index">
                    <div v-if="selectedAreas.length > 0">
                        <section v-for="area in selectedAreas" :key="(index === 0 ? 'anterior-' : 'otra-') + area"
                                 class="">
                            <header class="text-center">
                                <h3>{{ area }}</h3>
                            </header>
                            <div class="relative">
                                <input type="range" v-model="painLevels[area]" min="0" max="10"
                                       class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer">
                                <span
                                    class="absolute top-0 left-0 transform -translate-y-full bg-gray-100 px-2 py-1 text-xs rounded shadow-lg">{{ painLevels[area]
                                    }}</span>
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
                <textarea
                    class=" input-primary resize-none"
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
