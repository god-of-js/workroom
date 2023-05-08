<script setup lang="ts">
import UiButton from '../ui/UiButton.vue'
import UiIcon from '../ui/UiIcon.vue'
import UiChart from '../ui/UiChart.vue';
import { ChartTypeRegistry } from 'chart.js';
const ctx = document.createElement('canvas').getContext('2d')!;
const gradient = ctx.createLinearGradient(0, 0, 0, 300);
gradient.addColorStop(0, '#35C3F3');
gradient.addColorStop(0.1127 / 1.0729, '#35C3F3');
gradient.addColorStop(0.3672 / 1.0729, '#8B9FE8');
gradient.addColorStop(0.6172 / 1.0729, '#E681D8');
gradient.addColorStop(0.8279 / 1.0729, '#FFA9A4');
gradient.addColorStop(1, '#FED2CE');

const data = {
  labels: [
    '0 - 1000',
    '1000 - 10,000',
    '10,000 - 100,000',
    '100,000 - 1,000,000'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [300, 700, 900, 900],
    backgroundColor: [
      '#7281D3',
      '#4755A8',
      '#D1D8F7',
      gradient,
    ],
    hoverOffset: 4
  }]
};
const config = {
  type: 'doughnut' as keyof ChartTypeRegistry,
  data: data,
};
const options = {
    plugins: {
      legend: {
        position: 'right',
        align: 'center',
        padding: {
          left: 10,
          right: 10,
          top: 10,
          bottom: 10
        },
        labels: {
          usePointStyle: true,
          pointRadius: 2,
          fontSize: 10
        }
      }
    }
  }
</script>

<template>
  <div class="todays-user-logins">
    <div class="body">
      <div class="title-container">
        <h2>Today’s user logins</h2>
        <UiIcon name="ThreeDots" />
      </div>
      <!-- <ComingSoon /> -->
      <!-- TODO: add chart -->

        <UiChart :chart-data="config" :chart-options="options" class="chart-container" />
    </div>
    <div class="view-full-report">
      <UiButton>View full report</UiButton>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.todays-user-logins {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  position: relative;
  height: 364px;
  .body {
    padding: 24px;
    margin-bottom: 72px;
  }
  .title-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 32px;
    h2 {
      font-family: 'Helvetica Neue';
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;

      color: #000000;
    }

    svg {
      fill: #000000;
    }
  }
  .view-full-report {
    background: #f5f5f5;
    border-top: 1px solid #e0e0e0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0px 10px;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;

    height: 72px;
  }

  .chart-container {
    max-height: 180px;
  }
}
</style>
