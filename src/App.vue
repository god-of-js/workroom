<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <main class="app">
    <RouterView />
  </main>
</template>

<style lang="scss">
@font-face {
  font-family: 'Nunito Sans';
  src: url('./assets/fonts/Nunito_Sans/static/NunitoSans_10pt_Condensed-ExtraBold.ttf');
}
.app {
  min-height: 100vh;
  background: white;
  position: relative;
  color: #000;
  font-family: 'Nunito Sans', sans-serif;
}
</style>
