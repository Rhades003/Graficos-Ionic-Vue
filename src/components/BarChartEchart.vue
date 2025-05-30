<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>Dinero ganado cada mes</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <div ref="chartRef" style="width: 100%; height: 400px;"></div>
    </ion-card-content>
  </ion-card>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import * as echarts from 'echarts';

type EChartsOption = echarts.EChartsOption;

const chartRef = ref<HTMLElement | null>(null);

onMounted(() => {
  if (!chartRef.value) return;
  
  const myChart = echarts.init(chartRef.value);
  
  const option: EChartsOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['January', 'February', 'March', 'April', 'May', 'June'],
        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'Dinero Ganado',
        type: 'bar',
        barWidth: '60%',
        data: [0, 0, 20, 260, 480, 1067 ]
      }
    ]
  };

  myChart.setOption(option);

  const resizeHandler = () => myChart.resize();
  window.addEventListener('resize', resizeHandler);

  onUnmounted(() => {
    window.removeEventListener('resize', resizeHandler);
    myChart.dispose();
  });
});
</script>