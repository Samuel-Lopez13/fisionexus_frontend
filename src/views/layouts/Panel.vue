<script setup>
import Sidebar from '@/views/layouts/Sidebar.vue'
import Header from '@/views/layouts/HeaderInfo.vue'
import Footer from '@/views/layouts/FooterInfo.vue'
</script>

<template>
  <main class="flex h-screen">
    <Sidebar />
    <section class="flex flex-col w-full overflow-hidden">
      <Header />
      <section class="flex-grow p-5 overflow-auto">
        <router-view></router-view>
        <Footer />
      </section>
    </section>
  </main>
</template>

<style scoped>

</style>