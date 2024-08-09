<script setup>
import SideBarAjustes from '@/components/AjustesComponents/SideBarAjustes.vue'
import { ref, onMounted } from 'vue'

let clave = ref('')
let permiso = ref(false)

const ingresar = () => {
    if (clave.value === '123') {
        permiso.value = true
    } else {
        alert('No es la clave')
    }
}

</script>

<template>
    <div v-if="!permiso" class="w-full flex flex-col items-center gap-5">
        <div class="flex flex-col items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-20 telefono:size-12 tablet:size-12 text-yellow-500 animate-fade animate-once">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
            </svg>
            <h1 class="text-center text-gray-800 text-3xl">Pantalla de administrador</h1>
        </div>
        <p class="text-center text-gray-500">Ingresa la clave verificadora para ingresar a los ajustes</p>
        <div class="flex flex-col w-[350px] gap-2">
            <input v-model="clave" type="password" class="input-primary">
            <button class="button-primary" @click="ingresar">Ingresar</button>
        </div>
    </div>
    <main v-else class="flex gap-3 telefono:flex-col">
        <section>
            <SideBarAjustes/>
        </section>
        <section class="w-full style_scroll">
            <router-view/>
        </section>
    </main>
</template>

<style scoped>
</style>
