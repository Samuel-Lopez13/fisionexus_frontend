<script setup>
import { ref } from 'vue'

const tipoInterrogatorio = ref('Directo')

function handleChange(tipo) {
  tipoInterrogatorio.value = tipo
}
</script>

<template>
  <div class="flex gap-3 flex-col">
    <section class="overflow-x-auto rounded-sm border shadow-sm">
      <div class="w-full text-sm text-gray-500">
        <header class="text-black bg-gray-100 px-6 py-3 telefono:text-center">
          <h2 class="">Tipo de interrogatorio</h2>
        </header>
        <div>
          <section
            class="tablet:flex-col flex px-6 py-3 items-center telefono:flex-col gap-4 telefono:text-center tablet:text-center">
            <div class="text-gray-600 w-[200px] laptop:w-4/12 telefono:w-1/2">
              <label>Tipo de interrogatorio</label>
            </div>
            <div class="flex w-full desktop:justify-center tablet:justify-center laptop:w-6/12 telefono:w-full justify-center">
              <input type="radio" id="opcion1" name="opcion" class="custom-radio hidden"
                     @change="handleChange('Directo')">
              <label for="opcion1"
                     class="opcion border-principal rounded-sm hover:outline-0 focus:text-blue-900 focus:outline-0 focus:border-blue-500 p-2 pr-6 pl-6 cursor-pointer hover:bg-principal hover:text-white">Directo</label>
              <input type="radio" id="opcion2" name="opcion" class="custom-radio hidden"
                     @change="handleChange('Indirecto')">
              <label for="opcion2"
                     class="opcion border-principal rounded-sm hover:outline-0 focus:text-blue-900 focus:outline-0 focus:border-blue-500 p-2 pr-6 pl-6 cursor-pointer hover:bg-principal hover:text-white">Indirecto</label>
            </div>
          </section>
          <transition
            enter-active-class="transition-opacity duration-500"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="transition-opacity duration-500"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0">
            <section v-show="tipoInterrogatorio === 'Indirecto'" class="mb-3 px-6 py-1 flex flex-col gap-3">
              <div class="flex flex-col">
                <label class="text-gray-600 mb-2 telefono:text-center telefono:mb-2">Responsable del
                  paciente</label>
                <input class="h-[40px] border-principal text-sm rounded-sm p-3 text-gray-600 hover:outline-0 focus:text-blue-900 focus:outline-0 focus:border-blue-500"
                       type="text"
                       placeholder="Antecedentes patológicos">
              </div>
            </section>
          </transition>
        </div>
      </div>
    </section>
    <section class="overflow-x-auto rounded-sm border shadow">
      <div class="w-full text-sm text-left rtl:text-right text-gray-500">
        <header class="text-black bg-gray-100 px-6 py-3 telefono:text-center">
          <h2>Antecedentes</h2>
        </header>
        <div class="px-6 py-3">
          <section class="mb-3 flex flex-col gap-3">
            <h3>Antecedentes patologicos</h3>
            <div class="flex flex-col">
              <input type="text"
                     class="h-[40px] border-principal text-sm rounded-sm p-3 text-gray-600 hover:outline-0 focus:text-blue-900 focus:outline-0 focus:border-blue-500"
                     placeholder="Antecedentes patológicos">
            </div>
          </section>
          <section class="flex flex-col gap-3">
            <h3 class="mt-2 mb-2">No patológicos</h3>
            <div class="flex flex-col">
              <label class="text-gray-600 mb-2">Medio laboral</label>
              <input type="text"
                     class="h-[40px] border-principal text-sm rounded-sm p-3 text-gray-600 hover:outline-0 focus:text-blue-900 focus:outline-0 focus:border-blue-500"
                     placeholder="Medio laboral">
            </div>
            <div class="flex flex-col">
              <label class="text-gray-600 mb-2">Medio Sociocultural</label>
              <input class="h-[40px] border-principal text-sm rounded-sm p-3 text-gray-600 hover:outline-0 focus:text-blue-900 focus:outline-0 focus:border-blue-500"
                     type="text" placeholder="Medio Sociocultural">
            </div>
            <div class="flex flex-col">
              <label class="text-gray-600 mb-2">Medio Fisicoambiental</label>
              <input class="h-[40px] border-principal text-sm rounded-sm p-3 text-gray-600 hover:outline-0 focus:text-blue-900 focus:outline-0 focus:border-blue-500"
                     type="text" placeholder="Medio Fisicoambiental">
            </div>
          </section>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.custom-radio:checked + .opcion {
  @apply bg-principal text-white
}
</style>