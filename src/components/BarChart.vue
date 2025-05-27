<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>Velocidad de actualizaciones de la app</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <apexchart type="bar" height="350" :options="chartOptions" :series="chartSeries" />
    </ion-card-content>
  </ion-card>
</template>

<script setup lang="ts">
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/vue';
import apexchart from 'vue3-apexcharts';

const chartOptions = {
  chart: {
    id: 'grouped-bar-chart',
    toolbar: {
      show: true
    }
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '70%',
      endingShape: 'rounded'
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['Actualización 1', 'Actualización 2', 'Actualización 3', 'Actualización 4', 'Actualización 5', 'Actualización 6']
  },
  yaxis: {
    title: {
      text: 'Tiempo en días'
    }
  },
  fill: {
    opacity: 1
  },
  colors: ['#ef476f', '#ffd166', '#06d6a0'],
  legend: {
    position: 'top',
    horizontalAlign: 'center'
  },
  tooltip: {
    y: {
      formatter: function (val: number) {
        return val + " día/s";
      }
    }
  }
};

const chartSeries = [
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
];
</script>