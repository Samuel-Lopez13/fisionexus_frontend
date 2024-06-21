<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { pacientesQueries } from '@/api/pacientes/pacientesQueries.js'
import { pacientesCommand } from '@/api/pacientes/pacientesCommand.js'

const route = useRoute();

let pacienteId = ref(route.params.id)
let nombre = ref('')
let sexo = ref('')

let tipoInterrogatorio = ref(true)
let responsable = ref(null)
let padres = ref(null)
let padresVivos = ref(null)
let padresCausaMuerte = ref(null)
let hermanos = ref(null)
let hermanosVivos = ref(null)
let hermanosCausaMuerte = ref(null)
let hijos = ref(null)
let hijosVivos = ref(null)
let hijosCausaMuerte = ref(null)
let dm = ref(null)
let hta = ref(null)
let cancer = ref(null)
let alcoholismo = ref(null)
let tabaquismo = ref(null)
let drogas = ref(null)
let antecedentesPatologicos = ref('Antecedentes patologicos')
let medioLaboral = ref('medio laboral')
let medioSociocultural = ref('medio sociocultural')
let medioFisicoambiental = ref('medioFisicoambiental')
let fum = ref(42)
let fpp = ref(null)
let edadGestional = ref(null)
let semanas = ref(null)
let menarca = ref(12)
let ritmo = ref(null)
let gestas = ref(null)
let partos = ref(null)
let cesareas = ref(null)
let abortos = ref(null)
let cirugias = ref(null)
let flujoVaginalId = ref(1)
let tipoAnticonceptivoId = ref(1)

onMounted(() => {
    datosPaciente()
})

/* Peticiones HTTP */
const datosPaciente = async () => {
    let response = await pacientesQueries.getDatosPaciente(pacienteId.value);
    nombre.value = response.nombre
    sexo.value = response.sexo
}

const interrogatorioPaciente = async () => {
    let response = await pacientesCommand.postInterrogatorio(sexo.value, parseInt(pacienteId.value), tipoInterrogatorio.value, responsable.value, padres.value, padresVivos.value, padresCausaMuerte.value, hermanos.value, hermanosVivos.value, hermanosCausaMuerte.value, hijos.value, hijosVivos.value, hijosCausaMuerte.value, dm.value, hta.value, cancer.value, alcoholismo.value, tabaquismo.value, drogas.value, antecedentesPatologicos.value, medioLaboral.value, medioSociocultural.value, medioFisicoambiental.value, fum.value.toString(), fpp.value, edadGestional.value, semanas.value, menarca.value.toString(), ritmo.value, gestas.value, partos.value, cesareas.value, abortos.value, cirugias.value, flujoVaginalId.value, tipoAnticonceptivoId.value)

    console.log(response)
}

function handleChange(tipo) {
    tipoInterrogatorio.value = tipo
}

const validacionPadres = () => {
    if (padresVivos.value < 0 || padresVivos.value == '') {
        padresVivos.value = 0
    }

    if (padresVivos.value > padres.value) {
        padresVivos.value = padres.value
    }
}

const validacionHermanos = () => {
    if (hermanosVivos.value < 0 || hermanosVivos.value == '') {
        hermanosVivos.value = 0
    }

    if (hermanosVivos.value > hermanos.value) {
        hermanosVivos.value = hermanos.value
    }
}

const validacionHijos = () => {
    if (hijosVivos.value < 0 || hijosVivos.value == '') {
        hijosVivos.value = 0
    }

    if (hijosVivos.value > hijos.value) {
        hijosVivos.value = hijos.value
    }
}
</script>

<template>
    <div class="flex gap-3 flex-col text-sm">
        <h1 class="text-blue-600 text-xl font-semibold">Interrogatorio del paciente ({{ nombre }} - {{ sexo }})</h1>
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
                            <input type="radio" id="opcion1" name="opcion" class="custom-radio hidden"
                                   @change="handleChange(true)" checked>
                            <label for="opcion1"
                                   class="opcion border-principal rounded-sm hover:outline-0 focus:text-blue-900 focus:outline-0 focus:border-blue-500 p-2 pr-6 pl-6 cursor-pointer hover:bg-principal hover:text-white">Directo</label>
                            <input type="radio" id="opcion2" name="opcion" class="custom-radio hidden"
                                   @change="handleChange(false)">
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
                        <section v-show="tipoInterrogatorio === false" class="mb-3 px-6 py-1 flex flex-col gap-3">
                            <div class="flex flex-col">
                                <label class="text-gray-600 mb-2 telefono:text-center telefono:mb-2">Responsable del
                                    paciente</label>
                                <input v-model="responsable" class="h-[40px] input-primary" type="text"
                                       placeholder="Responsable">
                            </div>
                        </section>
                    </transition>
                </div>
            </div>
        </section>
        <h3 class="text-gray-600 text-lg font-semibold">
            Antecedentes
        </h3>
        <section class="overflow-x-auto rounded-sm border shadow pb-2">
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
                                    <input v-model="padres" type="number"
                                           class="h-[40px] mb-2 input-primary"
                                           placeholder="Numero de padres">
                                </div>
                                <div class="flex flex-col">
                                    <label class="text-gray-600 mb-2">Padres vivos</label>
                                    <input @blur="validacionPadres()" v-model="padresVivos"
                                           class="h-[40px] mb-2 input-primary"
                                           min="0" :max="padres" type="number" placeholder="Numero de padres vivos">
                                </div>
                                <transition
                                    enter-active-class="transition-opacity duration-500"
                                    enter-from-class="opacity-0"
                                    enter-to-class="opacity-100"
                                    leave-active-class="transition-opacity duration-500"
                                    leave-from-class="opacity-100"
                                    leave-to-class="opacity-0">
                                    <div class="flex flex-col" v-show="padresVivos < padres && padresVivos != null">
                                        <label class="text-gray-600 mb-2">Causas de fallecimiento</label>
                                        <input v-model="padresCausaMuerte" class="h-[40px] input-primary"
                                               type="text" placeholder="Causa de fallecimiento">
                                    </div>
                                </transition>
                            </div>
                            <div class="w-4/12 telefono:w-full">
                                <div class="flex flex-col">
                                    <label class="text-gray-600 mb-2">Hermanos</label>
                                    <input v-model="hermanos" type="number"
                                           class="h-[40px] mb-2 input-primary"
                                           placeholder="Numero de padres">
                                </div>
                                <div class="flex flex-col">
                                    <label class="text-gray-600 mb-2">Hermanos vivos</label>
                                    <input @blur="validacionHermanos()" v-model="hermanosVivos" class="h-[40px] mb-2 input-primary"
                                           type="number" placeholder="Numero de hermanos vivos">
                                </div>
                                <transition
                                    enter-active-class="transition-opacity duration-500"
                                    enter-from-class="opacity-0"
                                    enter-to-class="opacity-100"
                                    leave-active-class="transition-opacity duration-500"
                                    leave-from-class="opacity-100"
                                    leave-to-class="opacity-0">
                                    <div class="flex flex-col" v-show="hermanosVivos < hermanos && hermanosVivos != null">
                                        <label class="text-gray-600 mb-2">Causas de fallecimiento</label>
                                        <input v-model="hermanosCausaMuerte" class="h-[40px] input-primary"
                                               type="text" placeholder="Causa de fallecimiento">
                                    </div>
                                </transition>
                            </div>
                            <div class="w-4/12 telefono:w-full">
                                <div class="flex flex-col">
                                    <label class="text-gray-600 mb-2">Hijos</label>
                                    <input v-model="hijos" type="number"
                                           class="h-[40px] mb-2 input-primary"
                                           placeholder="Numero de padres">
                                </div>
                                <div class="flex flex-col">
                                    <label class="text-gray-600 mb-2">Hijos vivos</label>
                                    <input @blur="validacionHijos()" v-model="hijosVivos" class="h-[40px] mb-2 input-primary"
                                           type="number" placeholder="Numero de hijos vivos">
                                </div>
                                <transition
                                    enter-active-class="transition-opacity duration-500"
                                    enter-from-class="opacity-0"
                                    enter-to-class="opacity-100"
                                    leave-active-class="transition-opacity duration-500"
                                    leave-from-class="opacity-100"
                                    leave-to-class="opacity-0">
                                    <div class="flex flex-col" v-show="hijosVivos < hijos && hijosVivos != null">
                                        <label class="text-gray-600 mb-2">Causas de fallecimiento</label>
                                        <input v-model="hijosCausaMuerte" class="h-[40px] input-primary"
                                               type="text" placeholder="Causa de fallecimiento">
                                    </div>
                                </transition>
                            </div>
                        </div>
                        <div class="flex w-full gap-4 telefono:flex-col">
                            <div class="w-[100%] overflow-x-auto rounded-sm border">
                                <header class="text-black bg-gray-100 px-6 py-3 telefono:text-center">
                                    <h2>Enfermedades</h2>
                                </header>
                                <div class="w-[100%] telefono:w-full p-4">
                                    <div class="flex flex-col">
                                        <label class="text-gray-600 mb-2">DM</label>
                                        <input v-model="dm" type="text"
                                               class="h-[40px] input-primary"
                                               placeholder="DM">
                                    </div>
                                    <div class="flex flex-col">
                                        <label class="text-gray-600 mb-2 mt-2">HTA</label>
                                        <input v-model="hta" type="text"
                                               class="h-[40px] input-primary"
                                               placeholder="HTA">
                                    </div>
                                    <div class="flex flex-col">
                                        <label class="text-gray-600 mb-2 mt-2">Cancer</label>
                                        <input v-model="cancer" type="text"
                                               class="h-[40px] input-primary"
                                               placeholder="Cancer">
                                    </div>
                                </div>
                            </div>
                            <div class="w-[100%] overflow-x-auto rounded-sm border">
                                <header class="text-black bg-gray-100 px-6 py-3 telefono:text-center">
                                    <h2>Toxicomanias</h2>
                                </header>
                                <div class="w-[100%] telefono:w-full p-4">
                                    <div class="flex flex-col">
                                        <label class="text-gray-600 mb-2">Alcoholismo</label>
                                        <input v-model="alcoholismo" type="text"
                                               class="h-[40px] input-primary"
                                               placeholder="Alcoholismo">
                                    </div>
                                    <div class="flex flex-col">
                                        <label class="text-gray-600 mb-2 mt-2">Tabaquismo</label>
                                        <input v-model="tabaquismo" type="text"
                                               class="h-[40px] input-primary"
                                               placeholder="Tabaquismo">
                                    </div>
                                    <div class="flex flex-col">
                                        <label class="text-gray-600 mb-2 mt-2">Drogas</label>
                                        <input v-model="drogas" type="text"
                                               class="h-[40px] input-primary mb-2"
                                               placeholder="Drogas">
                                    </div>
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
                        <input v-model="antecedentesPatologicos" type="text"
                               class="h-[40px] input-primary"
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
                        <input v-model="medioLaboral" type="text"
                               class="h-[40px] input-primary"
                               placeholder="Medio laboral">
                    </div>
                    <div class="flex flex-col">
                        <label class="text-gray-600 mb-2">Medio Sociocultural</label>
                        <input v-model="medioSociocultural" class="h-[40px] input-primary"
                               type="text" placeholder="Medio Sociocultural">
                    </div>
                    <div class="flex flex-col">
                        <label class="text-gray-600 mb-2">Medio Fisicoambiental</label>
                        <input v-model="medioFisicoambiental" class="h-[40px] input-primary"
                               type="text" placeholder="Medio Fisicoambiental">
                    </div>
                </section>
            </div>
        </section>
        <section class="overflow-x-auto rounded-sm border shadow" v-show="sexo == 'Mujer'">
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
                                <input v-model="fum" type="text"
                                       class="h-[40px] input-primary"
                                       placeholder="FUM">
                            </div>
                            <div class="flex flex-col w-full">
                                <label class="text-gray-600 mb-2">FPP</label>
                                <input v-model="fpp" type="text"
                                       class="h-[40px] input-primary"
                                       placeholder="FPP">
                            </div>
                            <div class="flex flex-col w-full">
                                <label class="text-gray-600 mb-2">Edad gestional</label>
                                <input v-model="edadGestional" type="text"
                                       class="h-[40px] input-primary"
                                       placeholder="Edad gestional">
                            </div>
                            <div class="flex flex-col w-full">
                                <label class="text-gray-600 mb-2">Semanas</label>
                                <input v-model="semanas" type="text"
                                       class="h-[40px] input-primary"
                                       placeholder="Semanas">
                            </div>
                        </div>
                        <div class="flex gap-4 mb-2 telefono:flex-col">
                            <div class="flex flex-col w-full">
                                <label class="text-gray-600 mb-2">Edad de la menarca</label>
                                <input v-model="menarca" type="text"
                                       class="h-[40px] input-primary"
                                       placeholder="Edad de la menarca">
                            </div>
                            <div class="flex flex-col w-full">
                                <label class="text-gray-600 mb-2">Ritmo Menstrual</label>
                                <input v-model="ritmo" type="text"
                                       class="h-[40px] input-primary"
                                       placeholder="Ritmo Menstrual">
                            </div>
                            <div class="flex flex-col w-full">
                                <label class="text-gray-600 mb-2">Flujo vaginal</label>
                                <select class="h-[40px] input-primary" v-model="flujoVaginalId">
                                    <option selected :value="1">Ligero</option>
                                    <option :value="2">Espeso y blanco</option>
                                    <option :value="3">Escaso</option>
                                </select>
                            </div>
                        </div>
                        <div class="flex gap-4 mb-2 telefono:flex-col">
                            <div class="flex flex-col w-full">
                                <label class="text-gray-600 mb-2">Gestas</label>
                                <input v-model="gestas" type="number"
                                       class="h-[40px] input-primary"
                                       placeholder="Numero de gestas">
                            </div>
                            <transition
                                enter-active-class="transition-opacity duration-500"
                                enter-from-class="opacity-0"
                                enter-to-class="opacity-100"
                                leave-active-class="transition-opacity duration-500"
                                leave-from-class="opacity-100"
                                leave-to-class="opacity-0">
                                <div class="flex gap-4 w-full telefono:flex-col" v-show="gestas > 0">
                                    <div class="flex flex-col w-full">
                                        <label class="text-gray-600 mb-2">Partos</label>
                                        <input v-model="partos" type="number"
                                               class="h-[40px] input-primary"
                                               placeholder="Numero de partos">
                                    </div>
                                    <div class="flex flex-col w-full">
                                        <label class="text-gray-600 mb-2">Cesareas</label>
                                        <input v-model="cesareas" type="number"
                                               class="h-[40px] input-primary"
                                               placeholder="Numero de cesareas">
                                    </div>
                                    <div class="flex flex-col w-full">
                                        <label class="text-gray-600 mb-2">Abortos</label>
                                        <input v-model="abortos" type="number"
                                               class="h-[40px] input-primary"
                                               placeholder="Numero de abortos">
                                    </div>
                                </div>
                            </transition>
                        </div>
                        <div class="flex gap-4 mb-2 telefono:flex-col">
                            <div class="flex flex-col w-full">
                                <label class="text-gray-600 mb-2">Anticonceptivos</label>
                                <select class="h-[40px] input-primary" v-model="tipoAnticonceptivoId">
                                    <option selected :value="1">Ninguno</option>
                                    <option :value="2">Barrera</option>
                                    <option :value="3">Orales</option>
                                    <option :value="4">Naturales</option>
                                </select>
                            </div>
                            <div class="flex flex-col w-full">
                                <label class="text-gray-600 mb-2">Cirugias</label>
                                <input v-model="cirugias" type="text"
                                       class="h-[40px] input-primary"
                                       placeholder="Cirugas del paciente">
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    </div>
    <div class="w-full flex gap-6 justify-end py-4 telefono:flex-col-reverse">
        <button class="text-blue-700 underline hover:text-red-400 telefono:basis-full">
            Continuar sin interrogatorio
        </button>
        <button @click="interrogatorioPaciente()" type="submit" class="button-primary">Guardar</button>
    </div>
</template>

<style scoped>
.custom-radio:checked + .opcion {
    @apply bg-principal text-white
}
</style>