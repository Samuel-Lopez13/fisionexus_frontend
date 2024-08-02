<script setup>
</script>

<template>
    <div class="overflow-x-auto style_scroll">
        <div class="max-h-96 overflow-y-auto style_scroll">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-blue-100 dark:bg-gray-700 dark:text-gray-400 sticky top-0">
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
                        Telefono
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr class="bg-white border-b hover:bg-gray-50 cursor-pointer" v-for="load in 7">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Samuel Dzec Lopez
                    </th>
                    <td class="px-6 py-4">
                        24 anos
                    </td>
                    <td class="px-6 py-4">
                        Masculino
                    </td>
                    <td class="px-6 py-4">
                        9812028610
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>

</template>

<style scoped>

</style>