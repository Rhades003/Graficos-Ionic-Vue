<template>
  <div ref="chart" class="live-animated-chart"></div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import ApexCharts from 'apexcharts';

const chart = ref(null);

onMounted(() => {
  const options = {
    series: [{
      name: 'Datos en vivo',
      data: generateRandomData(20, 0, 100)
    }],
    chart: {
      height: 350,
      type: 'line',
      animations: {
        enabled: true,
        easing: 'linear',
        dynamicAnimation: {
          speed: 1000
        }
      },
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 3,
      colors: ['#fff']
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        gradientToColors: ['#FFD700'],
        shadeIntensity: 1,
        type: 'vertical',
        opacityFrom: 0.7,
        opacityTo: 0.2,
        stops: [0, 100]
      }
    },
    xaxis: {
      type: 'numeric',
      labels: {
        formatter: function(val: number) {
          return val.toFixed(0);
        },
        style: {
          colors: '#fff'
        }
      }
    },
    yaxis: {
      min: 0,
      max: 100,
      labels: {
        style: {
          colors: '#fff'
        }
      }
    },
    tooltip: {
      theme: 'dark'
    }
  };

  const chartInstance = new ApexCharts(chart.value, options);
  chartInstance.render();

  // Actualización en tiempo real
  setInterval(() => {
    const newData = generateRandomData(1, 0, 100)[0];
    chartInstance.updateSeries([{
      data: [...chartInstance.w.globals.series[0].data.slice(1), newData]
    }]);
  }, 1000);
});

function generateRandomData(count: number, min: number, max: number): number[] {
  return Array.from({ length: count }, () => 
    Math.floor(Math.random() * (max - min + 1)) + min
  );
}
</script>

<style scoped>
.live-animated-chart {
  width: 100%;
  height: 350px;
}
</style>