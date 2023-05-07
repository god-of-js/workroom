<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheFooter from './components/layout/TheFooter.vue'
import TheTopNav from './components/layout/TheTopNav.vue'
</script>

<template>
  <main class="app">
    <TheTopNav />
    <RouterView />
    <TheFooter />
  </main>
</template>

<style lang="scss">
.app {
  min-height: 100vh;
  background: white;
  position: relative;
  padding-bottom: 72px;
}
</style>
