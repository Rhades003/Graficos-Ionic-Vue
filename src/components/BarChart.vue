<template>
    <ion-card-header>
      <ion-card-title>{{ title }}</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <apexchart type="bar" :height="height" :options="chartOptions" :series="chartSeries" />
    </ion-card-content>
</template>

<script setup lang="ts">
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/vue';
import apexchart from 'vue3-apexcharts';
import { computed } from 'vue';


const props = defineProps({
  title: {
    type: String,
    default: 'Velocidad de actualizaciones de la app'
  },
  categories: {
    type: Array as () => string[],
    default: () => [
      'Actualización 1', 'Actualización 2', 'Actualización 3', 
      'Actualización 4', 'Actualización 5', 'Actualización 6'
    ]
  },
  series: {
    type: Array as () => Array<{ name: string, data: number[] }>,
    default: () => [
      {
        name: 'Update masivo 10GB+',
        data: [30, 27, 23, 20, 16, 13]
      },
      {
        name: 'Update medio -10GB',
        data: [20, 16, 11, 8, 5, 5]
      },
      {
        name: 'Update pequeño -2GB',
        data: [8, 6, 6, 4, 2, 1]
      }
    ]
  },
  colors: {
    type: Array as () => string[],
    default: () => ['#ef476f', '#ffd166', '#06d6a0']
  },
  height: {
    type: Number,
    default: 350
  },
  yAxisTitle: {
    type: String,
    default: 'Tiempo en días'
  },
  tooltipSuffix: {
    type: String,
    default: ' día/s'
  },
  columnWidth: {
    type: String,
    default: '70%'
  },
  showToolbar: {
    type: Boolean,
    default: true
  },
  showDataLabels: {
    type: Boolean,
    default: false
  }
});


const chartOptions = computed(() => ({
  chart: {
    id: 'grouped-bar-chart',
    toolbar: {
      show: props.showToolbar
    }
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: props.columnWidth,
      endingShape: 'rounded'
    },
  },
  dataLabels: {
    enabled: props.showDataLabels
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  xaxis: {
    categories: props.categories
  },
  yaxis: {
    title: {
      text: props.yAxisTitle
    }
  },
  fill: {
    opacity: 1
  },
  colors: props.colors,
  legend: {
    position: 'top',
    horizontalAlign: 'center'
  },
  tooltip: {
    y: {
      formatter: function (val: number) {
        return val + props.tooltipSuffix;
      }
    }
  }
}));


const chartSeries = computed(() => props.series);
</script>