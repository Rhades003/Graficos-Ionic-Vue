<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>{{ title }}</ion-card-title>
      <ion-card-subtitle>{{ subtitle }}</ion-card-subtitle>
    </ion-card-header>
    <ion-card-content class="ion-text-center">
      <div class="big-number" :style="{ color: color }">
        {{ formattedValue }} Pokes
      </div>
      <div class="trend-indicator" v-if="showTrend">
        <ion-icon 
          :icon="trendIcon" 
          :color="trendColor"
          class="trend-icon"
        ></ion-icon>
        <span :style="{ color: trendColor }">{{ trendPercentage }}%</span>
      </div>
      <div class="description" v-if="description">
        {{ description }}
      </div>
    </ion-card-content>
  </ion-card>
</template>

<script setup lang="ts">
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle, IonIcon } from '@ionic/vue';
import { arrowUp, arrowDown, remove } from 'ionicons/icons';
import { computed } from 'vue';

const props = defineProps({
  title: {
    type: String,
    default: 'Total Ventas'
  },
  subtitle: {
    type: String,
    default: 'Al final del plazo (6 mes)'
  },
  value: {
    type: Number,
    required: true
  },
  color: {
    type: String,
    default: '#3880ff' 
  },
  prefix: {
    type: String,
    default: ''
  },
  suffix: {
    type: String,
    default: ''
  },
  decimals: {
    type: Number,
    default: 0
  },
  showTrend: {
    type: Boolean,
    default: true
  },
  trendValue: {
    type: Number,
    default: 0
  },
  description: {
    type: String,
    default: ''
  }
});

const formattedValue = computed(() => {
  return props.prefix + 
         props.value.toLocaleString(undefined, { maximumFractionDigits: props.decimals }) + 
         props.suffix;
});

const trendPercentage = computed(() => {
  return Math.abs(props.trendValue).toFixed(1);
});

const trendIcon = computed(() => {
  if (props.trendValue > 0) return arrowUp;
  if (props.trendValue < 0) return arrowDown;
  return remove;
});

const trendColor = computed(() => {
  if (props.trendValue > 0) return 'success';
  if (props.trendValue < 0) return 'danger';
  return 'medium';
});
</script>

<style scoped>
.big-number {
  font-size: 3.5rem;
  font-weight: bold;
  line-height: 1;
  margin: 10px 0;
}

.trend-indicator {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin-top: 8px;
  font-size: 0.9rem;
}

.trend-icon {
  font-size: 1.2rem;
}

.description {
  margin-top: 12px;
  color: var(--ion-color-medium);
  font-size: 0.9rem;
}
</style>