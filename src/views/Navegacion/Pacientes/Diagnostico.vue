<script setup>
import SignosVitales from '@/components/PacientesComponents/SignosVitales.vue'
import CardCitas from '@/components/PacientesComponents/CardCitas.vue'
import CardCitaExpediente from '@/components/PacientesComponents/CardCitaExpediente.vue'
import DatosDiagnostico from '@/components/PacientesComponents/DatosDiagnostico.vue'
import MapaCorporal from '@/components/PacientesComponents/MapaCorporal.vue'
</script>

<template>
  <div class="flex gap-3 tablet:flex-wrap tablet:gap-0 telefono:flex-wrap">
    <section class="desktop:w-3/12 laptop:w-3/12 tablet:w-full telefono:w-full mb-4">
      <header class="flex gap-2 py-3 px-2 border shadow-sm rounded-sm mb-2 items-center telefono:flex-col">
        <div>
          <img
            src="https://scontent.fcjs3-2.fna.fbcdn.net/v/t39.30808-6/377918234_719064643611287_1682649016782720225_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHv4yAdgkUvY7N3S-F3yVIeMkOZEZBi3_kyQ5kRkGLf-Z7IETOMAM6jrNJvo8MRwHapZnZH0HGKsvjhy-8vUcWH&_nc_ohc=I26TfuFwKoQQ7kNvgGODrra&_nc_ht=scontent.fcjs3-2.fna&oh=00_AYBisLmcZR5POSnVxSxC5l9hpPJu367yCb1t5zvfFJ02gg&oe=666B1603"
            class="rounded-full h-12 w-12">
        </div>
        <div class="text-gray-600">
          <h4 class="font-bold">Edson Dzec López</h4>
          <div class="flex text-sm">
            <p>13/11/2001</p> -
            <p>22 años</p>
          </div>
        </div>
      </header>
      <div>
        <signos-vitales />
      </div>
    </section>
    <section class="laptop:h-[650px] overflow-y-auto flex-col flex gap-5 style_scroll desktop:w-8/12 laptop:w-8/12 tablet:w-full telefono:w-full">
      <mapa-corporal></mapa-corporal>
      <datos-diagnostico/>
    </section>
  </div>
</template>

<style scoped>

</style>