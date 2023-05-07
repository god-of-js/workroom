<script setup lang="ts">
const props = defineProps<{
  disabled?: boolean
}>()
const emit = defineEmits<{
  (e: 'click'): void
}>()
</script>

<template>
  <button :disabled="props.disabled" @click="emit('click')">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
button {
  background: none;
  cursor: pointer;
  padding: 8px;
  gap: 8px;
  height: 34px;

  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-family: 'Helvetica Neue';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  background: white;
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
