<script setup>
    import { ref } from 'vue'

    const foto = ref("https://res.cloudinary.com/doi0znv2t/image/upload/v1718432025/Utils/fotoPerfil.png")
    const archivo = ref([])
    const modifico = ref(false)


    const handleFileChange = (event) => {
        const file = event.target.files[0];
        foto.value = URL.createObjectURL(file);
        archivo.value = file
        modifico.value = true
    };

    //Indicaciones para cerrar la ventana
    const emit = defineEmits(['salir'])

    const cerrar = () => {
        emit("salir")
    }
</script>

<template>
    <form class="rounded-md" @submit.prevent>
        <header class="text-2xl text-gray-600 p-5 bg-gray-100 flex justify-center">
            Fisioterapeuta
        </header>
        <section class="mt-3">
            <div class=" flex justify-center">
                <input type="file" id="archivo" style="display: none;" accept=".png, .jpg" @change="handleFileChange">
                <button class="relative group"
                        onclick="document.getElementById('archivo').click(); return false;">
                    <img class="" :src=foto alt="foto de perfil">
                    <svg class="absolute top-7 left-7 opacity-0 group-hover:opacity-70 transition-all duration-1000 ease-out" viewBox="0 0 24 24" width="80px" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#fef1f1"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14 6L8 12V16H12L18 10M14 6L17 3L21 7L18 10M14 6L18 10M10 4L4 4L4 20L20 20V14" stroke="#d6d6d6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </button>
            </div>
        </section>
        <section class="flex flex-col px-3">
            <div class="flex flex-col">
                <label >Nombre completo</label>
                <input type="text" class="btn" placeholder="Pedro Davies">
            </div>
            <div>
                <label>Correo:</label>
                <input id="correo" type="text" class="input-primary" placeholder="Correo">
            </div>
            <div>
                <label>Telefono:</label>
                <input id="telefono" maxlength="10" type="text" class="input-primary" placeholder="Telefono">
            </div>
            <div>
                <label>Especialidad:</label>
                <input id="especialidad" type="text" class="input-primary" placeholder="Especialidad">
            </div>
            <div>
                <label>Cedula:</label>
                <input id="cedula" type="text" class="input-primary" placeholder="Cedula">
            </div>
        </section>
        <p id="error" class="text-red-400 text-sm animate-fade" style="display: none;">Por favor, complete todos los
            campos</p>
        <button @click="cerrar()">Salir</button>
    </form>
</template>

<style scoped>
.btn{
    border: none;
    border-bottom: 2px solid blue;
}

.btn:focus{
    outline: none;
}

img {
    border-radius: 50%;
    width: 140px;
    height: 140px;
    object-fit: cover;
    border: 4px solid #EDF4FF;
}
</style>