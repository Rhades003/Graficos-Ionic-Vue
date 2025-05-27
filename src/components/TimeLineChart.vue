<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>Actividad mensual</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <apexchart type="line" height="300" :options="options" :series="series" />
    </ion-card-content>
  </ion-card>
</template>

<script setup lang="ts">
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/vue';
import apexchart from 'vue3-apexcharts';

const options = {
  chart: { id: 'line-chart' },
  xaxis: {
    type: 'datetime',
    categories: [
      '2024-01-01', '2024-02-01', '2024-03-01',
      '2024-04-01', '2024-05-01'
    ],
  },
  colors: ['#8338ec'],
};

const series = [
  {
    name: 'Usuarios activos',
    data: [200, 240, 210, 300, 320],
  },
];
</script>
