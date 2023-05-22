<script setup lang="ts">
import { Dayjs } from 'dayjs'
import { computed, ref } from 'vue'
import CalendarWidget from './CalendarWidget.vue'

interface Props {
  modelValue: Dayjs
}
const props = defineProps<Props>()
const emit = defineEmits<{
  (e: 'update:model-value', val: Dayjs): null
}>()
const calendarIsOpen = ref(false)
const value = computed({
  set(val: Dayjs) {
    emit('update:model-value', val)
  },
  get() {
    return props.modelValue
  }
})

function update(val: Dayjs) {
  emit('update:model-value', val)
  calendarIsOpen.value = false
}
</script>

<template>
  <button @click="calendarIsOpen = !calendarIsOpen">
    <v-text-field disabled outline label="Select Date" :model-value="value.format('YYYY-MM-DD')" />
  </button>
  <div class="calendar-container">
    <CalendarWidget v-if="calendarIsOpen" v-model="value" @trigger-with-date-clicked="update" />
  </div>
</template>

<style lang="scss" scoped>
button {
  background: transparent;
  border: transparent;
  cursor: pointer;
  width: 100%;
}
:deep(.day-item) {
  height: 60px;
  display: flex;
  align-items: center;

  .label {
    position: static;
  }
}
:deep(.weekdays) {
  margin-bottom: 10%;
}

.calendar-container {
  position: fixed;
  z-index: 55;
}
</style>
