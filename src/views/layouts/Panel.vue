<script setup>
import Sidebar from '@/views/layouts/Sidebar.vue'
import Header from '@/views/layouts/HeaderInfo.vue'
</script>

<template>
    <main class="flex overflow-hidden">
        <Sidebar/>
        <section class="flex flex-col w-full">
            <Header/>
            <router-view></router-view>
        </section>
    </main>
</template>

<style scoped>

</style>