<template>
  <Pie :data="chartData" :options="chartOptions" />
</template>

<script setup lang="ts">
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  Colors
} from 'chart.js'
import { Pie } from 'vue-chartjs'


ChartJS.register(Title, Tooltip, Legend, ArcElement, Colors)


const chartData = {
  labels: ['Castellano', 'Inglés', 'Italiano', 'Ruso', 'Japones'],
  datasets: [
    {
      label: 'Palabras',
      data: [3674, 3674, 3156, 1674, 1129],
      backgroundColor: ['#ef476f', '#118ab2', '#ffd166', '#06d6a0','#000']
    }
  ]
}


const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    },
    title: {
      display: true,
      text: 'Número de palabras traducidas en cada idioma'
    }
  }
}
</script>

