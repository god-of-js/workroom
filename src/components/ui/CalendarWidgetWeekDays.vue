<script setup lang="ts">
const weekdays = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']
</script>

<template>
  <ul class="weekdays">
    <li v-for="(weekday, index) in weekdays" :key="index">{{ weekday }}</li>
  </ul>
</template>

<style lang="scss" scoped>
.weekdays {
  margin-bottom: -5%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  list-style-type: none;
  padding: 0;
  margin: 0;

  li {
    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 22px;
    color: #7d8592;
    border-radius: 4px;
  }
}
</style>
