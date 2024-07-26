<script setup>
import { usuariosQueries } from '@/api/usuarios/usuariosQueries.js'
import { onMounted, ref, watch } from 'vue'
import { clavesStore } from '@/stores/clavesStore.js'

let fisios = ref([])

onMounted(() => {
    verFisios()
})

watch(() => clavesStore().actualizacionFisios, async () => {
    verFisios()
    clavesStore().actualizacionFisios = false
})

const verFisios = async () => {
    fisios.value = await usuariosQueries.getFisios()
}
</script>

<template>
    <div v-for="fisio in fisios" :key="fisio.id" role="button"
         class="animate-fade-up animate-once max-w-sm text-center bg-white border border-gray-200 rounded-lg shadow hover:bg-blue-500 group transition-all duration-1000 ease-out">
        <img class="rounded-t-lg w-full h-[230px] object-cover group-hover:grayscale" :src="fisio.foto" />
        <div class="p-3">
            <a>
                <h5 class="mb-2 text-[20px] font-bold tracking-tight text-gray-900 dark:text-white group-hover:text-white overflow-hidden whitespace-nowrap text-ellipsis">
                    {{ fisio.nombre }}
                </h5>
            </a>
            <div class="mb-3 font-normal text-gray-700 dark:text-gray-400 group-hover:text-white">
                <p>{{ fisio.correo }}</p>
                <p>{{ fisio.telefono }}</p>
                <p>{{ fisio.especialidad }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>