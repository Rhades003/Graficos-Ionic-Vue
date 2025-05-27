<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>Gráfico de Área</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <apexchart type="area" height="300" :options="options" :series="series" />
    </ion-card-content>
  </ion-card>
</template>

<script setup lang="ts">
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/vue';
import apexchart from 'vue3-apexcharts';

const options = {
  chart: { id: 'area-chart' },
  xaxis: { categories: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie'] },
  colors: ['#00b4d8'],
  dataLabels: { enabled: false },
  stroke: { curve: 'smooth' },
  fill: { type: 'gradient' },
};

const series = [
  {
    name: 'Visitas',
    data: [31, 40, 28, 51, 42],
  },
];
</script>
