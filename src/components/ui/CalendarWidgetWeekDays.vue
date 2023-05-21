<script setup lang="ts">
const weekdays = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']
</script>

<template>
  <ul class="weekdays">
    <li v-for="(weekday, index) in weekdays" :key="index">
      <span>
        {{ weekday }}
      </span>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.weekdays {
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
    margin-bottom: -60px;
    padding: 8px;
    span {
      background: #f4f9fd;
      padding: 2px 6px;
      border-radius: 4px;
    }
  }
}
</style>
