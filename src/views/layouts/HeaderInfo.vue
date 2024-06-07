<script setup>

</script>

<template>
    <header class="w-full h-[56px] flex items-center justify-between p-5 border-b">
        <div class="font-bold text-l">FisioLabs</div>
        <router-link data-tooltip-target="Notificaciones" data-tooltip-placement="right"
                     class="p-1.5 text-gray-500 duration-200 hover:text-blue-600 flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"/>
            </svg>
        </router-link>
        <div id="Notificaciones" role="tooltip"
             class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-blue-600 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            Notificaciones
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
    </header>
</template>

<style scoped>

</style>