<script setup>

</script>

<template>
  <div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" class="w-1/12 py-3"></th>

        <th scope="col" class="w-5/12 py-3">Nombre</th>
        <th scope="col" class="w-2/12 py-3">Edad</th>
        <th scope="col" class="w-2/12 py-3">Sexo</th>
        <th scope="col" class="w-2/12 py-3">Teléfono</th>

        <th scope="col" class="w-1/12 py-3 flex"></th>
      </tr>
      </thead>
      <tbody>
      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">

        <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">1</th>

        <td class="py-4">Miguel Ángel Hernández Pat</td>
        <td class="py-4">33 años</td>
        <td class="py-4">Hombre</td>
        <td class="py-4">9812244054</td>

        <td class="px-3 py-4 flex gap-3">
          <svg class="hover:stroke-green-500 cursor-pointer" width="32" height="32" stroke="#758CA3" viewBox="0 0 40 40"
               fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="38" height="38" rx="19" stroke-width="2" />
            <path d="M11.5 20H28.5M20 11.5V28.5" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" />
          </svg>
          <svg class="hover:stroke-blue-500 cursor-pointer" stroke="#758CA3" width="32" height="32" viewBox="0 0 40 40"
               fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="38" height="38" rx="19" stroke-width="2" />
            <path
              d="M25.5 18.5L28.5 15.5L24.5 11.5L21.5 14.5M25.5 18.5L15.5 28.5H11.5V24.5L21.5 14.5M25.5 18.5L21.5 14.5"
              stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <svg class="hover:stroke-blue-500 cursor-pointer" stroke="#758CA3" width="32" height="32" viewBox="0 0 40 40"
               fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="38" height="38" rx="19" stroke-width="2" />
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M20 20C18.116 20 16.5838 18.4751 16.5838 16.6C16.5838 14.7249 18.116 13.2 20 13.2C21.884 13.2 23.4162 14.7249 23.4162 16.6C23.4162 18.4751 21.884 20 20 20ZM23.2095 20.572C24.5649 19.4866 25.3549 17.7313 25.0645 15.8094C24.7272 13.5799 22.8636 11.7958 20.6141 11.5357C17.5096 11.1761 14.8757 13.5816 14.8757 16.6C14.8757 18.2065 15.6239 19.6379 16.7905 20.572C13.9243 21.6439 11.8319 24.1607 11.5039 27.5573C11.4561 28.0597 11.8498 28.5 12.3571 28.5C12.7918 28.5 13.1625 28.1736 13.2009 27.7426C13.5434 23.9491 16.4617 21.7 20 21.7C23.5383 21.7 26.4566 23.9491 26.7991 27.7426C26.8375 28.1736 27.2082 28.5 27.6429 28.5C28.1502 28.5 28.5439 28.0597 28.4961 27.5573C28.1681 24.1607 26.0757 21.6439 23.2095 20.572Z"
                  fill="#758CA3" />
          </svg>
          <svg class="hover:stroke-red-500 cursor-pointer" stroke="#758CA3" width="32" height="32" viewBox="0 0 40 40"
               fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="38" height="38" rx="19" stroke-width="2" />
            <path d="M17.875 18.9375V25.3125" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" />
            <path d="M22.125 18.9375V25.3125" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" />
            <path d="M11.5 14.6875H28.5" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" />
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

</template>

<style scoped>

</style>