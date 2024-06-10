<script setup>

import TableUsers from '@/components/TableUsers.vue'
</script>

<template>
  <section class="flex justify-between align-mid mb-5 flex-wrap gap-3">

    <div class="w-1/2">
      <form class="max-w-md ">
        <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                 viewBox="0 0 20 20" id="search-icon">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input type="search" id="default-search"
                 class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-offset-gray-900 dark:focus:ring-offset-1"
                 placeholder="Buscar" required
                 onfocus="document.getElementById('search-icon').classList.add('text-blue-500', 'dark:text-blue-500')"
                 onblur="document.getElementById('search-icon').classList.remove('text-blue-500', 'dark:text-blue-500')" />
        </div>
      </form>
    </div>


    <div>
      <button class="btn-custom">
        Nuevo paciente
      </button>
    </div>
  </section>
  <section>
    <table-users/>
  </section>
</template>

<style scoped>

</style>