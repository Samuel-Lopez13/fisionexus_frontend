<script setup>
import { ref } from 'vue'
import { fechaActual } from '@/services/verifyToken.js'

let emits = defineEmits(['cerrarModal'])
let props = defineProps({
    pacienteId: Number,
    paciente: String
})

let fecha = ref(fechaActual)
let hora = ref(null)
let motivo = ref('')

const cancelarAgenda = () => {
    emits('cerrarModal');
}
</script>

<template>
    <div class="rounded-sm border bg-white animacion">
        <header class="text-gray-600 text-center p-3 border-b bg-gray-100">
            <h5 class="telefono:text-center text-lg">Agendar consulta</h5>
        </header>
        <div class="p-2 text-center border-b text-blue-600">
            <span>{{ props.paciente }}</span>
        </div>
            <div class="flex p-2 gap-2 text-gray-600">
                <input type="date" v-model="fecha" placeholder="Select date" class="w-full border-0 focus:ring-0">
                <input type="time" min="09:00" max="18:00" value="00:00" class="w-full border-0 focus:ring-0"/>
            </div>
            <div class="p-2 border-t">
                <input type="text" v-model="motivo" placeholder="Motivo de la consulta" class="w-full border-none focus:ring-0">
            </div>
        <div class="p-2 border-t flex gap-1">
            <button class="rounded-[3px] p-2 bg-blue-600 text-white w-full hover:bg-pHover">Agendar</button>
            <button class="rounded-[3px]  p-2 text-white bg-gray-600 w-full hover:bg-gray-500" @click="cancelarAgenda">Cancelar</button>
        </div>
    </div>
</template>

<style scoped>
.animacion{
    animation: bounceIn 0.34s;
}
@keyframes bounceIn {
    0% {
        transform: scale(0.3);
        opacity: 0;
    }
    50% {
        transform: scale(1.05);
        opacity: 1;
    }
    70% {
        transform: scale(0.9);
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
}

.animacion-out{
    animation: bounceOut 0.34s;
}

@keyframes bounceOut {
    0% {
        transform: scale(1);
        opacity: 1;
    }
    70% {
        transform: scale(0.9);
    }
    100% {
        transform: scale(0.3);
        opacity: 0;
    }
}

</style>