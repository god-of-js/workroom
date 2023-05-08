<script setup lang="ts">
import UiButton from '@/components/ui/UiButton.vue'
import UiIcon from '@/components/ui/UiIcon.vue'

interface Props {
  name: string
}
const props = defineProps<Props>()
</script>

<template>
  <header>
    <h1>{{ props.name }}</h1>
    <div class="btn-container">
      <slot>
        <UiButton>
          <UiIcon name="Filter" />
          Filter</UiButton
        >
      </slot>
      <UiButton>
        <UiIcon name="Export" />

        Export</UiButton
      >
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 128px;
  height: 72px;
  border: 1px solid #e0e0e0;

  h1 {
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: #000000;
  }

  .btn-container {
    display: flex;
    gap: 8px;
  }
}
</style>
