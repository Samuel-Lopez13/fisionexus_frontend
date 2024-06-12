<script setup>
import { ref } from 'vue'
import ImagenDefault from '@/assets/icons/Usuario.png'

let imageUrl = ref(ImagenDefault)

const imagenSeleccionada = (event) => {
  let imagen = event.target.files[0]
  if (imagen) {
    let leer = new FileReader()
    leer.onload = (e) =>{
      imageUrl.value = e.target.result
    }
    leer.readAsDataURL(imagen)
  }
}
</script>

<template>
  <div class="flex telefono:flex-col">
    <section class="mr-3">
      <div class="flex flex-col items-center gap-6 text-center telefono:justify-around tablet:justify-center">
        <header class="flex flex-col gap-4 telefono:w-full telefono:items-center">
          <h1 class="text-xl font-bold">
            Nuevo usuario
          </h1>
          <img :src="imageUrl"
               class="h-40 w-40 object-cover rounded-full">
        </header>
        <label for="inputFile"
                class="button-primary flex cursor-pointer">
          Adjuntar foto
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 ml-0.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13" />
          </svg>
        </label>
        <input type="file" id="inputFile" class="hidden"  @change="imagenSeleccionada">
        <svg class="w-64 h-64 telefono:w-66 telefono:h-60" viewBox="0 0 250 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M197.582 0H0V300H250V43.152L197.582 0Z" fill="#FFD890" fill-opacity="0.5" />
          <path d="M196.701 44.1913L196.576 1.0387L248.995 44.1913H196.701Z" fill="#FF9839" fill-opacity="0.5" />
          <foreignObject x="10" y="50" width="100%" height="100%">
            <textarea class="svgtext w-full" placeholder="Notas internas"></textarea>
          </foreignObject>
        </svg>
      </div>
    </section>
    <section class="desktop:w-9/12 laptop:w-9/12 tablet:w-full telefono:w-full">
        <header>
          <h1 class="text-principal text-xl mb-2">Información general</h1>
        </header>
        <hr class="border-b-blue-500 mb-3">
        <div class="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-white">Nombre(s) <span class="text-blue-600">*</span> </label>
            <input type="text"
                   class="input-primary"
                   placeholder="Pedro Alfonso" required />
          </div>
          <div>
            <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-white">Apellidos <span class="text-blue-600">*</span></label>
            <input type="text"
                   class="input-primary"
                   placeholder="Lopez Blanco"
                   required />
          </div>

          <div>
            <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-white">Fecha de
              nacimiento <span class="text-blue-600">*</span> </label>
            <input type="date" class="input-primary" placeholder="Select date">
          </div>

          <div>
            <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-white">Sexo <span class="text-blue-600">*</span></label>
            <select class="input-primary">
              <option selected value="Masculino">Masculino</option>
              <option value="Femenino">Femenino</option>
            </select>
          </div>

          <div>
            <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-white">Estado
              Civil <span class="text-blue-600">*</span> </label>
            <input type="text"
                   class="input-primary"
                   placeholder="Soltero"
                   required />
          </div>

          <div>
            <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-white">Ocupación<span class="text-blue-600">*</span></label>
            <input type="text"
                   class="input-primary"
                   placeholder="Abogado"
                   required />
          </div>

          <div>
            <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-white">Teléfono<span class="text-blue-600">*</span></label>
            <input type="tel"
                   class="input-primary"
                   placeholder="9812308723"
                   maxlength="10"
                   required />
          </div>

          <div>
            <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-white">Institución <span class="text-blue-600">*</span></label>
            <input type="text"
                   class="input-primary"
                   placeholder="SEAFI"
                   required />
          </div>
        </div>
        <header>
          <h1 class="text-principal text-xl mb-2">Información de residencia</h1>
        </header>
        <hr class="mb-3">
        <div class="flex gap-6 telefono:flex-wrap">
          <div class="mb-6 basis-3/4 telefono:basis-full">
            <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-white">Domicilio <span class="text-blue-600">*</span></label>
            <input type="text"
                   class="input-primary"
                   placeholder="1234 Calle Principal" required />
          </div>
          <div class="mb-6 basis-1/4 telefono:basis-full">
            <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-white">Código
              Postal <span class="text-blue-600">*</span></label>
            <input type="text"
                   class="input-primary"
                   placeholder="00030"
                   maxlength="5"
                   required />
          </div>
        </div>
        <div class="flex justify-end gap-6 flex-wrap">
          <button
            class="text-blue-700 underline hover:!text-blue-500 telefono:basis-full">
            Cancelar
          </button>
          <button type="submit"
                  class="button-primary telefono:w-full">
            Guardar Paciente
          </button>
        </div>
    </section>
  </div>
</template>


<style scoped>

.svgtext {
  width: 80%;
  height: 80%;
  background-color: transparent;
  margin-right: 20px;
  outline: none;
  border: none;
  resize: none;
  scrollbar-width: thin;
  box-shadow: none;
}
</style>