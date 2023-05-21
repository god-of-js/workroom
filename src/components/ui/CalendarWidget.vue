<script setup lang="ts">
import { computed } from 'vue'
import dayjs, { Dayjs } from 'dayjs'
import weekday from 'dayjs/plugin/weekday'
import weekOfYear from 'dayjs/plugin/weekOfYear'

dayjs.extend(weekday)
dayjs.extend(weekOfYear)

import CalenderWidgetDayItem from './CalendarWidgetDayItem.vue'
import CalenderWidgetMonthNavigator from './CalendarWidgetMonthNavigator.vue'

interface Props {
  modelValue: Dayjs
}
const props = defineProps<Props>()
const emit = defineEmits<{
  (e: 'update:modelValue', val: Dayjs): void
}>()

const today = dayjs().format("YYYY-MM-DD")
const activeDate = computed(() => {
  return props.modelValue;
})

const yearOfActiveDate = computed(() => {
  return dayjs(activeDate.value).year()
})

const monthOfActiveDate = computed(() => {
  return dayjs(activeDate.value).month() + 1
})

const numberOfDaysInSelectedMonth = computed(() => {
  return dayjs(props.modelValue).daysInMonth()
})

const daysInSelectedMonth = computed(() => {
  return [...Array(numberOfDaysInSelectedMonth.value)].map((day, index) => {
    return {
      date: dayjs(`${yearOfActiveDate.value}-${monthOfActiveDate.value}-${index + 1}`),
      isCurrentMonth: true
    }
  })
})

const visibleDaysInPreviousMonth = computed(() => {
  const firstDayOfTheMonthWeekday = getWeekday(daysInSelectedMonth.value[0].date)
  const previousMonth = dayjs(`${yearOfActiveDate.value}-${monthOfActiveDate.value}-01`).subtract(
    1,
    'month'
  )

  const visibleNumberOfDaysFromPreviousMonth = firstDayOfTheMonthWeekday
    ? firstDayOfTheMonthWeekday - 1
    : 6

  const previousMonthLastMondayDayOfMonth = dayjs(daysInSelectedMonth.value[0].date)
    .subtract(visibleNumberOfDaysFromPreviousMonth, 'day')
    .date()

  return [...Array(visibleNumberOfDaysFromPreviousMonth)].map((day, index) => {
    return {
      date: dayjs(
        `${previousMonth.year()}-${previousMonth.month() + 1}-${
          previousMonthLastMondayDayOfMonth + index
        }`
      ),
      isCurrentMonth: false
    }
  })
})

const visibleDaysInNextMonth = computed(() => {
  const lastDayOfTheMonthWeekday = getWeekday(
    `${yearOfActiveDate.value}-${monthOfActiveDate.value}-${daysInSelectedMonth.value.length}`
  )
  const nextMonth = dayjs(`${yearOfActiveDate.value}-${monthOfActiveDate.value}-01`).add(1, 'month')
  const visibleNumberOfDaysFromNextMonth = lastDayOfTheMonthWeekday
    ? 7 - lastDayOfTheMonthWeekday
    : lastDayOfTheMonthWeekday

  return [...Array(visibleNumberOfDaysFromNextMonth)].map((_, index) => {
    return {
      date: dayjs(`${nextMonth.year()}-${nextMonth.month() + 1}-${index + 1}`),
      isCurrentMonth: false
    }
  })
})

const visibleDays = computed(() => [
  ...visibleDaysInPreviousMonth.value,
  ...daysInSelectedMonth.value,
  ...visibleDaysInNextMonth.value
])

function selectDate(date: Dayjs) {
  emit('update:modelValue', date)
}

function getWeekday(date: Dayjs | string) {
  return dayjs(date).weekday()
}
</script>
<template>
  <div class="calendar">
    <CalenderWidgetMonthNavigator :selected-date="activeDate" @select-date="selectDate" />

    <ol class="days-grid">
      <CalenderWidgetDayItem
        v-for="(day, index) in visibleDays"
        :is-today="day.date.format('YYYY-MM-DD') === today"
        :day="day.date"
        :is-current-month="day.isCurrentMonth"
        :key="index"
      />
    </ol>
  </div>
</template>

<style scoped>
.calendar {
  background: white;
}

.days-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  list-style-type: none;
}
</style>
