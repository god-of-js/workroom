<script setup lang="ts">
import TheSideBar from '@/components/layout/TheSideBar.vue'
</script>

<template>
  <div id="dashboard-layout">
    <TheSideBar />
    <div class="body-wrapper">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss" scoped>
#dashboard-layout {
  background: #f4f9fd;
  height: 100vh;
  display: flex;

  .body-wrapper {
    margin: 0px 100px 0 300px;
    width: 100%;
  }
}
</style>
