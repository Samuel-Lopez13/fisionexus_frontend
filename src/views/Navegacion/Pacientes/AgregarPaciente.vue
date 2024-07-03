<script setup>
import { reactive, ref, watch } from 'vue'
import ImagenDefault from '@/assets/icons/Usuario.png'
import { irPacientes } from '@/router/rutasUtiles.js'
import { pacientesCommand } from '@/api/pacientes/pacientesCommand.js'
import useVuelidate from '@vuelidate/core'
import { maxLength, minLength, numeric, required } from '@vuelidate/validators'

let imageUrl = ref(ImagenDefault)
let inputFile = ref(null)
let fotoPerfil = ref(null)
let verificarTelefono = ref(false)
let sexo = ref(true)
let estadoCivil = ref(1)
let spinner = ref(false)

//Modelos reactivos
const model = reactive({
    nombre: '',
    apellido: '',
    edad: null,
    ocupacion: '',
    telefono: '',
    institucion: '',
    domicilio: '',
    codigoPostal: ''
})

//Se le aplica las reglas
const rules = {
    nombre: { required },
    apellido: { required },
    edad: { required },
    ocupacion: { required },
    telefono: { required, numeric, minLength: minLength(10), maxLength: maxLength(10) },
    institucion: { required },
    domicilio: { required },
    codigoPostal: { required, numeric, minLength: minLength(5), maxLength: maxLength(5) }
}

//Aqui se junta el modelo con las reglas
const $v = useVuelidate(rules, model)

watch(() => model.telefono, (newVal, oldVal) => {
    if (verificarTelefono.value) {
        verificarTelefono.value = false
    }
})

const imagenSeleccionada = (event) => {
    imageUrl.value = URL.createObjectURL(event.target.files[0])
    fotoPerfil.value = event.target.files[0]
}
const regresarImagenDefault = () => {
    inputFile.value.value = ''
    imageUrl.value = ImagenDefault
}

const agregarPaciente = async () => {
    spinner.value = true
    //Habilitara los errores si existen
    $v.value.$touch()
    //let nombreCompleto = model.nombre + ' ' + model.apellido
    let response = await pacientesCommand.postPacientes(
        model.nombre,
        model.apellido,
        model.edad,
        sexo.value,
        model.institucion,
        model.domicilio,
        model.codigoPostal,
        model.ocupacion,
        model.telefono,
        estadoCivil.value,
        fotoPerfil.value
    )

    if (response === 'Ya existe un paciente con el numero telefonico ingresado') {
        verificarTelefono.value = true
    } else {
        verificarTelefono.value = false
    }
    spinner.value = false
}

</script>


<template>
    <div class="flex telefono:flex-col">
        <section class="mr-3">
            <div class="flex flex-col items-center gap-6 text-center telefono:justify-around tablet:justify-center">
                <header class="flex flex-col items-center gap-4 telefono:w-full telefono:items-center">
                    <h1 class="text-[24px] text-gray-600 font-bold text-center">
                        Nuevo usuario
                    </h1>
                    <img :src="imageUrl"
                         class="h-40 w-40 object-cover rounded-full">
                </header>
                <label for="inputFile"
                       class="button-primary flex cursor-pointer">
                    Adjuntar foto
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" class="size-5 ml-0.5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13" />
                    </svg>
                </label>
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
                <input ref="inputFile" type="file" id="inputFile" class="hidden" @change="imagenSeleccionada">
                <svg class="w-64 h-64 telefono:w-66 telefono:h-60" viewBox="0 0 250 300" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M197.582 0H0V300H250V43.152L197.582 0Z" fill="#FFD890" fill-opacity="0.5" />
                    <path d="M196.701 44.1913L196.576 1.0387L248.995 44.1913H196.701Z" fill="#FF9839"
                          fill-opacity="0.5" />
                    <foreignObject x="10" y="50" width="100%" height="100%">
                        <textarea class="svgtext w-full text-gray-600" placeholder="Notas internas"></textarea>
                    </foreignObject>
                </svg>
            </div>
        </section>
        <section class="desktop:w-9/12 laptop:w-9/12 tablet:w-full telefono:w-full">
            <details open class="cursor-pointer">
                <summary class="text-principal text-xl mb-2">
                    Información general
                </summary>
                <hr class="border-b-blue-500 mb-3">
                <div class="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label class="block mb-2 text-sm font-medium text-gray-600">Nombre(s) <span
                            class="text-blue-600">*</span> </label>
                        <input type="text"
                               class="input-primary" v-model="model.nombre"
                               placeholder="Pedro Alfonso" required />
                        <span v-if="$v.nombre.$error" class="text-red-500 text-xs">El nombre es obligatorio</span>
                    </div>
                    <div>
                        <label class="block mb-2 text-sm font-medium text-gray-600">Apellidos <span
                            class="text-blue-600">*</span></label>
                        <input type="text"
                               class="input-primary" v-model="model.apellido"
                               placeholder="Lopez Blanco"
                               required />
                        <span v-if="$v.apellido.$error" class="text-red-500 text-xs">El apellido es obligatorio</span>
                    </div>

                    <div>
                        <label class="block mb-2 text-sm font-medium text-gray-600">Fecha de
                            nacimiento <span class="text-blue-600">*</span> </label>
                        <input type="date" class="input-primary" placeholder="Select date" v-model="model.edad">
                        <span v-if="$v.edad.$error" class="text-red-500 text-xs">La edad es obligatoria</span>
                    </div>

                    <div>
                        <label class="block mb-2 text-sm font-medium text-gray-600">Sexo <span
                            class="text-blue-600">*</span></label>
                        <select class="input-primary" v-model="sexo">
                            <option selected :value="true">Masculino</option>
                            <option :value="false">Femenino</option>
                        </select>
                    </div>

                    <div>
                        <label class="block mb-2 text-sm font-medium text-gray-600">Estado
                            Civil <span class="text-blue-600">*</span> </label>
                        <select class="input-primary" v-model="estadoCivil">
                            <option selected :value="1">Soltero</option>
                            <option :value="2">Casado</option>
                            <option :value="3">Divorciado</option>
                            <option :value="4">Viudo</option>
                        </select>
                    </div>

                    <div>
                        <label class="block mb-2 text-sm font-medium text-gray-600">Ocupación<span
                            class="text-blue-600">*</span></label>
                        <input type="text"
                               class="input-primary" v-model="model.ocupacion"
                               placeholder="Abogado"
                               required />
                        <span v-if="$v.ocupacion.$error" class="text-red-500 text-xs">La ocupacion es obligatoria</span>
                    </div>
                    <div>
                        <label class="block mb-2 text-sm font-medium text-gray-600">Teléfono<span
                            class="text-blue-600">*</span></label>
                        <input type="tel"
                               class="input-primary" v-model="model.telefono"
                               placeholder="9812308723"
                               maxlength="10"
                               required />
                        <span v-if="$v.telefono.$error" class="text-red-500 text-xs">El telefono debe contener 10 digitos del 0 al 9</span>
                        <span v-if="verificarTelefono" class="text-red-500 text-xs">El telefono ya esta en uso</span>
                    </div>

                    <div>
                        <label class="block mb-2 text-sm font-medium text-gray-600">Institución <span
                            class="text-blue-600">*</span></label>
                        <input type="text"
                               class="input-primary" v-model="model.institucion"
                               placeholder="SEAFI"
                               required />
                        <span v-if="$v.institucion.$error"
                              class="text-red-500 text-xs">La institucion es obligatoria</span>
                    </div>
                </div>
            </details>
            <details open class="cursor-pointer">
                <summary class="text-principal text-xl mb-2">
                    Información de residencia
                </summary>
                <hr class="mb-3">
                <div class="flex gap-6 telefono:flex-wrap telefono:gap-1">
                    <div class="mb-6 basis-3/4 telefono:basis-full">
                        <label class="block mb-2 text-sm font-medium text-gray-600">Domicilio <span
                            class="text-blue-600">*</span></label>
                        <input type="text"
                               class="input-primary" v-model="model.domicilio"
                               placeholder="1234 Calle Principal" required />
                        <span v-if="$v.domicilio.$error" class="text-red-500 text-xs">El domicilo es obligatorio</span>
                    </div>
                    <div class="mb-6 basis-1/4 telefono:basis-full">
                        <label class="block mb-2 text-sm font-medium text-gray-600">Código
                            Postal <span class="text-blue-600">*</span></label>
                        <input type="text"
                               class="input-primary"
                               placeholder="00030" v-model="model.codigoPostal"
                               maxlength="5"
                               required />
                        <span v-if="$v.codigoPostal.$error" class="text-red-500 text-xs">El codigo postal es obligatorio y debe tener 5 digitos</span>
                    </div>
                </div>
            </details>
            <div class="flex justify-end gap-6 flex-wrap telefono:flex-col-reverse">
                <button @click="irPacientes()"
                        class="text-blue-700 underline hover:text-red-400 telefono:basis-full">
                    Cancelar
                </button>
                <button @click="agregarPaciente()" :disabled=spinner :class="{ 'bg-[#238dff]': spinner}" class="button-primary">
                    <div v-if="spinner === false">
                        Guardar
                    </div>
                    <div v-if="spinner === true" role="status" class="flex justify-center items-center">
                        <svg aria-hidden="true" role="status" class="inline w-5 h-5 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                        </svg>
                        Guardando
                    </div>
                </button>
            </div>
        </section>
    </div>
</template>


<style scoped>

.svgtext {
    width: 80%;
    height: 77%;
    background-color: transparent;
    margin-right: 20px;
    outline: none;
    border: none;
    resize: none;
    scrollbar-width: thin;
    box-shadow: none;
}
</style>