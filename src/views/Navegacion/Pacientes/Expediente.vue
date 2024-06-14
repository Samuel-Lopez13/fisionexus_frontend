<script setup>

import SignosVitales from '@/components/PacientesComponents/SignosVitales.vue'
import InterrogatorioExpediente from '@/components/PacientesComponents/InterrogatorioExpediente.vue'
import CardCitas from '@/components/PacientesComponents/CardCitas.vue'
import CardCitaExpediente from '@/components/PacientesComponents/CardCitaExpediente.vue'
</script>

<template>
  <div class="flex gap-3 tablet:flex-wrap tablet:gap-0 telefono:flex-wrap">
    <section class="desktop:w-3/12 laptop:w-3/12 tablet:w-6/12 tablet:order-1 telefono:w-full mb-4">
      <header class="flex gap-2 mb-4 items-center telefono:flex-col">
        <div>
          <img
            src="https://scontent.fcjs3-2.fna.fbcdn.net/v/t39.30808-6/377918234_719064643611287_1682649016782720225_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHv4yAdgkUvY7N3S-F3yVIeMkOZEZBi3_kyQ5kRkGLf-Z7IETOMAM6jrNJvo8MRwHapZnZH0HGKsvjhy-8vUcWH&_nc_ohc=I26TfuFwKoQQ7kNvgGODrra&_nc_ht=scontent.fcjs3-2.fna&oh=00_AYBisLmcZR5POSnVxSxC5l9hpPJu367yCb1t5zvfFJ02gg&oe=666B1603"
            class="rounded-full h-12 w-12">
        </div>
        <div class="text-gray-600">
          <h1 >Edson Dzec López</h1>
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
    <section class="desktop:w-6/12 laptop:w-6/12 tablet:w-full tablet:order-3 telefono:w-full">
      <interrogatorio-expediente />
    </section>

    <section class="desktop:w-3/12 laptop:w-3/12 tablet:w-5/12 tablet:ml-5 tablet:order-2 telefono:w-full flex flex-col gap-3">
      <button class="button-primary w-full">Iniciar Consulta</button>
      <card-citas />
      <button class="bg-principal p-0.5 pr-6 pl-6 font-poppins text-white rounded-[3px] w-1/2 hover:bg-pHover">Agendar cita</button>
      <div class="laptop:h-[450px] tablet:h-[250px] telefono:h-[200px] overflow-y-auto flex-col flex gap-5">
      <card-cita-expediente/>
        <card-cita-expediente/>
        <card-cita-expediente/>
      </div>
    </section>

  </div>
</template>

<style scoped>

</style>