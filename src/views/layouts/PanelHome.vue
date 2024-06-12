<script setup>
import Sidebar from '@/components/globalComponents/SideBar.vue'
import Header from '@/components/globalComponents/HeaderInfo.vue'
import Footer from '@/components/globalComponents/FooterInfo.vue'
import { usuariosQueries } from '@/api/usuarios/usuariosQueries.js'
import { onMounted } from 'vue'

onMounted(() => {
    verify()
})

const verify = async () =>{
    const response = await usuariosQueries.verifyUser(localStorage.getItem(import.meta.env.VITE_CREDENCIALES))

    console.log(response)

    if(response.verify === false){
        localStorage.removeItem(import.meta.env.VITE_CREDENCIALES)
    }
}
</script>

<template>
    <main class="flex h-screen">
        <Sidebar/>
        <section class="flex flex-col w-full overflow-hidden">
            <Header/>
            <section class="flex-grow p-5 overflow-auto style_scroll">
                <router-view></router-view>
                <Footer/>
            </section>
        </section>
    </main>
</template>

<style scoped>

</style>