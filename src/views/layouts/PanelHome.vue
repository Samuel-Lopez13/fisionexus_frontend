<script setup>
import Sidebar from '@/components/globalComponents/SideBar.vue'
import Header from '@/components/globalComponents/HeaderInfo.vue'
import Footer from '@/components/globalComponents/FooterInfo.vue'
import { onMounted } from 'vue'
import { initTooltips } from 'flowbite'

onMounted(() => {
    initTooltips() // Inicializar los tooltips nuevamente
})
</script>

<template>
    <main class="flex h-screen short:h-full">
        <Sidebar/>
        <section class="flex flex-col w-full overflow-hidden">
            <Header/>
            <section class="flex-grow px-5 pt-5 overflow-auto style_scroll">
                <router-view></router-view>
                <Footer/>
            </section>
        </section>
    </main>
</template>

<style scoped>

</style>