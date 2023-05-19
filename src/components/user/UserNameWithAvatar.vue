<script setup lang="ts">

interface Props {
  avatar: string | File
  name: string
}
const props = defineProps<Props>()
</script>

<template>
  <div class="profile">
    <!-- <UiAvatar :img="props.avatar" /> -->
    <span>{{ props.name }}</span>
  </div>
</template>

<style lang="scss" scoped>
.profile {
  display: flex;
  gap: 10px;
  align-items: center;
  span {
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #000000;
  }
}
</style>
