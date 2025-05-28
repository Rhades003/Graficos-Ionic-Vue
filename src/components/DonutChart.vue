<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>Porcentaje de palabras en cada idioma</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <apexchart type="donut" height="300" :options="options" :series="series" />
    </ion-card-content>
  </ion-card>
</template>

<script setup lang="ts">
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/vue';
import apexchart from 'vue3-apexcharts';

const series = [3674, 3674, 3156, 1674, 1129];
const options = {
  labels: ['Castellano', 'Inglés', 'Italiano', 'Ruso', 'Japones'],
  colors: ['#ef476f', '#118ab2', '#ffd166', '#06d6a0','#000'],
  legend: { position: 'bottom' },
};
</script>
