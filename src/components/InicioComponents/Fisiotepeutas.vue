<script setup>
import { usuariosQueries } from '@/api/usuarios/usuariosQueries.js'
import { onMounted, ref } from 'vue'
import { irFisioterapeutas } from '@/router/rutasUtiles.js'

let fisios = ref([])
let spinner = ref(false)

onMounted(() => {
    verFisios()
})

const verFisios = async () => {
    spinner.value = true
    let usuarios = await usuariosQueries.getFisios()
    fisios.value = usuarios.slice(-6).reverse()
    spinner.value = false
}
</script>

<template>
    <div class="overflow-x-auto h-full border border-gray-200 rounded-lg shadow sm:p-8">
        <div class="flex items-center justify-between mb-4">
            <h5 class="text-xl font-bold leading-none text-blue-600">Fisioterapeutas</h5>
            <div v-show="!spinner" @click="irFisioterapeutas" role="button"
                 class="text-sm font-medium text-blue-600 hover:text-blue-700">
                Ver a todos
            </div>
        </div>
        <div class="animate-pulse w-[305px] telefono:w-full mt-2" v-if="spinner">
            <div class="px-6 py-4 bg-gray-300 mb-4 rounded" v-for="load in 7"></div>
        </div>
        <div v-else class="flex items-center py-2" v-for="fisio in fisios" :key="fisio.id">
            <div class="flex-shrink-0">
                <img class="w-8 h-8 rounded-full object-cover"
                     :src="fisio.foto"
                     alt="Neil image">
            </div>
            <div class="flex-1 min-w-0 ms-4 mr-3">
                <p class="text-sm font-medium text-gray-900 truncate">
                    {{ fisio.nombre }}
                </p>
                <p class="text-sm text-gray-500 truncate">
                    {{ fisio.correo }}
                </p>
            </div>
            <div class="inline-flex items-center text-base font-semibold text-gray-900 pl-6">
                {{ fisio.telefono }}
            </div>
        </div>
    </div>

</template>

<style scoped>

</style>