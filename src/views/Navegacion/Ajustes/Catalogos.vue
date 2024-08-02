<script setup>
import Especialidades from '@/components/AjustesComponents/Catalogos/Especialidades.vue'
import PeriodosT from '@/components/AjustesComponents/Catalogos/PeriodosT.vue'
</script>

<template>
    <main>
        <header>
            <h1 class="text-principal text-center font-Prompt font-medium text-2xl mb-2">Registro de catalogos</h1>
        </header>
        <div class="px-2 grid grid-cols-3 tablet:grid-cols-2 telefono:grid-cols-1 gap-5">
            <!-- ESPECIALIDADES DE FISIOTERAPEUTAS -->
            <Especialidades/>
            <!-- PERIODOS DE TRATAMIENTO -->
            <PeriodosT/>
            <!-- Otro catalogo -->
        </div>
    </main>
</template>

<style scoped>

</style>