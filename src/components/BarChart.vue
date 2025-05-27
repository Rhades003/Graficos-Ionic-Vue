<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>Ventas semanales</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <apexchart type="bar" height="300" :options="options" :series="series" />
    </ion-card-content>
  </ion-card>
</template>

<script setup lang="ts">
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/vue';
import apexchart from 'vue3-apexcharts';

const options = {
  chart: { id: 'bar-chart' },
  plotOptions: { bar: { horizontal: false } },
  xaxis: { categories: ['Producto A', 'B', 'C', 'D'] },
  colors: ['#ef476f'],
};

const series = [{ name: 'Unidades', data: [30, 40, 25, 50] }];
</script>
