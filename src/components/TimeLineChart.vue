<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>{{ title }}</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <apexchart type="line" :height="height" :options="chartOptions" :series="chartSeries" />
    </ion-card-content>
  </ion-card>
</template>

<script setup lang="ts">
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/vue';
import apexchart from 'vue3-apexcharts';
import { computed } from 'vue';

// Definición de props
const props = defineProps({
  title: {
    type: String,
    default: 'Nº Registros migrados en la Base de datos'
  },
  categories: {
    type: Array as () => string[],
    default: () => [
      '2024-01-01', '2024-02-01', '2024-03-01',
      '2024-04-01', '2024-05-01', '2024-06-01'
    ]
  },
  seriesData: {
    type: Array as () => number[],
    default: () => [0, 540, 780, 1100, 1720, 2360]
  },
  seriesName: {
    type: String,
    default: 'Entidades registradas en la base de datos'
  },
  color: {
    type: String,
    default: '#8338ec'
  },
  height: {
    type: Number,
    default: 300
  },
  xaxisType: {
    type: String,
    default: 'datetime'
  }
});

// Opciones computadas
const chartOptions = computed(() => ({
  chart: { id: 'line-chart' },
  xaxis: {
    type: props.xaxisType,
    categories: props.categories,
  },
  colors: [props.color],
  tooltip: {
    x: {
      format: props.xaxisType === 'datetime' ? 'yyyy-MM-dd' : undefined
    }
  }
}));

// Series computadas
const chartSeries = computed(() => [
  {
    name: props.seriesName,
    data: props.seriesData,
  }
]);
</script>