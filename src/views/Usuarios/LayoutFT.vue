<script setup>
import UsuarioCard from '@/views/Usuarios/UsuarioCard.vue'
</script>

<template>
    <header class="text-center mb-5">
        <h1 class="mb-4 text-3xl font-extrabold text-gray-800 md:text-5xl lg:text-6xl">Nuestro
            <span class="rainbow-text">Maravilloso
            </span>
            <span class="underline decoration-blue-400">Equipo</span></h1>
        <p class="text-lg font-normal text-gray-500 lg:text-xl">
            Descripcion del equipo de fisioterapeutas.
        </p>
    </header>
    <section class="grid grid-cols-5 gap-5 telefono:grid-cols-1 tablet:grid-cols-3 laptop:grid-cols-5 telefono:grid-cols-1 telefono:place-items-center">
        <UsuarioCard/>
        <UsuarioCard/>
        <UsuarioCard/>
        <UsuarioCard/>
        <UsuarioCard/>
        <UsuarioCard/>
        <UsuarioCard/>
        <UsuarioCard/>
    </section>
</template>

<style scoped>
.rainbow-text {
    background: linear-gradient(270deg, #90e0ef, #0077b6, #0062FF);
    background-size: 1400% 1400%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: rainbow 15s ease infinite;
}

@keyframes rainbow {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}
</style>