<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { Chart, ChartData, ChartTypeRegistry, registerables } from 'chart.js'

interface Props {
  chartData: {
    type: keyof ChartTypeRegistry
    data: ChartData
  }
  chartOptions: Record<string, unknown>
}
const props = defineProps<Props>()
const canvasRef = ref<HTMLCanvasElement | null | undefined>(null)

onMounted(() => {
  Chart.register(...registerables)
  const ctx = canvasRef.value?.getContext('2d')
  if (ctx) {
    new Chart(ctx, {
      type: props.chartData.type,
      data: props.chartData.data,
      options: props.chartOptions
    })
  }
})
</script>
<template>
  <canvas ref="canvasRef" />
</template>
