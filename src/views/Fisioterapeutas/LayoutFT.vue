<script setup>
import UsuarioCard from '@/views/Fisioterapeutas/FisiosCard.vue'
import fisioForm from '@/components/fisioterapeutas/FisioForm.vue'
import TransitionRec from '@/components/recursos/TransitionRec.vue'
import { ref } from 'vue'

let modal = ref(false)
let isHovered = ref(false)
let registro = ref(false)

//Cerramos el modal e indicamos que el registro esta completo
const finalizado = () => {
    modal.value = false
    registro.value = true
}

//Se abre el modal e indica que el registro esta incompleto
const inicio = () => {
    modal.value = true
    registro.value = false
}
</script>

<template>
    <main class="overflow-x-hidden overflow-y-hidden">
        <header class="text-center mb-8 animate-fade-left animate-once">
            <h2 class="mb-4 text-3xl font-semibold text-gray-800 md:text-5xl lg:text-6xl">Nuestro
                <span class="rainbow-text">Maravilloso
            </span>
                <span class="underline decoration-blue-400">Equipo</span></h2>
            <p class="text-lg font-normal text-gray-500 lg:text-xl">
                Descripcion del equipo de fisioterapeutas.
            </p>
        </header>
        <section class="pb-4 grid grid-cols-[270px_270px_270px_270px_270px] justify-center gap-x-12 gap-y-7 telefono:grid-cols-1 tablet:grid-cols-3 laptop:grid-cols-5 telefono:place-items-center">
            <UsuarioCard :actualizar=registro />
        </section>

        <!-- Modales -->
        <TransitionRec class="fixed z-10 inset-0 flex items-center justify-center w-full h-full bg-black bg-opacity-40"
                       @click.self="modal = false">
            <div v-if="modal">
                <fisioForm class="w-[450px] bg-white" @salir="finalizado()"/>
            </div>
        </TransitionRec>

        <div class="fixed bottom-8 right-8">
            <button class="bg-principal h-[50px] font-poppins text-white bg-opacity-45 hover:bg-opacity-100 transition-all duration-1000 ease-out"
                    @mouseover="isHovered = true"
                    @mouseleave="isHovered = false"
                    :class="isHovered ? 'px-3 rounded' : 'w-[50px] rounded-full'"
                    @click="inicio()">
                <span v-if="isHovered">Agregar Pacientes +</span>
                <span v-else>+</span>
            </button>
        </div>
    </main>
</template>

<style scoped>
.rainbow-text {
    background: linear-gradient(270deg, #90e0ef, #0077b6, #0062FF);
    background-size: 1400% 1400%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: rainbow 10s ease infinite;
}

@keyframes rainbow {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}
</style>