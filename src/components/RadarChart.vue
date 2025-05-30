<template>
  <ion-card-title>{{ title }}</ion-card-title>
  <div ref="chart" class="radar-chart"></div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import ApexCharts from 'apexcharts';

// Definición de props
const props = defineProps({
  title: {
    type: String,
    default: 'Porcentaje final del desarrollo de las funcionalidades'
  },
  seriesData: {
    type: Array as () => number[],
    default: () => [100, 100, 100, 30, 80]
  },
  categories: {
    type: Array as () => string[],
    default: () => ['Detalle Pokemon', 'C. efectividades', 'Pokedex', 'TeamBuilder', 'Mercado Pokemon']
  },
  color: {
    type: String,
    default: '#FF4560'
  },
  height: {
    type: Number,
    default: 350
  },
  maxValue: {
    type: Number,
    default: 100
  }
});

const chart = ref(null);

onMounted(() => {
  const options = {
    series: [{
      name: 'Porcentaje completado',
      data: props.seriesData
    }],
    chart: {
      height: props.height,
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
    colors: [props.color],
    stroke: {
      width: 2,
      colors: [props.color]
    },
    fill: {
      opacity: 0.3,
      colors: [props.color]
    },
    markers: {
      size: 5,
      colors: ['#4324fe'],
      strokeWidth: 2
    },
    xaxis: {
      categories: props.categories,
      labels: {
        style: {
          colors: props.categories.map(() => '#fff'),
          fontSize: '14px',
          fontFamily: 'Arial'
        }
      }
    },
    yaxis: {
      show: false,
      min: 0,
      max: props.maxValue,
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
          return val + '/' + props.maxValue;
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
  height: v-bind('height + "px"');
}
</style>