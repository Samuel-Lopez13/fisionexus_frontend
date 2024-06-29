<script setup>
import { onMounted, reactive, ref, watch } from 'vue'
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { pacientesQueries } from '@/api/pacientes/pacientesQueries.js'

onMounted(()=>{
    datosExpediente()
})

let props = defineProps({
    sexo : String,
    pacienteId : Number
})

// WATCH
watch(props, (newProps) => {
    pacienteId.value = newProps.pacienteId
    sexo.value = newProps.sexo
})

let pacienteId = ref(props.pacienteId)
let sexo = ref(props.sexo)
let spinner = ref(false)
let tipoInterrogatorio = ref(true)
let responsable = ref('')
let padresCausaMuerte = ref(null)
let hermanosCausaMuerte = ref(null)
let hijosCausaMuerte = ref(null)
let dm = ref(null)
let hta = ref(null)
let cancer = ref(null)
let alcoholismo = ref(null)
let tabaquismo = ref(null)
let drogas = ref(null)
let fum = ref(null)
let fpp = ref(null)
let edadGestional = ref(null)
let semanas = ref(null)
let menarca = ref(null)
let ritmo = ref(null)
let gestas = ref(null)
let partos = ref(null)
let cesareas = ref(null)
let abortos = ref(null)
let cirugias = ref(null)
let flujoVaginalId = ref(null)
let tipoAnticonceptivoId = ref(null)
let editar = ref(true)

//Modelos reactivos
const model = reactive({
    padres: null,
    padresVivos: null,
    hermanos: null,
    hermanosVivos: null,
    hijos: null,
    hijosVivos: null,
    antecedentesPatologicos: null,
    medioLaboral: null,
    medioSociocultural: null,
    medioFisicoambiental: null
})

const rules = {
    padres: { required },
    padresVivos: { required },
    hermanos: { required },
    hermanosVivos: { required },
    hijos: { required },
    hijosVivos: { required },
    antecedentesPatologicos: { required },
    medioLaboral: { required },
    medioSociocultural: { required },
    medioFisicoambiental: { required }
}

//Aqui se junta el modelo con las reglas
const $v = useVuelidate(rules, model)

//Peticiones HTTP

/*const actualizarInterrogatorio= async () => {
}*/

const datosExpediente = async () => {
    let respuesta = await pacientesQueries.getExpediente(pacienteId.value)
    tipoInterrogatorio.value = respuesta.tipoInterrogatorio
    responsable.value = respuesta.responsable
    //HeredoFamiliar
    model.padres = respuesta.heredoFamiliar.padres
    model.padresVivos = respuesta.heredoFamiliar.padresVivos
    padresCausaMuerte.value = respuesta.heredoFamiliar.padresCausaMuerte
    model.hermanos = respuesta.heredoFamiliar.hermanos
    model.hermanosVivos = respuesta.heredoFamiliar.hermanosVivos
    hermanosCausaMuerte.value = respuesta.heredoFamiliar.hermanosCausaMuerte
    model.hijos = respuesta.heredoFamiliar.hijos
    model.hijosVivos = respuesta.heredoFamiliar.hijosVivos
    dm.value = respuesta.heredoFamiliar.dm
    hta.value = respuesta.heredoFamiliar.hta
    cancer.value = respuesta.heredoFamiliar.cancer
    alcoholismo.value = respuesta.heredoFamiliar.alcoholismo
    tabaquismo.value = respuesta.heredoFamiliar.tabaquismo
    drogas.value = respuesta.heredoFamiliar.drogas
    //Antecedentes
    model.antecedentesPatologicos = respuesta.antecedente.antecedentesPatologicos
    //No Patologicos
    model.medioLaboral = respuesta.antecedente.medioLaboral
    model.medioSociocultural = respuesta.antecedente.medioSociocultural
    model.medioFisicoambiental = respuesta.antecedente.medioFisicoambiental
    //GinecoObstetricos Solo mujer
    fum.value = respuesta.ginecobstetricos.fum
    fpp.value = respuesta.ginecobstetricos.fpp
    edadGestional.value = respuesta.ginecobstetricos.edadGestional
    semanas.value = respuesta.ginecobstetricos.semanas
    menarca.value = respuesta.ginecobstetricos.menarca
    ritmo.value = respuesta.ginecobstetricos.ritmo
    gestas.value = respuesta.ginecobstetricos.gestas
    partos.value = respuesta.ginecobstetricos.partos
    cesareas.value = respuesta.ginecobstetricos.cesareas
    abortos.value = respuesta.ginecobstetricos.abortos
    cirugias.value = respuesta.ginecobstetricos.cirugias
    flujoVaginalId.value = respuesta.ginecobstetricos.flujoVaginalId
    tipoAnticonceptivoId.value = respuesta.ginecobstetricos.tipoAnticonceptivoId
    console.log(sexo.value + 'Aqui va sexo del gineco')
    console.log(pacienteId.value + 'Esto es el ID')
}

// Validaciones

const validacionPadres = () => {
    if (model.padresVivos < 0 || model.padresVivos == '') {
        model.padresVivos = 0
    }

    if (model.padresVivos > model.padres) {
        model.padresVivos = model.padres
    }
}

const validacionHermanos = () => {
    if (model.hermanosVivos < 0 || model.hermanosVivos == '') {
        model.hermanosVivos = 0
    }

    if (model.hermanosVivos > model.hermanos) {
        model.hermanosVivos = model.hermanos
    }
}

const validacionHijos = () => {
    if (model.hijosVivos < 0 || model.hijosVivos == '') {
        model.hijosVivos = 0
    }

    if (model.hijosVivos > model.hijos) {
        model.hijosVivos = model.hijos
    }
}

const editarDatos = () =>{
    editar.value = !editar.value
    datosExpediente()
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
                            <input type="radio" id="opcion1" name="opcion" class="custom-radio hidden" :disabled="editar" @click="tipoInterrogatorio = true"
                                  :checked="tipoInterrogatorio === true">
                            <label for="opcion1"
                                   class="opcion border-principal rounded-sm hover:outline-0 focus:text-blue-900 focus:outline-0 focus:border-blue-500 p-2 pr-6 pl-6 cursor-pointer hover:bg-principal hover:text-white">Directo</label>
                            <input type="radio" id="opcion2" name="opcion" class="custom-radio hidden" :disabled="editar" @click="tipoInterrogatorio = false"
                                   :checked="tipoInterrogatorio === false">
                            <label for="opcion2"
                                   class="opcion border-principal rounded-sm hover:outline-0 focus:text-blue-900 focus:outline-0 focus:border-blue-500 p-2 pr-6 pl-6 cursor-pointer hover:bg-principal hover:text-white">Indirecto</label>
                        </div>
                    </section>
                        <section v-show="tipoInterrogatorio === false" class="mb-3 px-6 py-1 flex flex-col gap-3 animate-fade-down animate-once">
                            <div class="flex flex-col">
                                <label class="text-gray-600 mb-2 telefono:text-center telefono:mb-2">Responsable del
                                    paciente</label>
                                <input v-model="responsable" class="h-[40px] inactive-input" type="text" :disabled="editar"
                                       placeholder="Responsable">
                            </div>
                        </section>
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
                                    <label class="text-gray-600 mb-2">Padres <span
                                        class="text-blue-600">*</span></label>
                                    <input v-model="model.padres" type="number" :disabled="editar"
                                           class="h-[40px] mb-2 inactive-input"
                                           placeholder="Numero de padres">
                                    <span v-if="$v.padres.$error" class="text-red-500 text-xs">El numeros de padres es obligatorio</span>
                                </div>
                                <div class="flex flex-col">
                                    <label class="text-gray-600 mb-2">Padres vivos <span
                                        class="text-blue-600">*</span></label>
                                    <input @blur="validacionPadres()" v-model="model.padresVivos" :disabled="editar"
                                           class="h-[40px] mb-2 inactive-input"
                                           min="0" :max="model.padres" type="number" placeholder="Numero de padres vivos">
                                    <span v-if="$v.padresVivos.$error" class="text-red-500 text-xs">El numero de padres vivos es obligatorio</span>
                                </div>
                                <transition
                                    enter-active-class="transition-opacity duration-500"
                                    enter-from-class="opacity-0"
                                    enter-to-class="opacity-100"
                                    leave-active-class="transition-opacity duration-500"
                                    leave-from-class="opacity-100"
                                    leave-to-class="opacity-0">
                                    <div class="flex flex-col" v-show="model.padresVivos < model.padres && model.padresVivos != null">
                                        <label class="text-gray-600 mb-2">Causas de fallecimiento</label>
                                        <input v-model="padresCausaMuerte" class="h-[40px] inactive-input" :disabled="editar"
                                               type="text" placeholder="Causa de fallecimiento">
                                    </div>
                                </transition>
                            </div>
                            <div class="w-4/12 telefono:w-full">
                                <div class="flex flex-col">
                                    <label class="text-gray-600 mb-2">Hermanos <span
                                        class="text-blue-600">*</span></label>
                                    <input v-model="model.hermanos" type="number" :disabled="editar"
                                           class="h-[40px] mb-2 inactive-input"
                                           placeholder="Numero de padres">
                                    <span v-if="$v.hermanos.$error" class="text-red-500 text-xs">El numeros de hermanos es obligatorio</span>
                                </div>
                                <div class="flex flex-col">
                                    <label class="text-gray-600 mb-2">Hermanos vivos <span
                                        class="text-blue-600">*</span></label>
                                    <input @blur="validacionHermanos()" v-model="model.hermanosVivos" :disabled="editar"
                                           class="h-[40px] mb-2 inactive-input"
                                           type="number" placeholder="Numero de hermanos vivos">
                                    <span v-if="$v.hermanos.$error" class="text-red-500 text-xs">El numeros de hermanos vivos es obligatorio</span>
                                </div>
                                <transition
                                    enter-active-class="transition-opacity duration-500"
                                    enter-from-class="opacity-0"
                                    enter-to-class="opacity-100"
                                    leave-active-class="transition-opacity duration-500"
                                    leave-from-class="opacity-100"
                                    leave-to-class="opacity-0">
                                    <div class="flex flex-col"
                                         v-show="model.hermanosVivos < model.hermanos && model.hermanosVivos != null">
                                        <label class="text-gray-600 mb-2">Causas de fallecimiento</label>
                                        <input v-model="hermanosCausaMuerte" class="h-[40px] inactive-input" :disabled="editar"
                                               type="text" placeholder="Causa de fallecimiento">
                                    </div>
                                </transition>
                            </div>
                            <div class="w-4/12 telefono:w-full">
                                <div class="flex flex-col">
                                    <label class="text-gray-600 mb-2">Hijos <span
                                        class="text-blue-600">*</span></label>
                                    <input v-model="model.hijos" type="number" :disabled="editar"
                                           class="h-[40px] mb-2 inactive-input"
                                           placeholder="Numero de padres">
                                    <span v-if="$v.hijos.$error" class="text-red-500 text-xs">El numeros de hijos es obligatorio</span>
                                </div>
                                <div class="flex flex-col">
                                    <label class="text-gray-600 mb-2">Hijos vivos <span
                                        class="text-blue-600">*</span></label>
                                    <input @blur="validacionHijos()" v-model="model.hijosVivos" :disabled="editar"
                                           class="h-[40px] mb-2 inactive-input"
                                           type="number" placeholder="Numero de hijos vivos">
                                    <span v-if="$v.hijos.$error" class="text-red-500 text-xs">El numeros de hijos vivos es obligatorio</span>
                                </div>
                                <transition
                                    enter-active-class="transition-opacity duration-500"
                                    enter-from-class="opacity-0"
                                    enter-to-class="opacity-100"
                                    leave-active-class="transition-opacity duration-500"
                                    leave-from-class="opacity-100"
                                    leave-to-class="opacity-0">
                                    <div class="flex flex-col" v-show="model.hijosVivos < model.hijos && model.hijosVivos != null">
                                        <label class="text-gray-600 mb-2">Causas de fallecimiento</label>
                                        <input v-model="hijosCausaMuerte" class="h-[40px] inactive-input" :disabled="editar"
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
                                        <input v-model="dm" type="text" :disabled="editar"
                                               class="h-[40px] inactive-input"
                                               placeholder="DM">
                                    </div>
                                    <div class="flex flex-col">
                                        <label class="text-gray-600 mb-2 mt-2">HTA</label>
                                        <input v-model="hta" type="text" :disabled="editar"
                                               class="h-[40px] inactive-input"
                                               placeholder="HTA">
                                    </div>
                                    <div class="flex flex-col">
                                        <label class="text-gray-600 mb-2 mt-2">Cancer</label>
                                        <input v-model="cancer" type="text" :disabled="editar"
                                               class="h-[40px] inactive-input"
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
                                        <input v-model="alcoholismo" type="text" :disabled="editar"
                                               class="h-[40px] inactive-input"
                                               placeholder="Alcoholismo">
                                    </div>
                                    <div class="flex flex-col">
                                        <label class="text-gray-600 mb-2 mt-2">Tabaquismo</label>
                                        <input v-model="tabaquismo" type="text" :disabled="editar"
                                               class="h-[40px] inactive-input"
                                               placeholder="Tabaquismo">
                                    </div>
                                    <div class="flex flex-col">
                                        <label class="text-gray-600 mb-2 mt-2">Drogas</label>
                                        <input v-model="drogas" type="text" :disabled="editar"
                                               class="h-[40px] inactive-input mb-2"
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
                    <h2>Antecedentes patologicos <span
                        class="text-blue-600">*</span></h2>
                </header>
            </div>
            <div class="px-6 py-3">
                <section class="flex flex-col gap-3">
                    <div class="flex flex-col">
                        <textarea :disabled="editar" v-model="model.antecedentesPatologicos" class="inactive-input"  placeholder="Antecedentes patológicos"></textarea>
                        <span v-if="$v.antecedentesPatologicos.$error" class="text-red-500 text-xs">El antecedente patologico es obligatorio</span>
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
                        <label class="text-gray-600 mb-2">Medio laboral <span
                            class="text-blue-600">*</span></label>
                        <textarea :disabled="editar" v-model="model.medioLaboral" class="inactive-input"  placeholder="Medio laboral"></textarea>
                        <span v-if="$v.medioLaboral.$error" class="text-red-500 text-xs">El medio Laboral es obligatorio</span>
                    </div>
                    <div class="flex flex-col">
                        <label class="text-gray-600 mb-2">Medio Sociocultural <span
                            class="text-blue-600">*</span></label>
                        <textarea :disabled="editar" v-model="model.medioSociocultural" class="inactive-input" placeholder="Medio Sociocultural"></textarea>
                        <span v-if="$v.medioSociocultural.$error" class="text-red-500 text-xs">El medio Sociocultural es obligatorio</span>
                    </div>
                    <div class="flex flex-col">
                        <label class="text-gray-600 mb-2">Medio Fisicoambiental <span
                            class="text-blue-600">*</span></label>
                        <textarea :disabled="editar" v-model="model.medioFisicoambiental"  class="inactive-input" placeholder="Medio Fisicoambiental"></textarea>
                        <span v-if="$v.medioFisicoambiental.$error" class="text-red-500 text-xs">El medio Fisicoambiental es obligatorio</span>
                    </div>
                </section>
            </div>
        </section>
        <section class="overflow-x-auto rounded-sm border shadow" v-if="sexo === 'Mujer'">
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
                                <input v-model="fum" type="text" :disabled="editar"
                                       class="h-[40px] inactive-input"
                                       placeholder="FUM">
                            </div>
                            <div class="flex flex-col w-full">
                                <label class="text-gray-600 mb-2">FPP</label>
                                <input v-model="fpp" type="text" :disabled="editar"
                                       class="h-[40px] inactive-input"
                                       placeholder="FPP">
                            </div>
                            <div class="flex flex-col w-full">
                                <label class="text-gray-600 mb-2">Edad gestional</label>
                                <input v-model="edadGestional" type="text" :disabled="editar"
                                       class="h-[40px] inactive-input"
                                       placeholder="Edad gestional">
                            </div>
                            <div class="flex flex-col w-full">
                                <label class="text-gray-600 mb-2">Semanas</label>
                                <input v-model="semanas" type="text" :disabled="editar"
                                       class="h-[40px] inactive-input"
                                       placeholder="Semanas">
                            </div>
                        </div>
                        <div class="flex gap-4 mb-2 telefono:flex-col">
                            <div class="flex flex-col w-full">
                                <label class="text-gray-600 mb-2">Edad de la menarca</label>
                                <input v-model="menarca" type="text" :disabled="editar"
                                       class="h-[40px] inactive-input"
                                       placeholder="Edad de la menarca">
                            </div>
                            <div class="flex flex-col w-full">
                                <label class="text-gray-600 mb-2">Ritmo Menstrual</label>
                                <input v-model="ritmo" type="text" :disabled="editar"
                                       class="h-[40px] inactive-input"
                                       placeholder="Ritmo Menstrual">
                            </div>
                            <div class="flex flex-col w-full">
                                <label class="text-gray-600 mb-2">Flujo vaginal</label>
                                <select class="h-[40px] inactive-input" v-model="flujoVaginalId" :disabled="editar">
                                    <option selected :value="1">Ligero</option>
                                    <option :value="2">Espeso y blanco</option>
                                    <option :value="3">Escaso</option>
                                </select>
                            </div>
                        </div>
                        <div class="flex gap-4 mb-2 telefono:flex-col">
                            <div class="flex flex-col w-full">
                                <label class="text-gray-600 mb-2">Gestas</label>
                                <input v-model="gestas" type="number" :disabled="editar"
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
                                <div class="flex gap-4 w-full telefono:flex-col" v-show="gestas > 0">
                                    <div class="flex flex-col w-full">
                                        <label class="text-gray-600 mb-2">Partos</label>
                                        <input v-model="partos" type="number" :disabled="editar"
                                               class="h-[40px] inactive-input"
                                               placeholder="Numero de partos">
                                    </div>
                                    <div class="flex flex-col w-full">
                                        <label class="text-gray-600 mb-2">Cesareas</label>
                                        <input v-model="cesareas" type="number" :disabled="editar"
                                               class="h-[40px] inactive-input"
                                               placeholder="Numero de cesareas">
                                    </div>
                                    <div class="flex flex-col w-full">
                                        <label class="text-gray-600 mb-2">Abortos</label>
                                        <input v-model="abortos" type="number" :disabled="editar"
                                               class="h-[40px] inactive-input"
                                               placeholder="Numero de abortos">
                                    </div>
                                </div>
                            </transition>
                        </div>
                        <div class="flex gap-4 mb-2 telefono:flex-col">
                            <div class="flex flex-col w-full">
                                <label class="text-gray-600 mb-2">Anticonceptivos</label>
                                <select class="h-[40px] inactive-input" v-model="tipoAnticonceptivoId" :disabled="editar">
                                    <option selected :value="1">Ninguno</option>
                                    <option :value="2">Barrera</option>
                                    <option :value="3">Orales</option>
                                    <option :value="4">Naturales</option>
                                </select>
                            </div>
                            <div class="flex flex-col w-full">
                                <label class="text-gray-600 mb-2">Cirugias</label>
                                <input v-model="cirugias" type="text" :disabled="editar"
                                       class="h-[40px] inactive-input"
                                       placeholder="Cirugas del paciente">
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    </div>
    <div class="w-full flex justify-end gap-3 px-3 telefono:flex-col-reverse telefono:p-0 mt-2">
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
            <button class="button-primary" v-show="!editar">Actualizar</button>
        </transition>
    </div>
</template>

<style scoped>
.custom-radio:checked + .opcion {
  @apply bg-principal text-white
}
</style>