<script setup>
import { notifiacionApi } from '@/helpers/notifications/ConsumoAlertas.js'
</script>

<template>
  <button @click="notifiacionApi.subirRevision()">Calendario</button>
</template>

<style scoped>

</style>