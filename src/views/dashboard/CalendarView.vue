<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import dayjs, { Dayjs } from 'dayjs'
import Calendar from '@/components/ui/CalendarWidget.vue'
import NewEvent from '@/components/events/NewEvent.vue'
import { useAppStore } from '@/stores'
import EventItem from '@/components/events/EventItem.vue'

const appStore = useAppStore()
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

onMounted(() => {
  appStore.getEvents()
})
</script>

<template>
  <div>
    <header class="d-flex align-center justify-space-between my-4">
      <h1>Calendar</h1>
      <NewEvent v-model="newEventIsOpen" :key="`${newEventIsOpen}`" :chosen-date="chosenDate" />
    </header>

    <Calendar v-model="date" @trigger-with-date-clicked="addEvent" :data="appStore.events">
      <template #default="{ data }">
        <EventItem :name="data.name" />
      </template>
    </Calendar>
  </div>
</template>

<style lang="scss" scoped></style>
