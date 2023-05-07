<script setup lang="ts">
import UiIcon from '../ui/UiIcon.vue'

interface Props {
  isTrending?: boolean
  popularity: number
}
const props = defineProps<Props>()
</script>

<template>
  <div class="trend-stat">
    <span class="dashes">
      <div
        v-for="value in 10"
        :key="value"
        name="VerticalDash"
        :class="[{ active: value <= props.popularity }, 'dash']"
      />
    </span>
    <span v-if="props.isTrending" class="trending-container">
      <UiIcon name="Trend" />
      <span class="trending-text">Trending</span>
    </span>
  </div>
</template>

<style lang="scss" scoped>
.trend-stat {
  display: flex;
  gap: 8px;
  height: 18px;

  .dashes {
    display: flex;
    gap: 4px;

    .dash {
      width: 2px;
      height: 18px;
      border-radius: 8px;
      background: #e0e0e0;

      &.active {
        background: #6a6a6a;
      }
    }
  }

  .trending-container {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .trending-text {
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #7281d3;
  }
}
</style>
