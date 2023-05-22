<script setup lang="ts">
import { ref } from 'vue'
import dayjs, { Dayjs } from 'dayjs'
import Calendar from '@/components/ui/CalendarWidget.vue'
import NewEvent from '@/components/events/NewEvent.vue'

const date = ref(dayjs())
const newEventIsOpen = ref(false)

function addEvent(chosenDate: Dayjs) {}
</script>
<template>
  <div>
    <header class="d-flex align-center justify-space-between my-4">
      <h1>Calendar</h1>
      <NewEvent v-model="newEventIsOpen" />
    </header>

    <Calendar v-model="date" @trigger-with-date-clicked="addEvent" />
  </div>
</template>

<style lang="scss" scoped></style>
