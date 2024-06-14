<script setup>

</script>

<template>
  <div class="rounded-md border">
    <header class="text-gray-600  border p-2 pt-1 pb-1">
      <h1>Agendar consulta</h1>
    </header>
    <div class="flex">
      <div class="w-1/2 border">
        <input type="date" class="w-full border-transparent text-gray-600 text-sm focus:ring-transparent focus:border-transparent block p-2.5 ml-0.5" placeholder="Select date">
      </div>
      <div class="w-1/2 border">
        <input type="time" id="time" class="w-full border-transparent leading-none border-gray-300 text-gray-600 text-sm focus:ring-transparent focus:border-transparent block" min="09:00" max="18:00" value="00:00" required />
      </div>
    </div>
    <div>
      <input id=""
             class="font-light p-2 w-full border-principal rounded-sm text-gray-600 hover:outline-0 focus:text-blue-900 focus:outline-0 focus:border-blue-500 focus:border-2"
             placeholder="Motivo de la consulta">
    </div>
  </div>
</template>

<style scoped>

</style>