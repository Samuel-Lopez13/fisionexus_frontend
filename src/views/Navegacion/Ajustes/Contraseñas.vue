<script setup>
import { ref } from 'vue'

let mostrarContasena = ref(false)

const verContrasena = () => {
    mostrarContasena.value = !mostrarContasena.value
}
</script>

<template>
    <header>
        <h1 class="text-principal text-center font-Prompt font-medium text-2xl mb-2 telefono:mt-4">Cambiar
            contraseñas</h1>
    </header>
    <div class="flex w-full justify-center gap-6 telefono:flex-col tablet:flex-col">
        <section class="px-4 w-5/12 telefono:w-full flex flex-col tablet:w-full">
            <div class="border-b mb-2">
                <p class="text-gray-600">Cuenta</p>
            </div>
            <label class="block mb-2 text-sm font-medium text-gray-600">Escribe la nueva contraseña</label>
            <div class="relative mb-2">
                <input
                    :type="mostrarContasena ? 'text' : 'password'" class="input-primary w-full pr-10"
                    placeholder="Escribe aqui tu nueva contraseña"
                />
                <button type="button" @click="verContrasena"
                        class="absolute inset-y-0 right-0 flex text-gray-600 items-center pr-3">
                    <svg v-if="mostrarContasena" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                         stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                         stroke-width="1.5"
                         stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                    </svg>
                </button>
            </div>
            <label class="block mb-2 text-sm font-medium text-gray-600">Confirma la nueva contraseña</label>
            <div class="relative mb-2">
                <input
                    :type="mostrarContasena ? 'text' : 'password'" class="input-primary w-full pr-10"
                    placeholder="Escribe aqui tu nueva contraseña"
                />
                <button type="button" @click="verContrasena"
                        class="absolute inset-y-0 right-0 flex text-gray-600 items-center pr-3">
                    <svg v-if="mostrarContasena" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                         stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                         stroke-width="1.5"
                         stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                    </svg>
                </button>
            </div>
            <button class="button-primary">Cambiar</button>
        </section>
        <section class="px-4 w-5/12 telefono:w-full flex flex-col tablet:w-full">
            <div class="border-b mb-2">
                <p class="text-gray-600">Verificación de administrador</p>
            </div>
            <label class="block mb-2 text-sm font-medium text-gray-600">Escribe la nueva contraseña</label>
            <div class="relative mb-2">
                <input
                    :type="mostrarContasena ? 'text' : 'password'" class="input-primary w-full pr-10"
                    placeholder="Escribe aqui tu nueva contraseña"
                />
                <button type="button" @click="verContrasena"
                        class="absolute inset-y-0 right-0 flex text-gray-600 items-center pr-3">
                    <svg v-if="mostrarContasena" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                         stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                         stroke-width="1.5"
                         stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                    </svg>
                </button>
            </div>
            <label class="block mb-2 text-sm font-medium text-gray-600">Confirma la nueva contraseña</label>
            <div class="relative mb-2">
                <input
                    :type="mostrarContasena ? 'text' : 'password'" class="input-primary w-full pr-10"
                    placeholder="Escribe aqui tu nueva contraseña"
                />
                <button type="button" @click="verContrasena"
                        class="absolute inset-y-0 right-0 flex text-gray-600 items-center pr-3">
                    <svg v-if="mostrarContasena" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                         stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                         stroke-width="1.5"
                         stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                    </svg>
                </button>
            </div>
            <button class="button-primary">Cambiar</button>
        </section>
    </div>
</template>

<style scoped>

</style>