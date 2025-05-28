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
    <ion-content class="ion-padding">
      <!-- Objetivos Internos -->
      <ion-card>
        <ion-card-header>
          <ion-card-title>🎯 Objetivos Internos</ion-card-title>
          <ion-card-subtitle>Mejoras técnicas y de desarrollo</ion-card-subtitle>
        </ion-card-header>

        <ion-list>
          <ion-item>
            <ion-label class="kpi-item">
              <h2>1. Agilizar actualizaciones</h2>
              <p>🔹 Meta: Update grande 14 días, media 5 días, pequeña 2 días</p>
              <p>🔹 Acción: APIs oficiales y datamining</p>
              <p>🔹 Plazo: Próximas 7 actualizaciones</p>
            </ion-label>
          </ion-item>

          <ion-item>
            <ion-label class="kpi-item">
              <h2>2. Completar funcionalidades</h2>
              <p>🔹 Meta: TeamBuilder + Mercado Pokémon (5 funcionalidades totales)</p>
              <p>🔹 Acción: Refuerzo equipo + librerías especializadas</p>
              <p>🔹 Plazo: 2 meses</p>
            </ion-label>
          </ion-item>

          <ion-item>
            <ion-label class="kpi-item">
              <h2>3. Traducción multilingüe</h2>
              <p>🔹 Meta: 5 idiomas (ES, EN, IT, RU, JP)</p>
              <p>🔹 Acción: Plataforma OneSky para JP/RU</p>
              <p>🔹 Plazo: 2 años</p>
            </ion-label>
          </ion-item>

          <ion-item>
            <ion-label class="kpi-item">
              <h2>4. Realidad Aumentada</h2>
              <p>🔹 Meta: 1,025 modelos 3D compatibles</p>
              <p>🔹 Acción: Basado en tecnología Pokemon Go</p>
              <p>🔹 Plazo: 6 meses</p>
            </ion-label>
          </ion-item>

          <ion-item>
            <ion-label class="kpi-item">
              <h2>5. Migración a Firebase</h2>
              <p>🔹 Meta: 3,000 registros migrados</p>
              <p>🔹 Acción: Diseño ER + implementación Firebase</p>
              <p>🔹 Plazo: 6 meses</p>
            </ion-label>
          </ion-item>
        </ion-list>
      </ion-card>

      <!-- Objetivos Externos -->
      <ion-card>
        <ion-card-header>
          <ion-card-title>🌍 Objetivos Externos</ion-card-title>
          <ion-card-subtitle>Crecimiento y viabilidad de la aplicación</ion-card-subtitle>
        </ion-card-header>

        <ion-list>
          <ion-item>
            <ion-label class="kpi-item">
              <h2>1. Patrocinio Pokémon</h2>
              <p>🔹 Requisitos: 1.5M usuarios, 4.5★, 6 funcionalidades, 3 idiomas</p>
              <p>🔹 Acción: Cumplir políticas Nintendo/Creatures</p>
              <p>🔹 Plazo: 3 años</p>
            </ion-label>
          </ion-item>

          <ion-item>
            <ion-label class="kpi-item">
              <h2>2. Superar a DataDex</h2>
              <p>🔹 Meta: 1M descargas en primer año</p>
              <p>🔹 Acción: Estrategias de crecimiento orgánico</p>
              <p>🔹 Plazo: 12 meses post-lanzamiento</p>
            </ion-label>
          </ion-item>

          <ion-item>
            <ion-label class="kpi-item">
              <h2>3. Departamento de Testing</h2>
              <p>🔹 Meta: 4 testers + 1 manager</p>
              <p>🔹 Acción: Reclutamiento en LinkedIn/InfoJobs</p>
              <p>🔹 Plazo: 4 meses (1 búsqueda + 3 formación)</p>
            </ion-label>
          </ion-item>

          <ion-item>
            <ion-label class="kpi-item">
              <h2>4. Crecimiento en RRSS</h2>
              <p>🔹 Meta: 1M seguidores (Twitter/IG/TikTok)</p>
              <p>🔹 Acción: Campañas ads + community manager</p>
              <p>🔹 Plazo: 6 meses</p>
            </ion-label>
          </ion-item>

          <ion-item>
            <ion-label class="kpi-item">
              <h2>5. Monetización</h2>
              <p>🔹 Meta: 600€/mes</p>
              <p>🔹 Acción: Anuncios + suscripciones premium</p>
              <p>🔹 Plazo: 8 meses</p>
            </ion-label>
          </ion-item>
        </ion-list>
      </ion-card>
    </ion-content>

  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
  IonMenu, IonMenuButton, IonButtons, IonList, IonItem, IonLabel, IonIcon,
} from '@ionic/vue';
import { barChartOutline, pieChartOutline, trendingUpOutline } from 'ionicons/icons';

</script>

<style scoped>.kpi-item {
  white-space: normal;
  margin: 10px 0;
}

.kpi-item h2 {
  font-weight: 600;
  margin-bottom: 8px;
  color: var(--ion-color-primary);
}

.kpi-item p {
  margin: 4px 0;
  font-size: 0.9rem;
  color: var(--ion-color-medium);
}

ion-badge {
  float: right;
  margin-top: 10px;
}

</style>