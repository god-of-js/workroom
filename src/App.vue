<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <main class="app">
    <RouterView />
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
