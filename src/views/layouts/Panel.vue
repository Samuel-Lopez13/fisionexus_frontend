<script setup>
import Sidebar from '@/views/layouts/Sidebar.vue'
import Header from '@/views/layouts/Header.vue'
</script>

<template>
  <div class="flex overflow-hidden ">
    <Sidebar/>
    <div class="flex flex-col w-full">
      <Header/>
      <div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>