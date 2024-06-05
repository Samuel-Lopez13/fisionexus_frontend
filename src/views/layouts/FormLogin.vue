<script setup>

</script>

<template>
    <div class="h-screen w-screen bg-fondo flex justify-center items-center">
        <div class="w-1/2 h-fit pb-pLogin pt-pLogin shadow-basic bg-white flex items-center pl-4 laptop:w-8/12 laptop:h-2/3 tablet:w-9/12 tablet:h-1/3 telefono:w-full telefono:h-full telefono:p-0 telefono:flex telefono:justify-center telefono:items-center telefono:flex-col telefono:gap-12">
            <div class="h-fit w-4/12 flex flex-col justify-center items-center gap-9 telefono:hidden">
                <h1 class="text-principal text-normal text-center font-bold font-poppins m-0 tablet:text-2xl">Fisioterapia</h1>
                <img class="w-2/4" src="../../assets/icons/fisioIcon.png" alt="">
            </div>
            <div class="hidden telefono:flex telefono:justify-center telefono:items-center telefono:h-auto">
                <img class="w-2/4" src="../../assets/icons/fisioIcon.png" alt="">
            </div>
            <div class="h-fit w-8/12 flex flex-col justify-center items-center gap-6 telefono:w-3/4 telefono:2/3 telefono:gap-6 telefono:h-auto">
                <div class="flex flex-col w-8/12 justify-center gap-3 telefono:w-full">
                    <label class="text-gray-600">Correo electronico</label>
                    <input class="h-[40px] border-principal rounded-sm p-3 hover:outline-blue-500 focus:outline-blue-500"
                           placeholder="Correo electronico">
                </div>
                <div class="flex flex-col w-8/12 justify-center gap-3 telefono:w-full">
                    <label class="text-gray-600">Contraseña</label>
                    <input class="h-[40px] border-principal rounded-sm p-3 hover:outline-blue-500 focus:outline-blue-500"
                           placeholder="Contraseña">
                </div>
                <div class="w-full flex flex-col items-center justify-center">
                    <button
                        class="w-8/12 h-[45px] text-1xl font-bold font-Prompt tracking-widest bg-principal text-white rounded-sm hover:bg-pHover telefono:w-full mb">
                        Iniciar sesión
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>