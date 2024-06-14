<script setup>

import { irExpediente } from '@/router/rutasUtiles.js'
</script>

<template>
    <div class="relative overflow-x-auto mb-5">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
                <th scope="col" class="w-5/12 py-3 px-2 telefono:p-4">Nombre</th>
                <th scope="col" class="w-2/12 py-3 telefono:p-4">Edad</th>
                <th scope="col" class="w-2/12 py-3 telefono:p-4">Sexo</th>
                <th scope="col" class="w-2/12 py-3 telefono:p-4">Teléfono</th>
                <th scope="col" class="w-1/12 py-3 telefono:p-4"></th>
            </tr>
            </thead>
            <tbody>
            <tr class="bg-white border-b">
                <td class="py-3 telefono:p-4 truncate px-2">Miguel Ángel Hernández Pat</td>
                <td class="py-3 telefono:p-4">33 años</td>
                <td class="py-3 telefono:p-4">Hombre</td>
                <td class="py-3 telefono:p-4">9812244054</td>
                <td class="py-3 telefono:p-4 flex gap-2">
                    <svg class="hover:stroke-green-500 cursor-pointer" width="28px" stroke="#758CA3"
                         viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="1" width="38" height="38" rx="19" stroke-width="2" />
                        <path d="M11.5 20H28.5M20 11.5V28.5" stroke-width="2" stroke-linecap="round"
                              stroke-linejoin="round" />
                    </svg>
                    <svg class="hover:stroke-blue-500 cursor-pointer" stroke="#758CA3" width="28px"
                         viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="1" width="38" height="38" rx="19" stroke-width="2" />
                        <path
                            d="M25.5 18.5L28.5 15.5L24.5 11.5L21.5 14.5M25.5 18.5L15.5 28.5H11.5V24.5L21.5 14.5M25.5 18.5L21.5 14.5"
                            stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <svg @click="irExpediente()" class="hover:stroke-blue-500 cursor-pointer" stroke="#758CA3" width="28px"
                         viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="1" width="38" height="38" rx="19" stroke-width="2" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M20 20C18.116 20 16.5838 18.4751 16.5838 16.6C16.5838 14.7249 18.116 13.2 20 13.2C21.884 13.2 23.4162 14.7249 23.4162 16.6C23.4162 18.4751 21.884 20 20 20ZM23.2095 20.572C24.5649 19.4866 25.3549 17.7313 25.0645 15.8094C24.7272 13.5799 22.8636 11.7958 20.6141 11.5357C17.5096 11.1761 14.8757 13.5816 14.8757 16.6C14.8757 18.2065 15.6239 19.6379 16.7905 20.572C13.9243 21.6439 11.8319 24.1607 11.5039 27.5573C11.4561 28.0597 11.8498 28.5 12.3571 28.5C12.7918 28.5 13.1625 28.1736 13.2009 27.7426C13.5434 23.9491 16.4617 21.7 20 21.7C23.5383 21.7 26.4566 23.9491 26.7991 27.7426C26.8375 28.1736 27.2082 28.5 27.6429 28.5C28.1502 28.5 28.5439 28.0597 28.4961 27.5573C28.1681 24.1607 26.0757 21.6439 23.2095 20.572Z"
                              fill="#758CA3" />
                    </svg>
                    <svg class="hover:stroke-red-500 cursor-pointer" stroke="#758CA3" width="28px"
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
                </td>
            </tr>
            </tbody>
        </table>
    </div>
    <div class="flex justify-between relative">
        <button class="relative flex items-center text-gray-700 button-with-hover group">
            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    <path class="group-hover:stroke-blue-600" d="M6 12H18M6 12L11 7M6 12L11 17" stroke="currentColor" stroke-width="0.6"
                          stroke-linecap="round" stroke-linejoin="round"></path>
                </g>
            </svg>
            <span class="group-hover:text-blue-600">Previous</span>
        </button>

        <div class="flex items-center h-[20px] text-gray-700 gap-3">
            <button class="relative border-blue-600 border-b text-blue-600 pr-2 pl-2">1</button>
            <svg width="18px" height="18px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                 stroke="currentColor" stroke-width="0.6">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    <path fill-rule="evenodd"
                          d="M6 12a2 2 0 11-4 0 2 2 0 014 0zm8 0a2 2 0 11-4 0 2 2 0 014 0zm6 2a2 2 0 100-4 2 2 0 000 4z"></path>
                </g>
            </svg>
            <button class="relative hover:text-blue-600 pr-2 pl-2">2</button>
        </div>

        <button class="relative flex items-center text-gray-700 button-with-hover group">
            <span class="group-hover:text-blue-600">Next</span>
            <svg width="24px" height="24px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    <path class="group-hover:stroke-blue-600" d="M6 12H18M18 12L13 7M18 12L13 17" stroke="currentColor" stroke-width="0.6"
                          stroke-linecap="round" stroke-linejoin="round"></path>
                </g>
            </svg>
        </button>
    </div>


</template>

<style scoped>

</style>