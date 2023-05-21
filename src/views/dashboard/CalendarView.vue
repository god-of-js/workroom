<script setup lang="ts">
import { ref } from 'vue';
import Calendar from '@/components/ui/CalendarWidget.vue'
import dayjs from 'dayjs'

const date = ref(dayjs())
</script>
<template>
  <div>
    <header class="d-flex align-center justify-space-between my-4">
      <h1>Calendar</h1>
      <v-btn color="primary"><span class="mdi-plus" />Add Event</v-btn>
    </header>

    <Calendar v-model="date" />
  </div>
</template>

<style lang="scss" scoped></style>
