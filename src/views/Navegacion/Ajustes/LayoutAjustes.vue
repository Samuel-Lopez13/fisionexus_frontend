<script setup>
import SideBarAjustes from '@/components/AjustesComponents/SideBarAjustes.vue'
import { ref, onMounted } from 'vue'

let clave = ref('')
let permiso = ref(false)

const ingresar = () => {
    if (clave.value === '123') {
        permiso.value = true
    } else {
        alert('No es la clave')
    }
}

</script>

<template>
    <div v-if="!permiso">
        <h1>Pantalla de administrador</h1>
        <p>Ingresa la clave verificadora para ingresar</p>
        <input v-model="clave" type="password">
        <button class="button-primary" @click="ingresar">Ingresar</button>
    </div>
    <main v-else class="flex gap-3 telefono:flex-col">
        <section>
            <SideBarAjustes/>
        </section>
        <section class="w-full style_scroll">
            <router-view/>
        </section>
    </main>
</template>

<style scoped>
</style>
