<script setup>
import { ref } from 'vue'

const numPadresFallecidos = ref(null)
const numHermanosFallecidos = ref(null)
const numHijosFallecidos = ref(null)
const numeroGestas = ref(null)
const tipoInterrogatorio = ref('Directo')
const editar = ref(true)

function handleChange(tipo) {
   tipoInterrogatorio.value = tipo
}

const editarDatos = () =>{
   editar.value = !editar.value
}
</script>

<template>
   <div class="flex gap-3 flex-col text-sm">
      <section class="overflow-x-auto rounded-sm border shadow-sm">
         <div class="w-full text-sm text-gray-500">
            <header class="text-black bg-gray-100 px-6 py-3 telefono:text-center">
               <h2>Tipo de interrogatorio</h2>
            </header>
            <div>
               <section
                  class="tablet:flex-col flex px-6 py-3 items-center telefono:flex-col gap-4 telefono:text-center tablet:text-center">
                  <div class="text-gray-600 w-[200px] laptop:w-4/12 telefono:w-1/2">
                     <label>Tipo de interrogatorio</label>
                  </div>
                  <div
                     class="flex w-full desktop:justify-center tablet:justify-center laptop:w-6/12 telefono:w-full justify-center">
                     <input type="radio" id="opcion1" name="opcion" class="custom-radio hidden" :disabled="editar"
                            @change="handleChange('Directo')" checked>
                     <label for="opcion1"
                            class="opcion border-principal rounded-sm hover:outline-0 focus:text-blue-900 focus:outline-0 focus:border-blue-500 p-2 pr-6 pl-6 cursor-pointer hover:bg-principal hover:text-white">Directo</label>
                     <input type="radio" id="opcion2" name="opcion" class="custom-radio hidden" :disabled="editar"
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
                        <input class="h-[40px] inactive-input"
                               type="text"
                               placeholder="Responsable">
                     </div>
                  </section>
               </transition>
            </div>
         </div>
      </section>
      <section class="overflow-x-auto rounded-sm border shadow">
         <div class="w-full text-sm text-left rtl:text-right text-gray-500">
            <header class="text-black bg-gray-100 px-6 py-3 telefono:text-center">
               <h2>Heredo-Familiares</h2>
            </header>
            <div class="px-6 py-3">
               <section class="flex flex-col gap-3">
                  <div class="flex w-full gap-4 telefono:flex-col">
                     <div class="w-4/12 telefono:w-full">
                        <div class="flex flex-col">
                           <label class="text-gray-600 mb-2">Padres</label>
                           <input type="number" :disabled="editar"
                                  class="h-[40px] mb-2 inactive-input"
                                  placeholder="Numero de padres">
                        </div>
                        <div class="flex flex-col">
                           <label class="text-gray-600 mb-2">Padres fallecidos</label>
                           <input v-model="numPadresFallecidos" class="h-[40px] mb-2 inactive-input" :disabled="editar"
                                  type="number" placeholder="Numero de padres fallecidos">
                        </div>
                        <transition
                           enter-active-class="transition-opacity duration-500"
                           enter-from-class="opacity-0"
                           enter-to-class="opacity-100"
                           leave-active-class="transition-opacity duration-500"
                           leave-from-class="opacity-100"
                           leave-to-class="opacity-0">
                           <div class="flex flex-col" v-show="numPadresFallecidos > 0">
                              <label class="text-gray-600 mb-2">Causas de fallecimiento</label>
                              <input class="h-[40px] inactive-input" :disabled="editar"
                                     type="text" placeholder="Causa de fallecimiento">
                           </div>
                        </transition>
                     </div>
                     <div class="w-4/12 telefono:w-full">
                        <div class="flex flex-col">
                           <label class="text-gray-600 mb-2">Hermanos</label>
                           <input type="number" :disabled="editar"
                                  class="h-[40px] mb-2 inactive-input"
                                  placeholder="Numero de padres">
                        </div>
                        <div class="flex flex-col">
                           <label class="text-gray-600 mb-2 truncate">Hermanos fallecidos</label>
                           <input v-model="numHermanosFallecidos" class="h-[40px] mb-2 inactive-input" :disabled="editar"
                                  type="number" placeholder="Numero de Hermanos fallecidos">
                        </div>
                        <transition
                           enter-active-class="transition-opacity duration-500"
                           enter-from-class="opacity-0"
                           enter-to-class="opacity-100"
                           leave-active-class="transition-opacity duration-500"
                           leave-from-class="opacity-100"
                           leave-to-class="opacity-0">
                           <div class="flex flex-col" v-show="numHermanosFallecidos > 0">
                              <label class="text-gray-600 mb-2">Causas de fallecimiento</label>
                              <input class="h-[40px] inactive-input" :disabled="editar"
                                     type="text" placeholder="Causa de fallecimiento">
                           </div>
                        </transition>
                     </div>
                     <div class="w-4/12 telefono:w-full">
                        <div class="flex flex-col">
                           <label class="text-gray-600 mb-2">Hijos</label>
                           <input type="number" :disabled="editar"
                                  class="h-[40px] mb-2 inactive-input"
                                  placeholder="Numero de padres">
                        </div>
                        <div class="flex flex-col">
                           <label class="text-gray-600 mb-2">Hijos fallecidos</label>
                           <input v-model="numHijosFallecidos" class="h-[40px] mb-2 inactive-input" :disabled="editar"
                                  type="number" placeholder="Numero de Hijos fallecidos">
                        </div>
                        <transition
                           enter-active-class="transition-opacity duration-500"
                           enter-from-class="opacity-0"
                           enter-to-class="opacity-100"
                           leave-active-class="transition-opacity duration-500"
                           leave-from-class="opacity-100"
                           leave-to-class="opacity-0">
                           <div class="flex flex-col" v-show="numHijosFallecidos > 0">
                              <label class="text-gray-600 mb-2">Causas de fallecimiento</label>
                              <input class="h-[40px] inactive-input" :disabled="editar"
                                     type="text" placeholder="Causa de fallecimiento">
                           </div>
                        </transition>
                     </div>
                  </div>
                  <div class="flex flex-col">
                     <label class="text-gray-600 mb-2">Enfermedades</label>
                     <input type="text"
                            class="h-[40px] inactive-input" :disabled="editar"
                            placeholder="Enfermades que han padecido los familiares">
                  </div>
                  <div class="flex w-full gap-4 telefono:flex-col">
                     <div class="w-6/12 telefono:w-full">
                        <div class="flex flex-col">
                           <label class="text-gray-600 mb-2">DM</label>
                           <input type="text" :disabled="editar"
                                  class="h-[40px] inactive-input"
                                  placeholder="DM">
                        </div>
                        <div class="flex flex-col">
                           <label class="text-gray-600 mb-2 mt-2">Cancer</label>
                           <input type="text" :disabled="editar"
                                  class="h-[40px] inactive-input"
                                  placeholder="Cancer">
                        </div>
                        <div class="flex flex-col">
                           <label class="text-gray-600 mb-2 mt-2">Toxicomanias</label>
                           <input type="text" :disabled="editar"
                                  class="h-[40px] inactive-input"
                                  placeholder="Toxicomanias">
                        </div>
                     </div>
                     <div class="w-6/12 telefono:w-full">
                        <div class="flex flex-col">
                           <label class="text-gray-600 mb-2">Alcoholismo</label>
                           <input type="text"
                                  class="h-[40px] inactive-input" :disabled="editar"
                                  placeholder="Alcoholismo">
                        </div>
                        <div class="flex flex-col">
                           <label class="text-gray-600 mb-2 mt-2">Tabaquismo</label>
                           <input type="text"
                                  class="h-[40px] inactive-input"
                                  placeholder="Tabaquismo">
                        </div>
                        <div class="flex flex-col">
                           <label class="text-gray-600 mb-2 mt-2">Drogas</label>
                           <input type="text" :disabled="editar"
                                  class="h-[40px] inactive-input mb-2"
                                  placeholder="Drogas">
                        </div>
                     </div>
                  </div>
               </section>
            </div>
         </div>
      </section>
      <section class="overflow-x-auto rounded-sm border shadow">
         <div class="w-full text-sm text-left rtl:text-right text-gray-500">
            <header class="text-black bg-gray-100 px-6 py-3 telefono:text-center">
               <h2>Antecedentes patologicos</h2>
            </header>
         </div>
         <div class="px-6 py-3">
            <section class="flex flex-col gap-3">
               <div class="flex flex-col">
                  <input type="text" :disabled="editar"
                         class="h-[40px] inactive-input"
                         placeholder="Antecedentes patológicos">
               </div>
            </section>
         </div>
      </section>
      <section class="overflow-x-auto rounded-sm border shadow">
         <div class="w-full text-sm text-left rtl:text-right text-gray-500">
            <header class="text-black bg-gray-100 px-6 py-3 telefono:text-center">
               <h2>Antecedentes no patológicos</h2>
            </header>
         </div>
         <div class="px-6 py-3">
            <section class="flex flex-col gap-3">
               <div class="flex flex-col">
                  <label class="text-gray-600 mb-2">Medio laboral</label>
                  <input type="text" :disabled="editar"
                         class="h-[40px] inactive-input"
                         placeholder="Medio laboral">
               </div>
               <div class="flex flex-col">
                  <label class="text-gray-600 mb-2">Medio Sociocultural</label>
                  <input class="h-[40px] inactive-input" :disabled="editar"
                         type="text" placeholder="Medio Sociocultural">
               </div>
               <div class="flex flex-col">
                  <label class="text-gray-600 mb-2">Medio Fisicoambiental</label>
                  <input class="h-[40px] inactive-input" :disabled="editar"
                         type="text" placeholder="Medio Fisicoambiental">
               </div>
            </section>
         </div>
      </section>
      <section class="overflow-x-auto rounded-sm border shadow" v-show="true">
         <div class="w-full text-sm text-left rtl:text-right text-gray-500">
            <header class="text-black bg-gray-100 px-6 py-3 telefono:text-center">
               <h2>Gineco-Obstetricos</h2>
            </header>
         </div>
         <div class="px-6 py-3">
            <section class="flex flex-col gap-3">
               <div class="flex flex-col">
                  <div class="flex gap-4 mb-2 telefono:flex-col">
                     <div class="flex flex-col w-full">
                        <label class="text-gray-600 mb-2">FUM</label>
                        <input type="text" :disabled="editar"
                               class="h-[40px] inactive-input"
                               placeholder="FUM">
                     </div>
                     <div class="flex flex-col w-full">
                        <label class="text-gray-600 mb-2">FPP</label>
                        <input type="text" :disabled="editar"
                               class="h-[40px] inactive-input"
                               placeholder="FPP">
                     </div>
                     <div class="flex flex-col w-full">
                        <label class="text-gray-600 mb-2">Edad gestional</label>
                        <input type="text" :disabled="editar"
                               class="h-[40px] inactive-input"
                               placeholder="Edad gestional">
                     </div>
                     <div class="flex flex-col w-full">
                        <label class="text-gray-600 mb-2">Semanas</label>
                        <input type="text" :disabled="editar"
                               class="h-[40px] inactive-input"
                               placeholder="Semanas">
                     </div>
                  </div>
                  <div class="flex gap-4 mb-2 telefono:flex-col">
                     <div class="flex flex-col w-full">
                        <label class="text-gray-600 mb-2">Edad de la menarca</label>
                        <input type="text" :disabled="editar"
                               class="h-[40px] inactive-input"
                               placeholder="Edad de la menarca">
                     </div>
                     <div class="flex flex-col w-full">
                        <label class="text-gray-600 mb-2">Ritmo Menstrual</label>
                        <input type="text" :disabled="editar"
                               class="h-[40px] inactive-input"
                               placeholder="Ritmo Menstrual">
                     </div>
                     <div class="flex flex-col w-full">
                        <label class="text-gray-600 mb-2">Flujo vaginal</label>
                        <input type="text" :disabled="editar"
                               class="h-[40px] inactive-input"
                               placeholder="Flujo vaginal">
                     </div>
                  </div>
                  <div class="flex gap-4 mb-2 telefono:flex-col">
                     <div class="flex flex-col w-full">
                        <label class="text-gray-600 mb-2">Gestas</label>
                        <input type="number" v-model="numeroGestas" :disabled="editar"
                               class="h-[40px] inactive-input"
                               placeholder="Numero de gestas">
                     </div>
                     <transition
                        enter-active-class="transition-opacity duration-500"
                        enter-from-class="opacity-0"
                        enter-to-class="opacity-100"
                        leave-active-class="transition-opacity duration-500"
                        leave-from-class="opacity-100"
                        leave-to-class="opacity-0">
                        <div class="flex gap-4 w-full telefono:flex-col" v-show="numeroGestas > 0">
                           <div class="flex flex-col w-full">
                              <label class="text-gray-600 mb-2">Partos</label>
                              <input type="number" :disabled="editar"
                                     class="h-[40px] inactive-input"
                                     placeholder="Numero de partos">
                           </div>
                           <div class="flex flex-col w-full">
                              <label class="text-gray-600 mb-2">Cesareas</label>
                              <input type="number" :disabled="editar"
                                     class="h-[40px] inactive-input"
                                     placeholder="Numero de cesareas">
                           </div>
                           <div class="flex flex-col w-full">
                              <label class="text-gray-600 mb-2">Abortos</label>
                              <input type="number" :disabled="editar"
                                     class="h-[40px] inactive-input"
                                     placeholder="Numero de abortos">
                           </div>
                        </div>
                     </transition>
                  </div>
                  <div class="flex gap-4 mb-2 telefono:flex-col">
                     <div class="flex flex-col w-full">
                        <label class="text-gray-600 mb-2">Anticonceptivos</label>
                        <input type="text" :disabled="editar"
                               class="h-[40px] inactive-input"
                               placeholder="Anticonceptivos">
                     </div>
                     <div class="flex flex-col w-full">
                        <label class="text-gray-600 mb-2">Cirugias</label>
                        <input type="text" :disabled="editar"
                               class="h-[40px] inactive-input"
                               placeholder="Cirugas del paciente">
                     </div>
                  </div>
               </div>
            </section>
         </div>
      </section>
      <div class="w-full flex justify-end gap-3 px-3 telefono:flex-col-reverse telefono:p-0">
         <button @click="editarDatos">
            <p v-if="editar === true" class="text-blue-700 font-medium underline hover:text-blue-800 telefono:basis-full p-3 pr-6 pl-6">Editar</p>
            <p v-else class="text-blue-700 font-medium underline hover:text-red-400 telefono:basis-full">Cancelar</p>
         </button>
         <transition
            enter-active-class="transition-opacity duration-500"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="transition-opacity duration-200"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0">
            <button class="button-primary" v-show="!editar">Aceptar</button>
         </transition>
      </div>
   </div>
</template>

<style scoped>
.custom-radio:checked + .opcion {
  @apply bg-principal text-white
}
</style>