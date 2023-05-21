<script setup lang="ts">
import TheSideBar from '@/components/layout/TheSideBar.vue'
</script>

<template>
  <div id="dashboard-layout">
    <TheSideBar />
    <router-view />
  </div>
</template>

<style scoped>
#dashboard-layout {
  background: #f4f9fd;
  height: 100vh;
}
</style>
