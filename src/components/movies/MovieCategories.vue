<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import UiPill from '../ui/UiPill.vue'

interface Props {
  categories: string[]
}
const props = defineProps<Props>()

const sliceValue = ref(2)
const howManyLeft = ref(0)

watchEffect(() => {
  if (props.categories.length > 2) {
    howManyLeft.value = props.categories.length - 1
    sliceValue.value = 1
  }
})
</script>

<template>
  <div class="categories-container">
    <UiPill v-for="(category, index) in props.categories.slice(0, sliceValue)" :key="index">
      {{ category }}
    </UiPill>
    <span v-if="howManyLeft" class="how-many-left">+{{ howManyLeft }} more</span>
  </div>
</template>

<style lang="scss" scoped>
.categories-container {
  display: flex;
  align-items: center;
  gap: 8px;
}
.how-many-left {
  font-family: 'Helvetica Neue';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #4755a8;
}
</style>
