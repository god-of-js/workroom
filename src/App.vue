<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheTopNav from './components/layout/TheTopNav.vue'
</script>

<template>
  <main class="app">
    <TheTopNav />
    <RouterView />
  </main>
</template>

<style lang="scss">
.app {
  min-height: 100vh;
}
</style>
