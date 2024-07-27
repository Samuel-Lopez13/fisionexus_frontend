<script setup>
    import { ref } from 'vue'
    import { usuarioCommand } from '@/api/usuarios/usuariosCommand.js'

    let nombre = ref("")
    let correo = ref("")
    let telefono = ref("")
    let especialidad = ref("")
    let cedula = ref("")
    const foto = ref("https://res.cloudinary.com/doi0znv2t/image/upload/v1718432025/Utils/fotoPerfil.png")
    const archivo = ref([])
    const modifico = ref(false)
    let alerta = ref(false)

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        foto.value = URL.createObjectURL(file);
        archivo.value = file
        modifico.value = true
    };

    const enviarFormulario = async () =>{
        await usuarioCommand.agregarIntegrante(nombre.value, correo.value, telefono.value, especialidad.value, cedula.value, foto.value)
    }

    //Indicaciones para cerrar la ventana
    //const emit = defineEmits(['salir'])

    const cerrar = () => {
        enviarFormulario()
        //emit("salir")
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
                <input v-model="nombre" type="text" class="text-gray-800 font-medium focus:text-blue-500 placeholder:font-normal pl-0 pt-1 pb-1 p-2 border-t-0 border-l-0 border-r-0 border-b-2 border-gray-200 focus:border-blue-500 focus:outline-0 transition-all duration-300 ease-out" placeholder="Pedro Davies">
            </div>
            <div class="flex flex-col">
                <label class="text-lg font-medium text-blue-400">Correo:</label>
                <input v-model="correo" type="email" class="text-gray-800 font-medium focus:text-blue-500 placeholder:font-normal pl-0 pt-1 pb-1 p-2 border-t-0 border-l-0 border-r-0 border-b-2 border-gray-200 focus:border-blue-500 focus:outline-0 transition-all duration-300 ease-out" placeholder="Correo">
            </div>
            <div class="flex flex-col">
                <label class="text-lg font-medium text-blue-400">Telefono:</label>
                <input v-model="telefono" maxlength="10" type="tel" class="text-gray-800 font-medium focus:text-blue-500 placeholder:font-normal pl-0 pt-1 pb-1 p-2 border-t-0 border-l-0 border-r-0 border-b-2 border-gray-200 focus:border-blue-500 focus:outline-0 transition-all duration-300 ease-out" placeholder="Telefono">
            </div>
            <div class="flex flex-col">
                <label class="text-lg font-medium text-blue-400">Especialidad:</label>
                <input v-model="especialidad" type="text" class="text-gray-800 font-medium focus:text-blue-500 placeholder:font-normal pl-0 pt-1 pb-1 p-2 border-t-0 border-l-0 border-r-0 border-b-2 border-gray-200 focus:border-blue-500 focus:outline-0 transition-all duration-300 ease-out" placeholder="Especialidad">
            </div>
            <div class="flex flex-col">
                <label class="text-lg font-medium text-blue-400">Cedula:</label>
                <input v-model="cedula" type="text" class="text-gray-800 font-medium focus:text-blue-500 placeholder:font-normal pl-0 pt-1 pb-1 p-2 border-t-0 border-l-0 border-r-0 border-b-2 border-gray-200 focus:border-blue-500 focus:outline-0 transition-all duration-300 ease-out" placeholder="Cedula">
            </div>
            <div>
                <p id="error" class="text-center text-red-400 text-sm animate-fade pb-1" v-if="alerta == true">Todos los campos son obligatorios</p>
                <button @click="cerrar()" class="button-primary w-full">Registrar fisioterapeuta</button>
            </div>
        </section>
    </form>
</template>

<style scoped>
input[type="text"], input[type="email"], input[type="tel"]{
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