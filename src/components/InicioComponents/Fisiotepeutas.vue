<script setup>
import { irFisioterapeutas } from '@/router/rutasUtiles.js'
</script>

<template>
    <div class="p-4 overflow-x-auto bg-white border border-gray-200 rounded-lg shadow sm:p-8">
        <div class="flex items-center justify-between mb-3">
            <h5 class="text-xl font-bold leading-none text-blue-600">Fisioterapeutas</h5>
            <div @click="irFisioterapeutas" role="button" class="text-sm font-medium text-blue-600 hover:text-blue-700">
                Ver a todos
            </div>
        </div>
        <div class="flow-root">
            <ul role="list" class="divide-y divide-gray-200">
                <li class="py-3 sm:py-4">
                    <div class="flex items-center">
                        <div class="flex-shrink-0">
                            <img class="w-8 h-8 rounded-full object-cover"
                                 src="https://img.freepik.com/foto-gratis/retrato-hermoso-mujer-joven-posicion-pared-gris_231208-10760.jpg"
                                 alt="Neil image">
                        </div>
                        <div class="flex-1 min-w-0 ms-4 mr-3">
                            <p class="text-sm font-medium text-gray-900 truncate">
                                Samuel Dzec Pat
                            </p>
                            <p class="text-sm text-gray-500 truncate">
                                samuelSharp@gmail.com
                            </p>
                        </div>
                        <div class="inline-flex items-center text-base font-semibold text-gray-900 pl-6">
                            9812038412
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>

</template>

<style scoped>

</style>