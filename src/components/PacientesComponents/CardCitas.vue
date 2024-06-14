<script setup>

</script>

<template>
  <div class="rounded-md border">
    <header class="text-gray-600 p-2 pt-1 pb-1 border-b">
      <h1 class="telefono:text-center">Agendar consulta</h1>
    </header>
    <div class="flex">
      <div class="w-1/2">
        <input type="date" class="w-full border-transparent text-gray-600 text-sm focus:ring-transparent focus:border-transparent block p-2 ml-1" placeholder="Select date">
      </div>
      <div class="w-1/2 mr-1">
        <input type="time" id="time" class="w-full border-transparent p-1.5 leading-none text-gray-600 text-sm focus:ring-transparent focus:border-transparent block" min="09:00" max="18:00" value="00:00" required />
      </div>
    </div>
    <div class="border-t">
      <input type="text" class="border-none focus:ring-transparent rounded-b-lg w-full" placeholder="Motivo de la consulta">
    </div>
  </div>
</template>

<style scoped>

</style>