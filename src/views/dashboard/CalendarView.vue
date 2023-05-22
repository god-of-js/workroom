<script setup lang="ts">
import { ref, watch } from 'vue'
import dayjs, { Dayjs } from 'dayjs'
import Calendar from '@/components/ui/CalendarWidget.vue'
import NewEvent from '@/components/events/NewEvent.vue'

const date = ref(dayjs())
const newEventIsOpen = ref(false)
const chosenDate = ref<null | Dayjs>()

function addEvent(date: Dayjs) {
  chosenDate.value = date
  newEventIsOpen.value = true
}
watch(
  () => newEventIsOpen.value,
  (val) => {
    if (!val && chosenDate.value) {
      chosenDate.value = null
    }
  }
)
</script>

<template>
  <div>
    <header class="d-flex align-center justify-space-between my-4">
      <h1>Calendar</h1>
      <NewEvent v-model="newEventIsOpen" :key="`${newEventIsOpen}`" :chosen-date="chosenDate" />
    </header>

    <Calendar v-model="date" @trigger-with-date-clicked="addEvent" />
  </div>
</template>

<style lang="scss" scoped></style>
