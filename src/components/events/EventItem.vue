<script setup lang="ts">
interface Props {
  name: string
}
const props = defineProps<Props>()
</script>

<template>
  <div class="event-item">
    <div class="vertical-dash" />
    <div class="name">{{ props.name }}</div>
  </div>
</template>

<style lang="scss" scoped>
.event-item {
  min-height: 40px;
  width: 150px;
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 8px;
  margin-top: 10px;
  background: #f4f9fd;
  border-radius: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height, or 150% */

  color: #0a1629;

  .vertical-dash {
    height: 100%;
    min-height: 35px;
    padding: 2px;
    background: #de92eb;
    border-radius: 2px;
  }

  .name {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
