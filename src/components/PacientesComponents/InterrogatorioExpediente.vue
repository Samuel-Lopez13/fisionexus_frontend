<script setup>
import { ref } from 'vue';

const tipoInterrogatorio = ref('Directo');

function handleChange(tipo) {
  tipoInterrogatorio.value = tipo;
}
</script>

<template>
  <div class="flex gap-3 flex-col">
    <section class="overflow-x-auto rounded-sm border shadow-sm flex">
      <div class="w-full text-sm text-gray-500">
        <header class="text-black bg-gray-100 px-6 py-3 telefono:text-center">
          <h2 class="">Tipo de interrogatorio</h2>
        </header>
        <div class="p-6">
        <section class="flex mb-4 tablet:flex-col telefono:flex-col gap-4 telefono:text-center tablet:text-center">
          <div class="text-gray-600 laptop:w-6/12 telefono:w-full">
            <label class="">Tipo de interrogatorio</label>
          </div>
          <div class="laptop:w-6/12 telefono:w-full">
            <input type="radio" id="opcion1" name="opcion" class="custom-radio hidden" @change="handleChange('Directo')">
            <label for="opcion1"
                   class="opcion border-principal rounded-sm hover:outline-0 focus:text-blue-900 focus:outline-0 focus:border-blue-500 p-2 pr-6 pl-6 cursor-pointer hover:bg-principal hover:text-white">Directo</label>
            <input type="radio" id="opcion2" name="opcion" class="custom-radio hidden" @change="handleChange('Indirecto')">
            <label for="opcion2"
                   class="opcion border-principal rounded-sm hover:outline-0 focus:text-blue-900 focus:outline-0 focus:border-blue-500 p-2 pr-6 pl-6 cursor-pointer hover:bg-principal hover:text-white">Indirecto</label>
          </div>
        </section>
        <section v-show="tipoInterrogatorio === 'Indirecto'" class="mb-3 flex flex-col gap-3">
          <div class="flex flex-col">
            <label for="responsable" class="text-gray-600">Responsable del paciente</label>
            <input id="responsable"
                   class="h-[40px] w-full border-principal rounded-sm p-3 text-gray-600 hover:outline-0 focus:text-blue-900 focus:outline-0 focus:border-blue-500 focus:border-2"
                   placeholder="Antecedentes patológicos">
          </div>
        </section>
        </div>
      </div>
    </section>
    <section class="overflow-x-auto rounded-sm border shadow">
      <div class="w-full text-sm text-left rtl:text-right text-gray-500">
        <header class="text-black bg-gray-100 px-6 py-3 telefono:text-center">
          <h2>Antecedentes</h2>
        </header>
        <div class="p-6">
          <section class="mb-3 flex flex-col gap-3">
            <h3 class="mb-2">Patológicos</h3>
            <div class="flex flex-col">
              <label for="medical-history" class="text-gray-600">Antecedentes patológicos</label>
              <input id="medical-history"
                     class="h-[40px] w-full border-principal rounded-sm p-3 text-gray-600 hover:outline-0 focus:text-blue-900 focus:outline-0 focus:border-blue-500 focus:border-2"
                     placeholder="Antecedentes patológicos">
            </div>
          </section>
          <section class="flex flex-col gap-3">
            <h3 class="mb-2 mt-2">No patológicos</h3>
            <div class="flex flex-col">
              <label for="work-environment" class="text-gray-600">Medio laboral</label>
              <input id="work-environment"
                     class="h-[40px] w-full border-principal rounded-sm p-3 text-gray-600 hover:outline-0 focus:text-blue-900 focus:outline-0 focus:border-blue-500 focus:border-2"
                     placeholder="Medio laboral">
            </div>
            <div class="flex flex-col">
              <label for="sociocultural-environment" class="text-gray-600">Medio Sociocultural</label>
              <input id="sociocultural-environment"
                     class="h-[40px] w-full border-principal rounded-sm p-3 text-gray-600 hover:outline-0 focus:text-blue-900 focus:outline-0 focus:border-blue-500 focus:border-2"
                     placeholder="Medio Sociocultural">
            </div>
            <div class="flex flex-col">
              <label for="physical-environment" class="text-gray-600">Medio Fisicoambiental</label>
              <input id="physical-environment"
                     class="h-[40px] w-full border-principal rounded-sm p-3 text-gray-600 hover:outline-0 focus:text-blue-900 focus:outline-0 focus:border-blue-500 focus:border-2"
                     placeholder="Medio Fisicoambiental">
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