<script setup>
import { ref } from 'vue'
import ImagenDefault from '@/assets/icons/Usuario.png'

let nombre = ref("Edson Coj")
let correo = ref("edson@gmail.com")
let telefono = ref("9815447865")
let nacionalidad = ref("Mexico")
let cedula = ref("d457961")
let especialidad = ref("")
const especialidades = ref([
    { idEspecialidad: '1', especialidad: 'Cardiología' },
    { idEspecialidad: '2', especialidad: 'Dermatología' },
    { idEspecialidad: '3', especialidad: 'Neurología' },
    { idEspecialidad: '4', especialidad: 'Pediatría' }
]);
let imageUrl = ref(ImagenDefault)
let inputFile = ref(null)

const imagenSeleccionada = (event) => {
    imageUrl.value = URL.createObjectURL(event.target.files[0])
}
const regresarImagenDefault = () => {
    inputFile.value.value = ''
    imageUrl.value = ImagenDefault
}
</script>

<template>
    <div class="flex telefono:flex-col w-full">
        <section class="w-64 telefono:w-full flex flex-col items-center gap-6">
            <div class="flex flex-col items-center gap-4">
                <h1 class="text-[24px] text-gray-600 font-bold text-center">
                    Usuario
                </h1>
                <img :src="imageUrl" class="h-40 w-40 object-cover rounded-full">
            </div>
            <label for="inputFile"
                   class="button-primary flex cursor-pointer">
                Adjuntar foto
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" class="size-5 ml-0.5">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13" />
                </svg>
            </label>
            <input ref="inputFile" type="file" id="inputFile" class="hidden" @change="imagenSeleccionada">
            <transition
                enter-active-class="transition-opacity duration-500"
                enter-from-class="opacity-0"
                enter-to-class="opacity-100"
                leave-active-class="transition-opacity duration-300"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0">
                <button
                    v-if="imageUrl !== ImagenDefault"
                    @click="regresarImagenDefault"
                    class="text-blue-700 underline hover:!text-blue-500 telefono:basis-full">
                    Cambiar a predeterminada
                </button>
            </transition>
        </section>
        <section class="px-4 w-5/12 telefono:w-full flex flex-col gap-3">
            <div>
                <header>
                    <h1 class="text-principal text-center font-Prompt font-medium text-2xl mb-2 telefono:mt-4">Datos del administrador</h1>
                </header>
            </div>
            <div>
                <label class="block mb-2 text-sm font-medium text-gray-600">Nombre de usuario</label>
                <input v-model="nombre" type="text" class="input-primary" placeholder="Pedro Alfonso" />
            </div>
            <div>
                <label class="block mb-2 text-sm font-medium text-gray-600">Correo electronico</label>
                <input v-model="correo" type="text" class="input-primary" placeholder="al00000@uacam.mx" />
            </div>
            <div>
                <label class="block mb-2 text-sm font-medium text-gray-600">Teléfono</label>
                <input v-model="telefono" type="tel" class="input-primary" placeholder="9812308723" maxlength="10" />
            </div>
            <div>
                <label class="block mb-2 text-sm font-medium text-gray-600">Teléfono</label>
                <input v-model="cedula" type="text" class="input-primary" placeholder="d123456" />
            </div>
            <div>
                <label class="block mb-2 text-sm font-medium text-gray-600">Nacionalidad</label>
                <input v-model="nacionalidad" type="text" class="input-primary" maxlength="20" placeholder="Escribe aqui tu nacionalidad" />
            </div>
            <div>
                <label class="block mb-2 text-sm font-medium text-gray-600">Especialidad</label>
                <select class="input-primary" v-model="especialidad">
                    <option value="" selected>Especialidad</option>
                    <option v-for="especial in especialidades" :value="especial.idEspecialidad">
                        {{ especial.especialidad }}
                    </option>
                </select>
            </div>
            <div class="flex justify-end">
                <button class="button-primary button-disabled telefono:w-full">Guardar cambios</button>
            </div>
        </section>
    </div>
</template>

<style scoped>

</style>