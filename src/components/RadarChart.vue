<template>
  <div ref="chart" class="radar-chart"></div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import ApexCharts from 'apexcharts';

const chart = ref(null);

onMounted(() => {
  const options = {
    series: [{
      name: 'Porcentaje completado',
      data: [100, 100, 100, 0, 70]
    }],
    chart: {
      height: 350,
      type: 'radar',
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800,
        animateGradually: {
          enabled: true,
          delay: 150
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350
        }
      },
      toolbar: {
        show: false
      }
    },
    colors: ['#FF4560'],
    stroke: {
      width: 2,
      colors: ['#FF4560']
    },
    fill: {
      opacity: 0.3,
      colors: ['#FF4560']
    },
    markers: {
      size: 5,
      colors: ['#fff'],
      strokeWidth: 2
    },
    xaxis: {
      categories: ['Detalle Pokemon', 'C. efectividades', 'Pokedex', 'TeamBuilder', 'Mercado Pokemon'],
      labels: {
        style: {
          colors: ['#fff', '#fff', '#fff', '#fff', '#fff', '#fff'],
          fontSize: '14px',
          fontFamily: 'Arial'
        }
      }
    },
    yaxis: {
      show: false,
      min: 0,
      max: 100,
      tickAmount: 5
    },
    plotOptions: {
      radar: {
        polygons: {
          strokeColors: '#e8e8e8',
          fill: {
            colors: ['#f8f8f8', '#fff']
          }
        }
      }
    },
    tooltip: {
      theme: 'dark',
      y: {
        formatter: function(val: number) {
          return val + '/100';
        }
      }
    }
  };

  const chartInstance = new ApexCharts(chart.value, options);
  chartInstance.render();
});
</script>

<style scoped>
.radar-chart {
  width: 100%;
  height: 350px;
}
</style>