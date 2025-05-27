<template>
  <ion-page>
    <!-- Header con botón para el menú -->
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Dashboard de Gráficos</ion-title>
      </ion-toolbar>
    </ion-header>

    <!-- Sidebar/Menú -->
    <ion-menu content-id="main-content">
      <ion-header>
        <ion-toolbar>
          <ion-title>Menú</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-list>
          <ion-item href="/home">
            <ion-icon :icon="barChartOutline" slot="start" ></ion-icon>
            <ion-label>Gráficos de Barras</ion-label>
          </ion-item>
          <ion-item href="/page2">
            <ion-icon :icon="pieChartOutline" slot="start" ></ion-icon>
            <ion-label>Gráficos Circulares</ion-label>
          </ion-item>
          <ion-item>
            <ion-icon :icon="trendingUpOutline" slot="start"></ion-icon>
            <ion-label>Gráficos de Área</ion-label>
          </ion-item>
        </ion-list>
      </ion-content>
    </ion-menu>

    <!-- Contenido principal -->
    <ion-content id="main-content">
      <ion-grid>

        <!-- Segunda fila con 2 gráficos -->
        <ion-row>
          <ion-col size="12" size-md="6">
            <div class="chart-container">
              <area-chart />
            </div>
          </ion-col>
          <ion-col size="12" size-md="6">
            <div class="chart-container">
              <bar-chart />
            </div>
          </ion-col>
        </ion-row>

        <!-- Tercera fila con 2 gráficos -->
        <ion-row>
          <ion-col size="12" size-md="6">
            <div class="chart-container">
              <donut-chart />
            </div>
          </ion-col>
          <ion-col size="12" size-md="6">
            <div class="chart-container">
              <timeline-chart />
            </div>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { 
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
  IonMenu, IonMenuButton, IonButtons, IonList, IonItem, IonLabel, IonIcon,
  IonGrid, IonRow, IonCol 
} from '@ionic/vue';
import { barChartOutline, pieChartOutline, trendingUpOutline } from 'ionicons/icons';
import { ref } from 'vue';

import AreaChart from '@/components/AreaChart.vue'
import BarChart from '@/components/BarChart.vue'
import DonutChart from '@/components/DonutChart.vue'
import TimelineChart from '@/components/TimeLineChart.vue'
import SparkLine from '@/components/SparkLine.vue'

// Configuraciones de los sparklines (igual que en tu código original)
const sparkData1 = ref({
  title: "CLICKS",
  value: "1234",
  bgColor: "gradient-blue",
  textColor: "white",
  iconName: "navigate-outline",
  chartOptions: {
    chart: {
      id: 'clicks',
      type: 'area',
      sparkline: { enabled: true },
      dropShadow: { enabled: true, top: 1, left: 1, blur: 2, opacity: 0.5 }
    },
    stroke: { curve: 'smooth', width: 3 },
    colors: ['#fff'],
    tooltip: { theme: 'dark', x: { show: false }, y: { title: { formatter: () => '' } } }
  },
  chartSeries: [{ data: [25, 66, 41, 59, 25, 44, 12, 36, 9, 21] }],
});

const sparkData2 = ref({
  title: "VIEWS",
  value: "1982",
  bgColor: "gradient-pink",
  textColor: "white",
  iconName: "eye-outline",
  chartOptions: {
    chart: {
      id: 'views',
      type: 'bar',
      sparkline: { enabled: true },
      dropShadow: { enabled: true, top: 1, left: 1, blur: 2, opacity: 0.5 }
    },
    stroke: { curve: 'smooth', width: 3 },
    colors: ['#fff'],
    tooltip: { theme: 'dark', x: { show: false }, y: { title: { formatter: () => '' } } }
  },
  chartSeries: [{ data: [25, 66, 41, 59, 25, 44, 12, 36, 9, 21] }],
});

const sparkData3 = ref({
  title: "LEADS",
  value: "2011",
  bgColor: "gradient-orange",
  textColor: "white",
  iconName: "people-outline",
  chartOptions: {
    chart: {
      id: 'leads',
      type: '',
      sparkline: { enabled: true },
      dropShadow: { enabled: true, top: 1, left: 1, blur: 2, opacity: 0.5 }
    },
    stroke: { curve: 'straight', width: 3 },
    colors: ['#fff'],
    tooltip: { theme: 'dark', x: { show: false }, y: { title: { formatter: () => '' } } }
  },
  chartSeries: [{ data: [25, 66, 41, 59, 25, 44, 12, 36, 9, 21] }],
});

const sparkData4 = ref({
  title: "SALES",
  value: "627k€",
  bgColor: "gradient-green",
  textColor: "white",
  iconName: "cash-outline",
  chartOptions: {
    chart: {
      id: 'sales',
      type: 'area',
      sparkline: { enabled: true },
      dropShadow: { enabled: true, top: 1, left: 1, blur: 2, opacity: 0.5 }
    },
    stroke: { curve: 'smooth', width: 3 },
    colors: ['#fff'],
    tooltip: { theme: 'dark', x: { show: false }, y: { title: { formatter: () => '' } } }
  },
  chartSeries: [{ data: [25, 66, 41, 59, 25, 44, 12, 36, 9, 21] }],
});
</script>

<style scoped>
/* Estilos para el contenedor de gráficos */
.chart-container {
  background: #1E1E1E;
  border-radius: 8px;
  padding: 16px;
  height: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Espaciado entre filas */
ion-row {
  margin-bottom: 16px;
}

/* Espaciado entre columnas */
ion-col {
  padding: 8px;
}

/* Altura fija para los sparklines */
.spark-row ion-col {
  height: 120px;
}

/* Ajustes responsivos */
@media (max-width: 768px) {
  .spark-row ion-col {
    height: auto;
    margin-bottom: 8px;
  }
}
</style>