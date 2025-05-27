<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>Distribución por categoría</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <apexchart type="donut" height="300" :options="options" :series="series" />
    </ion-card-content>
  </ion-card>
</template>

<script setup lang="ts">
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/vue';
import apexchart from 'vue3-apexcharts';

const series = [44, 55, 41, 17];
const options = {
  labels: ['Electrónica', 'Ropa', 'Hogar', 'Otros'],
  colors: ['#118ab2', '#06d6a0', '#ffd166', '#ef476f'],
  legend: { position: 'bottom' },
};
</script>
