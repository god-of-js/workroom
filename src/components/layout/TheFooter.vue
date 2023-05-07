<script setup lang="ts">
import TheLogo from './TheLogo.vue'
</script>

<template>
  <footer>
    © 2022
    <TheLogo />
    All Rights Reserve
  </footer>
</template>

<style lang="scss" scoped>
footer {
  height: 72px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: 10px 128px;
  font-family: 'Helvetica Neue';
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  color: #6a6a6a;

  :deep(.colored-text),
  :deep(.admin-text) {
    font-size: 16px;
    line-height: 19px;
  }
}
</style>
