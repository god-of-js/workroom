<script setup lang="ts">
import dayjs, { Dayjs } from 'dayjs'
import { computed } from 'vue'

interface Props {
  isCurrentMonth: boolean
  isToday: boolean
  day: Dayjs
}
const props = defineProps<Props>()

const emit = defineEmits<{
  (e: 'date-clicked', day: Dayjs): void
}>()

const label = computed(() => {
  return dayjs(props.day).format('D')
})

function pickDate() {
  if (!props.isCurrentMonth) return

  emit('date-clicked', props.day)
}
</script>

<template>
  <li
    :class="{
      'is-inactive-month': !props.isCurrentMonth,
      'is-today': props.isToday,
      'day-item': true
    }"
    @click="pickDate"
  >
    <div class="content">
      <span class="label">{{ label }}</span>
    </div>
    <slot />
  </li>
</template>

<style lang="scss" scoped>
li {
  position: relative;
  height: 150px;
  border-right: 1px solid #e6ebf5;
  border-bottom: 1px solid #e6ebf5;
  padding: 12px;
  cursor: pointer;
  overflow: hidden;

  &.is-inactive-month {
    cursor: not-allowed;
    .content {
      opacity: 0.2;
    }
  }

  &.is-today {
    .label {
      background: #3f8cff;
      color: #fff;
      padding: 6px 8px;
      border-radius: 20px;
    }
  }

  .label {
    position: absolute;
    margin: 0 12px 12px 12px;
    color: #0a1629;
    z-index: 2;
    right: 0;
    top: 0;
  }
}
</style>
