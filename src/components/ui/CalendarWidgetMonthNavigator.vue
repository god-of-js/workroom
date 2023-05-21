<script setup lang="ts">
import { computed } from 'vue'
import dayjs, { Dayjs } from 'dayjs'
import UiIcon from './UiIcon.vue'

interface Props {
  selectedDate: Dayjs
}
const props = defineProps<Props>()
const emit = defineEmits<{
  (e: 'select-date', val: Dayjs): void
}>()
const selectedMonth = computed(() => {
  return props.selectedDate.format('MMMM YYYY')
})

function goToPrevMonth() {
  const newSelectedDate = dayjs(props.selectedDate).subtract(1, 'month')
  emit('select-date', newSelectedDate)
}

function goToNextMonth() {
  const newSelectedDate = dayjs(props.selectedDate).add(1, 'month')
  emit('select-date', newSelectedDate)
}
</script>
<template>
  <div class="d-flex align-center justify-center pa-4 month-navigator">
    <v-btn variant="icon" rounded><UiIcon name="ArrowLeft" @click="goToPrevMonth" /></v-btn>
    <span class="month-details">{{ selectedMonth }}</span>
    <v-btn variant="icon" rounded><UiIcon name="ArrowRight" @click="goToNextMonth" /></v-btn>
  </div>
</template>

<style lang="scss" scoped>
.month-navigator {
  gap: 8px;
  border-bottom: 1px solid #e6ebf5;
}
</style>
