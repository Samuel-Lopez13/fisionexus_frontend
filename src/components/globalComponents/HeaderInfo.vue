<script setup>
import {irInicio, irMetricas, irPacientes} from '@/router/rutasUtiles.js'
import { ref } from 'vue'
import router from '@/router/index.js'

const menu = ref(false)

const MenuMobile = () =>{
    menu.value = !menu.value
}

const CerrarMenu = (ruta) => {
    ruta()
    menu.value = !menu.value
}

</script>

<template>
    <header class="w-full h-[60px] flex items-center justify-between p-4 border-b">
        <p class="font-bold text-l">FisioLabs</p>
        <div class="relative inline-block text-left">
            <button @click="MenuMobile()" id="dropdownDefaultButton"
                    class="font-semibold laptop:hidden tablet:hidden desktop:hidden telefono:w-[100px] telefono:h-[30px] flex items-center justify-center text-blue-600 rounded-full border border-blue-600"
                    type="button">Menu
                <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                     viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="m1 1 4 4 4-4"/>
                </svg>
            </button>
            <!-- Dropdown menu -->
            <div v-show="menu" id="dropdown" class="z-10 flex bg-white absolute rounded-lg border w-44 left-[-40px] top-[40px]">
                <ul class="w-full py-2 text-sm text-gray-700" aria-labelledby="dropdownDefaultButton">
                    <li @click="CerrarMenu(irInicio)">
                        <div class=" px-4 py-2 hover:bg-gray-100">Inicio</div>
                    </li>
                    <li @click="CerrarMenu(irPacientes)">
                        <div class="block px-4 py-2 hover:bg-gray-100">Pacientes</div>
                    </li>
                    <li @click="CerrarMenu(irMetricas)">
                        <div class="block px-4 py-2 hover:bg-gray-100">Metricas</div>
                    </li>
                    <li>
                        <div class="block px-4 py-2 hover:bg-gray-100">Ajustes</div>
                    </li>
                    <li>
                        <div class="block px-4 py-2 hover:bg-gray-100">Cerrar Sesion</div>
                    </li>
                </ul>
            </div>
        </div>
        <section class="flex items-center gap-2">
            <div class="md:flex border gap-2 rounded-full p-2 px-3 duration-200 hover:text-blue-600 hover:border-blue-600 group"
                role="button">
                <img src="../../assets/icons/Usuario.png" class="h-7 w-7">
                <p class="font-semibold flex items-center text-gray-600 telefono:hidden group-hover:text-blue-600">Nombre completo de usuario</p>
            </div>
            <div data-tooltip-target="Notificaciones" data-tooltip-placement="bottom"
                         class="p-2 text-gray-500 duration-200 hover:text-blue-600 hover:border-blue-600 flex justify-center border rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" class="w-7 h-7">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"/>
                </svg>
            </div>
        </section>
        <div id="Notificaciones" role="tooltip"
             class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-blue-600 rounded-lg shadow-sm opacity-0 tooltip">
            Notificaciones
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
    </header>
</template>

<style scoped>

</style>