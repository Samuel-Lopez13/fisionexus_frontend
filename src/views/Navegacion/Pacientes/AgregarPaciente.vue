<script setup>
import { ref } from 'vue'
import ImagenDefault from '@/assets/icons/Usuario.png'
import { irPacientes } from '@/router/rutasUtiles.js'
import { pacientesCommand } from '@/api/pacientes/pacientesCommand.js'
import { apiUrl } from '@/api/headers.js'

let imageUrl = ref(ImagenDefault)
let inputFile = ref(null)
let nombre = ref(null)
let apellido = ref(null)
let edad = ref(null)
let sexo = ref(true)
let estadoCivil = ref(1)
let ocupacion = ref("Ingeniero")
let telefono = ref("")
let institucion = ref("Campeche")
let domicilio = ref("Domicilio xd")
let codigoPostal = ref("24500")

const imagenSeleccionada = (event) => {
    imageUrl.value = URL.createObjectURL(event.target.files[0])
}
const regresarImagenDefault = () => {
    inputFile.value.value = ''
    imageUrl.value = ImagenDefault
}

const agregarPaciente = async () => {


    /*let nombreCompleto = nombre.value + ' ' + apellido.value

    console.log(telefono.value)

    let response = await pacientesCommand.postPacientes(
        nombreCompleto,
        edad.value,
        sexo.value,
        institucion.value,
        domicilio.value,
        codigoPostal.value,
        ocupacion.value,
        telefono.value,
        estadoCivil.value,
    )*/

    let nombreCompleto = nombre.value + ' ' + apellido.value

    const formData = new FormData();
    formData.append("Nombre", nombreCompleto);
    formData.append("Edad", edad.value);
    formData.append("Sexo", sexo.value);
    formData.append("Institucion", institucion.value);
    formData.append("Domicilio", domicilio.value);
    formData.append("CodigoPostal", codigoPostal.value);
    formData.append("Ocupacion", ocupacion.value);
    formData.append("Telefono", telefono.value);
    formData.append("EstadoCivilId", estadoCivil.value);

    var response = await fetch(apiUrl + "/Pacientes/CrearPaciente", {
        method: 'POST',
        body: formData,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem(import.meta.env.VITE_CREDENCIALES)}`
        },
    })

    console.log(response)
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
            <header>
                <h1 class="text-principal text-xl mb-2">Información general</h1>
            </header>
            <hr class="border-b-blue-500 mb-3">
            <div class="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <label class="block mb-2 text-sm font-medium text-gray-600">Nombre(s) <span
                        class="text-blue-600">*</span> </label>
                    <input type="text"
                           class="input-primary" v-model="nombre"
                           placeholder="Pedro Alfonso" required />
                </div>
                <div>
                    <label class="block mb-2 text-sm font-medium text-gray-600">Apellidos <span
                        class="text-blue-600">*</span></label>
                    <input type="text"
                           class="input-primary" v-model="apellido"
                           placeholder="Lopez Blanco"
                           required />
                </div>

                <div>
                    <label class="block mb-2 text-sm font-medium text-gray-600">Fecha de
                        nacimiento <span class="text-blue-600">*</span> </label>
                    <input type="date" class="input-primary" placeholder="Select date" v-model="edad">
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
                           class="input-primary" v-model="ocupacion"
                           placeholder="Abogado"
                           required />
                </div>

                <div>
                    <label class="block mb-2 text-sm font-medium text-gray-600">Teléfono<span
                        class="text-blue-600">*</span></label>
                    <input type="tel"
                           class="input-primary" v-model="telefono"
                           placeholder="9812308723"
                           maxlength="10"
                           required />
                </div>

                <div>
                    <label class="block mb-2 text-sm font-medium text-gray-600">Institución <span
                        class="text-blue-600">*</span></label>
                    <input type="text"
                           class="input-primary" v-model="institucion"
                           placeholder="SEAFI"
                           required />
                </div>
            </div>
            <header>
                <h1 class="text-principal text-xl mb-2">Información de residencia</h1>
            </header>
            <hr class="mb-3">
            <div class="flex gap-6 telefono:flex-wrap telefono:gap-1">
                <div class="mb-6 basis-3/4 telefono:basis-full">
                    <label class="block mb-2 text-sm font-medium text-gray-600">Domicilio <span
                        class="text-blue-600">*</span></label>
                    <input type="text"
                           class="input-primary" v-model="domicilio"
                           placeholder="1234 Calle Principal" required />
                </div>
                <div class="mb-6 basis-1/4 telefono:basis-full">
                    <label class="block mb-2 text-sm font-medium text-gray-600">Código
                        Postal <span class="text-blue-600">*</span></label>
                    <input type="text"
                           class="input-primary"
                           placeholder="00030" v-model="codigoPostal"
                           maxlength="5"
                           required />
                </div>
            </div>
            <div class="flex justify-end gap-6 flex-wrap telefono:flex-col-reverse">
                <button @click="irPacientes()"
                        class="text-blue-700 underline hover:text-red-400 telefono:basis-full">
                    Cancelar
                </button>
                <button type="submit"
                        class="button-primary telefono:w-full" @click="agregarPaciente()">
                    Guardar Paciente
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