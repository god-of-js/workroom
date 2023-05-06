<script lang="ts" setup></script>

<template>
  <span class="pill">
    <slot />
  </span>
</template>

<style lang="scss" scoped>
.pill {
  height: 28px;
  padding: 8px 16px;
  background: #d1d8f7;
  border-radius: 41px;
  text-transform: uppercase;
  font-family: 'Helvetica Neue';
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #4755a8;
}
</style>
