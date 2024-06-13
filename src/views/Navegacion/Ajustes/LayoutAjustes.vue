<script setup>
import { ref } from 'vue'
import ImagenDefault from '@/assets/icons/Usuario.png'

let imageUrl = ref(ImagenDefault)
let inputFile = ref(null)
let mostrarContasena = ref(false)

const verContrasena = () => {
  mostrarContasena.value = !mostrarContasena.value
}

const imagenSeleccionada = (event) => {
  imageUrl.value = URL.createObjectURL(event.target.files[0])
}
const regresarImagenDefault = () => {
  inputFile.value.value = ''
  imageUrl.value = ImagenDefault
}
</script>

<template>
  <div class="flex telefono:flex-col">
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
      <div>
        <p class="text-gray-600 font-semibold text-center mb-1">Biografia</p>
        <textarea
          class="p-2.5 w-[220px] h-[152px] border-gray-300 bg-gray-50 rounded-lg text-gray-600 font-normal"
          placeholder="Escribe algo sobre ti..."></textarea>
      </div>
    </section>
    <section class="px-4 py-2 w-5/12 telefono:w-full flex flex-col gap-3">
      <div>
        <label class="block mb-2 text-sm font-medium text-gray-600">Nombre de usuario</label>
        <input type="text" class="input-primary" placeholder="Pedro Alfonso" />
      </div>
      <div>
        <label class="block mb-2 text-sm font-medium text-gray-600">Especialidad</label>
        <select class="input-primary">
          <option selected value="Solter">Fisioterapeuta general</option>
          <option value="deportiva">Fisioterapia deportiva</option>
          <option value="neurologica">Fisioterapia neurologica</option>
          <option value="pediatrica">Fisioterapia pediatrica</option>
          <option value="geriatrica">Fisioterapia geriatrica</option>
          <option value="ortopedica">Fisioterapia ortopedica</option>
          <option value="Otro">Otro</option>
        </select>
      </div>
      <div>
        <label class="block mb-2 text-sm font-medium text-gray-600">Correo electronico</label>
        <input type="text" class="input-primary" placeholder="al00000@uacam.mx" />
      </div>
      <div>
        <label class="block mb-2 text-sm font-medium text-gray-600">Teléfono</label>
        <input type="tel" class="input-primary" placeholder="9812308723" maxlength="10" />
      </div>
      <div>
        <label class="block mb-2 text-sm font-medium text-gray-600">Cambiar contraseña</label>
        <div class="relative">
          <input
            :type="mostrarContasena ? 'text' : 'password'" class="input-primary w-full pr-10"
            placeholder="Escribe aqui tu nueva contraseña"
          />
          <button type="button" @click="verContrasena" class="absolute inset-y-0 right-0 flex items-center pr-3">
            <svg v-if="mostrarContasena" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                 stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
            </svg>
          </button>
        </div>
      </div>
      <div>
        <label class="block mb-2 text-sm font-medium text-gray-600">Nacionalidad</label>
        <input type="text" class="input-primary" maxlength="20" placeholder="Escribe aqui tu nacionalidad" />
      </div>
      <div class="flex justify-end">
        <button class="button-primary telefono:w-full">Guardar cambios</button>
      </div>
    </section>
  </div>
</template>

<style scoped>
</style>