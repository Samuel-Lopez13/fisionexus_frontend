<script setup>

</script>

<template>
    <main>
        <header>
            <h1 class="text-principal text-center font-Prompt font-medium text-2xl mb-2">Equipo de trabajo</h1>
        </header>
        <div class="group max-w-md w-full mb-2 flex gap-2">
            <div class="telefono:w-full">
                <div class="relative flex top-[26px] items-center pl-3 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-500 group-focus-within:text-blue-500" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
                <input type="search" id="default-search"
                       class="w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-sm bg-gray-50 focus:ring-blue-500 focus:border-blue-500 focus:text-blue-600"
                       placeholder="Buscar" />
            </div>
                <select name="" id="" class="mt-[16px] telefono:w-full text-sm bg-gray-50 rounded-sm text-gray-500 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 focus:text-blue-600">
                    <option value="">Todos</option>
                    <option value="">Solo activos</option>
                    <option value="">Solo inactivos</option>
                </select>
        </div>
        <div class="overflow-x-auto style_scroll">
            <div class="max-h-[700px] overflow-y-auto style_scroll">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400 sticky top-0">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Nombre
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Edad
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Sexo
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Especialidad
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Cedula
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Telefono
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Acciones
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr class="bg-white border-b hover:bg-gray-50 cursor-pointer" v-for="load in 12">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Samuel Dzec Lopez <span title="Activo" class="inline-block rounded-full h-2 w-2 bg-green-500"></span>
                        </th>
                        <td class="px-6 py-4">
                            24 anos
                        </td>
                        <td class="px-6 py-4">
                            Masculino
                        </td>
                        <td class="px-6 py-4">
                            Cardiologia
                        </td>
                        <td class="px-6 py-4">
                            N/A
                        </td>
                        <td class="px-6 py-4">
                            9812028610
                        </td>
                        <td class="px-6 flex gap-2 py-4">
                            <svg class="hover:stroke-blue-500 cursor-pointer"
                                 stroke="#758CA3" width="28px"
                                 viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="1" y="1" width="38" height="38" rx="19" stroke-width="2" />
                                <path
                                    d="M25.5 18.5L28.5 15.5L24.5 11.5L21.5 14.5M25.5 18.5L15.5 28.5H11.5V24.5L21.5 14.5M25.5 18.5L21.5 14.5"
                                    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <svg
                                class="hover:stroke-red-500 cursor-pointer" stroke="#758CA3" width="28px"
                                viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="1" y="1" width="38" height="38" rx="19" stroke-width="2" />
                                <path d="M17.875 18.9375V25.3125" stroke-width="2" stroke-linecap="round"
                                      stroke-linejoin="round" />
                                <path d="M22.125 18.9375V25.3125" stroke-width="2" stroke-linecap="round"
                                      stroke-linejoin="round" />
                                <path d="M11.5 14.6875H28.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path
                                    d="M13.625 14.6875H20H26.375V26.375C26.375 28.1355 24.948 29.5625 23.1875 29.5625H16.8125C15.0521 29.5625 13.625 28.1355 13.625 26.375V14.6875Z"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path
                                    d="M16.8125 12.5625C16.8125 11.3889 17.7639 10.4375 18.9375 10.4375H21.0625C22.2361 10.4375 23.1875 11.3889 23.1875 12.5625V14.6875H16.8125V12.5625Z"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <div title="Cambiar estado del fisioterapeuta">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 hover:text-yellow-500">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                                </svg>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </main>
</template>

<style scoped>

</style>