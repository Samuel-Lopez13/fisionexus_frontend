<script setup>
    import {onMounted, ref} from "vue";
    import {usuarioCommand} from "@/api/usuarios/usuariosCommand.js";
    import {clavesStore} from "@/stores/clavesStore.js";
    const store = clavesStore();

    let error = ref(false)
    let username = ref("")
    let contrasena = ref("")

    onMounted(() =>{
        console.log(store.jwt)
    })

    const login = async () =>{
        let response = await usuarioCommand.login(username.value, contrasena.value)
        console.log(response)
    }
</script>

<template>
    <div class="h-screen w-screen bg-fondo flex justify-center items-center">
        <div class="w-1/2 h-fit pb-pLogin pt-pLogin shadow-basic bg-white flex items-center pl-4 laptop:w-8/12 laptop:h-2/3 tablet:w-9/12 telefono:w-full telefono:h-full telefono:p-0 telefono:flex telefono:justify-center telefono:items-center telefono:flex-col telefono:gap-12">
            <div class="h-fit w-4/12 flex flex-col justify-center items-center gap-10 telefono:hidden">
                <h1 class="text-principal text-normal text-center font-bold font-poppins m-0 tablet:text-2xl">Fisioterapia</h1>
                <img class="w-2/4" src="../../assets/icons/fisioIcon.png" alt="">
            </div>
            <div class="hidden telefono:flex telefono:justify-center telefono:items-center telefono:h-auto">
                <img class="w-2/4" src="../../assets/icons/fisioIcon.png" alt="">
            </div>
            <form class="h-fit w-8/12 flex flex-col justify-center items-center gap-7 telefono:w-3/4 telefono:2/3 telefono:gap-6 telefono:h-auto">
                <div class="w-8/12 h-[40px] bg-[#FED0D1] flex items-center justify-center rounded-sm" v-if="error">
                    <img src="../../assets/icons/error.png">
                    <h5 class="p-2 text-gray-900">Nombre de usuario y/o contraseña incorrectos</h5>
                </div>
                <div class="flex flex-col w-8/12 justify-center gap-3 telefono:w-full">
                    <label class="text-gray-600">Correo electronico</label>
                    <input v-model="username" class="h-[40px] border-principal rounded-sm p-3 text-gray-600 hover:outline-0 focus:text-blue-900 focus:outline-0 focus:border-blue-500 focus:border-2"
                           placeholder="Correo electronico">
                </div>
                <div class="flex flex-col w-8/12 justify-center gap-3 telefono:w-full">
                    <label class="text-gray-600">Contraseña</label>
                    <input v-model="contrasena" class="h-[40px] border-principal rounded-sm p-3 text-gray-600 hover:outline-0 focus:text-blue-900 focus:outline-0 focus:border-blue-500" type="password"
                           placeholder="Contraseña">
                </div>
                <div class="w-full flex justify-center">
                    <button type="submit" @click.prevent="login()"
                        class="w-8/12 h-[45px] text-1xl font-bold font-Prompt tracking-widest bg-principal text-white rounded-sm hover:bg-pHover telefono:w-full">
                        Iniciar sesión
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>

</style>