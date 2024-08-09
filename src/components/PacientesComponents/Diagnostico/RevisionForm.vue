<script setup>
import { ref } from 'vue'
import SignosPost from '@/components/PacientesComponents/SignosVitales/SignosPost.vue'


</script>

<template>
    <div class="rounded-sm w-[800px]">
        <header class="text-2xl text-gray-600 p-4 bg-gray-100 flex justify-center rounded-tl rounded-tr">
            Revision
        </header>
        <div class="flex gap-3 p-3">
            <section class="w-7/12">
                <SignosPost />
            </section>
            <section class="w-5/12 flex flex-col gap-2.5">
                <p>Comprobante de pago <span class="text-blue-600">*</span></p>
                <input type="text" class="input-primary" placeholder="Escribe aqui el folio de pago">
                <p>Observaciones <span class="text-blue-600">*</span></p>
                <textarea name="" id="revision" cols="30" placeholder="Escribe aqui tus observaciones de la revision" rows="9" class="input-primary resize-none"></textarea>
                <p>Servicios <span class="text-blue-600">*</span></p>
                <select name="" id="" class="input-primary">
                    <option value="">Ninguno</option>
                    <option value="">Hidrobano</option>
                    <option value="">Masaje</option>
                </select>
                <button id="agendar-btn" class="rounded-[3px] p-2 bg-blue-600 text-white w-full hover:bg-pHover">Subir revisión</button>
            </section>
        </div>
    </div>
</template>

<style scoped>

</style>