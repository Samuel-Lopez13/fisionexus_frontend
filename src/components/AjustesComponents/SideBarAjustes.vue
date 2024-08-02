<script setup>
</script>

<template>
    <nav class="flex flex-col items-center p-2">
        <div class="flex flex-col telefono:flex-row items-center gap-3">
            <p class="font-bold text-gray-700 border-b">Administrador</p>
            <router-link :to="{name:'Usuario'}" active-class="active_item"
                         class="w-full text-gray-500 duration-100 hover:text-blue-600 flex justify-center">
                <p>Usuario</p>
            </router-link>
            <router-link :to="{name:'Catalogos'}" active-class="active_item"
                         class="w-full text-gray-500 duration-100 hover:text-blue-600 flex justify-center">
                <p>Catálogos</p>
            </router-link>
            <router-link :to="{name:'Equipo'}" active-class="active_item"
                         class="w-full text-gray-500 duration-100 hover:text-blue-600 flex justify-center">
                <p>Equipo</p>
            </router-link>
        </div>
    </nav>
</template>

<style scoped>
.active_item {
    color: #0062FF !important;
}

.disabled {
    pointer-events: none;
}
</style>