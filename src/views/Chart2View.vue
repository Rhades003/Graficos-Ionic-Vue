<template>
  <ion-page>
    <!-- Header con botón para el menú -->
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Dashboard Animado</ion-title>
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
          <ion-item href="/chart1">
            <ion-icon :icon="barChartOutline" slot="start"></ion-icon>
            <ion-label>Gráficos aspectos internos</ion-label>
          </ion-item>
          <ion-item href="/chart2">
            <ion-icon :icon="pieChartOutline" slot="start"></ion-icon>
            <ion-label>Gráficos aspectos externos</ion-label>
          </ion-item>
          <ion-item href="/kpi">
            <ion-icon :icon="trendingUpOutline" slot="start"></ion-icon>
            <ion-label>KPI's</ion-label>
          </ion-item>
        </ion-list>
      </ion-content>
    </ion-menu>

    <!-- Contenido principal -->
    <ion-content id="main-content">
      <ion-grid>

        <ion-row>
          <ion-col size="10" size-md="4">
            <div class="chart-container">
              <ProgressBar />
            </div>
          </ion-col>
          <ion-col size="10" size-md="4">
            <div class="chart-container">
              <RadarChart title="Progreso para el patrocinio de Nintendo" :series-data="[6, 4, 2, 6, 5]"
                :categories="['Descargas totales', 'Puntuación', 'Politicas Nintendo', 'Funcionalidades', 'Idiomas']"
                color="#00E396" :height="400" :max-value="6" />
            </div>
          </ion-col>
          <ion-col size="10" size-md="4">
            <div class="chart-container">
              <BigNumber :values="[899998, 899994, 899999, 900002]"
                title="Seguidores totales de Instagram, TikTok y Twitter" :value="1025" prefix="" :decimals="0"
                :trendValue="146" :entity="'Seguidores'" />
            </div>
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col size="10" size-md="6">
            <div class="chart-container">
                <BarChartEchart />
            </div>
          </ion-col>
          <ion-col size="10" size-md="6">
            <div class="chart-container">
              <TimelineChart title="Progreso de descargas"
                :categories="['2024-02-01', '2024-04-01', '2024-06-01', '2024-08-01', '2024-10-01', '2024-12-01']"
                :series-data="[8034, 24600, 86189, 403507, 857998, 999967]" series-name="Número de descargas"
                color="#3a86ff" :height="350" />
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
import BigNumber from '@/components/BigNumber.vue';
import ProgressBar from '@/components/ProgressChart.vue';
import TimelineChart from '@/components/TimeLineChart.vue';
import RadarChart from '@/components/RadarChart.vue';
import BarChart from '@/components/BarChart.vue';
import BarChartEchart from '@/components/BarChartEchart.vue';

</script>

<style scoped>
/* Estilos para el contenedor de gráficos */
.chart-container {
  background: #1E1E1E;
  border-radius: 8px;
  padding: 16px;
  height: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 16px;
}

/* Contenedor especial para el gráfico animado */
.live-chart {
  background: linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d);
  animation: gradientBG 15s ease infinite;
  background-size: 400% 400%;
}

/* Animación de fondo para el gráfico en vivo */
@keyframes gradientBG {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

/* Espaciado entre filas */
ion-row {
  margin-bottom: 16px;
}

/* Espaciado entre columnas */
ion-col {
  padding: 8px;
}

/* Ajustes responsivos */
@media (max-width: 768px) {
  .chart-container {
    padding: 12px;
  }
}
</style>