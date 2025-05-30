<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>Progreso de Contratación</ion-card-title>
      <ion-card-subtitle>Meta: {{ totalPositions }} posiciones (4 testers + 1 manager)</ion-card-subtitle>
    </ion-card-header>
    <ion-card-content>
      <div class="progress-container">

        <div class="overall-progress">
          <div class="progress-labels">
            <span>Progreso total</span>
            <span>{{ overallProgress }}%</span>
          </div>
          <div class="progress-bar">
            <div 
              class="progress-fill"
              :style="{
                width: `${overallProgress}%`,
                background: progressGradient
              }"
            ></div>
          </div>
        </div>

        <div class="positions-breakdown">
          <div 
            v-for="position in positions" 
            :key="position.id"
            class="position-progress"
          >
            <div class="position-header">
              <div class="position-icon" :style="{backgroundColor: position.color}">
                {{ position.emoji }}
              </div>
              <div class="position-info">
                <h4>{{ position.title }}</h4>
                <span class="position-count">
                  {{ position.hired }} de {{ position.total }} contratados
                </span>
              </div>
            </div>
            <div class="progress-bar">
              <div 
                class="progress-fill"
                :style="{
                  width: `${(position.hired / position.total) * 100}%`,
                  backgroundColor: position.color
                }"
              ></div>
            </div>
          </div>
        </div>

      </div>
    </ion-card-content>
  </ion-card>
</template>

<script setup lang="ts">
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/vue';
import { ref, computed } from 'vue';

const props = defineProps({
  hiredTesters: {
    type: Number,
    default: 1
  },
  hiredManagers: {
    type: Number,
    default: 0
  },
  currentMonth: {
    type: Number,
    default: 1
  }
});

const totalPositions = 5; 

const positions = ref([
  {
    id: 1,
    title: 'Tester Senior',
    emoji: '🧪',
    color: '#06d6a0',
    hired: 1,
    total: 1
  },
  {
    id: 2,
    title: 'Tester Junior',
    emoji: '🔍',
    color: '#118ab2',
    hired: 1,
    total: 3
  },
  {
    id: 3,
    title: 'QA Manager',
    emoji: '👔',
    color: '#ef476f',
    hired: 1,
    total: 1
  }
]);

const timeline = ref([
  { id: 1, label: 'Mes 1: Búsqueda', completed: true, active: false },
  { id: 2, label: 'Mes 2: Contratación', completed: props.currentMonth > 2, active: props.currentMonth === 2 },
  { id: 3, label: 'Mes 3: Formación', completed: props.currentMonth > 3, active: props.currentMonth === 3 },
  { id: 4, label: 'Mes 4: Operativo', completed: props.currentMonth > 4, active: props.currentMonth === 4 }
]);

const overallProgress = computed(() => {
  const totalHired = positions.value.reduce((sum, pos) => sum + pos.hired, 0);
  return Math.round((totalHired / totalPositions) * 100);
});

const progressGradient = computed(() => {
  return `linear-gradient(90deg, 
    #06d6a0 ${overallProgress.value / 3}%, 
    #118ab2 ${overallProgress.value / 2}%, 
    #ef476f ${overallProgress.value}%)`;
});
</script>

<style scoped>

.overall-progress {
  margin-bottom: 16px;
}

.progress-labels {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 0.9rem;
}

.progress-labels span:last-child {
  font-weight: bold;
  color: var(--ion-color-primary);
}

.progress-bar {
  height: 12px;
  background: #333;
  border-radius: 6px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  border-radius: 6px;
  transition: width 0.8s ease;
}

.positions-breakdown {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.position-progress {
  background: #252525;
  padding: 12px;
  border-radius: 8px;
}

.position-header {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}

.position-icon {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  font-size: 16px;
}

.position-info {
  flex: 1;
}

.position-info h4 {
  margin: 0;
  font-size: 1rem;
  color: white;
}


@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

@media (max-width: 768px) {
  .month-label {
    font-size: 0.65rem;
  }
}
</style>