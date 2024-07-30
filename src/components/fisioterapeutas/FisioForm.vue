<script setup>
    import { ref } from 'vue'
    import { usuarioCommand } from '@/api/usuarios/usuariosCommand.js'

    //modelos
    let nombre = ref("")
    let correo = ref("")
    let telefono = ref("")
    let especialidad = ref("")
    let cedula = ref("")
    let archivo = ref([])
    //recursos
    const especialidades = ref([
        { idEspecialidad: '1', especialidad: 'Cardiología' },
        { idEspecialidad: '2', especialidad: 'Dermatología' },
        { idEspecialidad: '3', especialidad: 'Neurología' },
        { idEspecialidad: '4', especialidad: 'Pediatría' }
    ]);
    let alerta = ref(false)
    let spinner = ref(false)
    let foto = ref("https://res.cloudinary.com/doi0znv2t/image/upload/v1718432025/Utils/fotoPerfil.png")

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        foto.value = URL.createObjectURL(file);
        archivo.value = file
    };

    const enviarFormulario = async () =>{
        let registro = false

        if(nombre.value.length == 0 || correo.value.length == 0 || telefono.value.length == 0 || especialidad.value.length == 0 || cedula.value.length == 0 ) {
            alerta.value = true
        } else{
            spinner.value = true
            registro = await usuarioCommand.agregarIntegrante(nombre.value, correo.value, telefono.value, especialidad.value, cedula.value, archivo.value = archivo.value.length == 0 ? null : archivo.value)
            spinner.value = false
        }

        return registro
    }

    //Indicaciones para cerrar la ventana
    const emit = defineEmits(['salir'])

    const agregarFisio = async () => {
        let salir = await enviarFormulario()
        if(salir)
            emit("salir")
    }
</script>

<template>
    <form class="rounded" @submit.prevent>
        <header class="text-2xl text-gray-600 p-4 bg-gray-100 flex justify-center rounded-tl rounded-tr">
            Fisioterapeuta
        </header>
        <section class="mt-3">
            <div class=" flex justify-center">
                <input type="file" id="archivo" style="display: none;" accept=".png, .jpg" @change="handleFileChange">
                <button class="relative group"
                        onclick="document.getElementById('archivo').click(); return false;">
                    <img class="" :src=foto alt="foto de perfil">
                    <svg class="absolute top-7 left-7 opacity-0 group-hover:opacity-90 transition-all duration-1000 ease-out" viewBox="0 0 24 24" width="80px" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#fef1f1"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14 6L8 12V16H12L18 10M14 6L17 3L21 7L18 10M14 6L18 10M10 4L4 4L4 20L20 20V14" stroke="#d6d6d6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </button>
            </div>
        </section>
        <section class="flex flex-col px-5 pt-5 pb-3 gap-4">
            <div class="flex flex-col">
                <label class="text-lg font-medium text-blue-400">Nombre completo</label>
                <input v-model="nombre" @focus="alerta = false" type="text" class="text-gray-800 focus:text-blue-500 placeholder:font-normal pl-0 pt-1 pb-1 p-2 border-t-0 border-l-0 border-r-0 border-b-2 border-gray-200 focus:border-blue-500 focus:outline-0 transition-all duration-300 ease-out" placeholder="Pedro Davies">
            </div>
            <div class="flex flex-col">
                <label class="text-lg font-medium text-blue-400">Correo:</label>
                <input v-model="correo" @focus="alerta = false" type="text" class="text-gray-800 focus:text-blue-500 placeholder:font-normal pl-0 pt-1 pb-1 p-2 border-t-0 border-l-0 border-r-0 border-b-2 border-gray-200 focus:border-blue-500 focus:outline-0 transition-all duration-300 ease-out" placeholder="fisioterapeuta@gmail.com">
            </div>
            <div class="flex flex-col">
                <label class="text-lg font-medium text-blue-400">Telefono:</label>
                <input v-model="telefono" @focus="alerta = false" maxlength="10" type="tel" class="text-gray-800 focus:text-blue-500 placeholder:font-normal pl-0 pt-1 pb-1 p-2 border-t-0 border-l-0 border-r-0 border-b-2 border-gray-200 focus:border-blue-500 focus:outline-0 transition-all duration-300 ease-out" placeholder="9811234567">
            </div>
            <div class="flex flex-col">
                <label class="text-lg font-medium text-blue-400">Cedula:</label>
                <input v-model="cedula" @focus="alerta = false" type="text" class="text-gray-800 focus:text-blue-500 placeholder:font-normal pl-0 pt-1 pb-1 p-2 border-t-0 border-l-0 border-r-0 border-b-2 border-gray-200 focus:border-blue-500 focus:outline-0 transition-all duration-300 ease-out" placeholder="d124326">
            </div>
            <div class="flex flex-col">
                <label class="text-lg font-medium text-blue-400">Especialidad:</label>
                <select class="input-primary" v-model="especialidad">
                    <option value="" disabled selected>Elige una opción</option>
                    <option v-for="especial in especialidades" :value="especial.idEspecialidad">
                        {{ especial.especialidad }}
                    </option>
                </select>
            </div>
            <div>
                <p id="error" class="text-center text-red-400 text-sm animate-fade pb-1" v-if="alerta == true">Todos los campos son obligatorios</p>
                <button @click="agregarFisio()" :disabled=spinner :class="{ 'button-disabled': spinner}"
                        class="button-primary w-full">
                    <div v-if="spinner === false">
                        Registrar fisioterapeuta
                    </div>
                    <div v-if="spinner === true" role="status" class="flex justify-center items-center">
                        <svg aria-hidden="true" role="status" class="inline w-5 h-5 me-3 text-white animate-spin"
                             viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="#E5E7EB" />
                            <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentColor" />
                        </svg>
                        Guardando
                    </div>
                </button>
            </div>
        </section>
    </form>
</template>

<style scoped>
input[type="text"], input[type="tel"]{
    box-shadow: none;
}

img {
    border-radius: 50%;
    width: 140px;
    height: 140px;
    object-fit: cover;
    border: 4px solid #EDF4FF;
}
</style>