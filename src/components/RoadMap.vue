<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>Roadmap de Formación</ion-card-title>
      <ion-card-subtitle>Proceso completo en 4 meses</ion-card-subtitle>
    </ion-card-header>
    <ion-card-content>
      <div class="roadmap-container">
        <div 
          v-for="(phase, index) in phases" 
          :key="index"
          class="roadmap-phase"
          :class="phase.status"
        >
          <div class="phase-header">
            <div class="phase-icon" :style="{backgroundColor: phase.color}">
              <ion-icon :icon="phase.icon" />
            </div>
            <div class="phase-title">
              <h3>{{ phase.title }}</h3>
              <span class="phase-duration">{{ phase.duration }}</span>
            </div>
          </div>
          
          <div class="phase-progress">
            <div class="progress-text">{{ phase.progress }}% completado</div>
            <div class="progress-bar">
              <div 
                class="progress-fill" 
                :style="{
                  width: `${phase.progress}%`,
                  backgroundColor: phase.color
                }"
              ></div>
            </div>
          </div>
          
          <ul class="phase-tasks">
            <li 
              v-for="(task, taskIndex) in phase.tasks" 
              :key="taskIndex"
              :class="{'completed': task.completed}"
            >
              <ion-icon 
                :icon="task.completed ? checkmarkCircle : timeOutline" 
                :color="task.completed ? 'success' : 'medium'" 
              />
              {{ task.description }}
            </li>
          </ul>
          
          <div v-if="index < phases.length - 1" class="phase-connector">
            <div class="connector-line" :style="{backgroundColor: phase.color}"></div>
            <div class="connector-arrow">
              <ion-icon :icon="arrowForward" />
            </div>
          </div>
        </div>
      </div>
    </ion-card-content>
  </ion-card>
</template>

<script setup lang="ts">
import { 
  IonCard, 
  IonCardHeader, 
  IonCardTitle, 
  IonCardContent, 
  IonIcon 
} from '@ionic/vue';
import { 
  searchOutline,
  peopleOutline,
  schoolOutline,
  rocketOutline,
  checkmarkCircle,
  timeOutline,
  arrowForward
} from 'ionicons/icons';
import { ref } from 'vue';

const phases = ref([
  {
    title: 'Búsqueda de Talento',
    duration: 'Mes 1',
    status: 'completed',
    progress: 100,
    color: '#06d6a0',
    icon: searchOutline,
    tasks: [
      { description: 'Publicar ofertas en plataformas', completed: true },
      { description: 'Filtrar CVs recibidos', completed: true },
      { description: 'Primeras entrevistas', completed: true }
    ]
  },
  {
    title: 'Contratación',
    duration: 'Mes 2',
    status: 'in-progress',
    progress: 60,
    color: '#ffd166',
    icon: peopleOutline,
    tasks: [
      { description: 'Entrevistas técnicas', completed: true },
      { description: 'Pruebas de habilidades', completed: true },
      { description: 'Ofertas formales', completed: false },
      { description: 'Firmar contratos', completed: false }
    ]
  },
  {
    title: 'Formación Inicial',
    duration: 'Mes 3',
    status: 'pending',
    progress: 5,
    color: '#118ab2',
    icon: schoolOutline,
    tasks: [
      { description: 'Onboarding general', completed: false },
      { description: 'Capacitación en herramientas', completed: false },
      { description: 'Metodologías QA', completed: false }
    ]
  },
  {
    title: 'Implementación',
    duration: 'Mes 4',
    status: 'pending',
    progress: 0,
    color: '#ef476f',
    icon: rocketOutline,
    tasks: [
      { description: 'Primeros tests en producción', completed: false },
      { description: 'Retroalimentación inicial', completed: false },
      { description: 'Ajustes finales', completed: false }
    ]
  }
]);
</script>

<style scoped>
.roadmap-container {
  display: flex;
  flex-direction: column;
  gap: 24px;
  position: relative;
}

.roadmap-phase {
  position: relative;
  padding: 16px;
  border-radius: 8px;
  background: #1E1E1E;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.phase-header {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
}

.phase-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
}

.phase-icon ion-icon {
  font-size: 20px;
  color: white;
}

.phase-title h3 {
  margin: 0;
  font-size: 1.1rem;
  color: white;
}

.phase-duration {
  font-size: 0.8rem;
  color: #aaa;
}

.phase-progress {
  margin: 12px 0;
}

.progress-text {
  font-size: 0.8rem;
  margin-bottom: 4px;
  color: #aaa;
}

.progress-bar {
  height: 6px;
  background: #333;
  border-radius: 3px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  border-radius: 3px;
  transition: width 0.5s ease;
}

.phase-tasks {
  list-style: none;
  padding: 0;
  margin: 0;
}

.phase-tasks li {
  display: flex;
  align-items: center;
  font-size: 0.85rem;
  margin-bottom: 6px;
  color: #ccc;
}

.phase-tasks li.completed {
  color: #06d6a0;
}

.phase-tasks ion-icon {
  margin-right: 8px;
  font-size: 14px;
}

.phase-connector {
  position: absolute;
  bottom: -24px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.connector-line {
  width: 2px;
  height: 16px;
}

.connector-arrow {
  color: #666;
}

/* Estados de las fases */
.roadmap-phase.completed {
  border-left: 4px solid #06d6a0;
}

.roadmap-phase.in-progress {
  border-left: 4px solid #ffd166;
  animation: pulse 2s infinite;
}

.roadmap-phase.pending {
  border-left: 4px solid #666;
  opacity: 0.7;
}

@keyframes pulse {
  0% { opacity: 1; }
  50% { opacity: 0.7; }
  100% { opacity: 1; }
}

@media (max-width: 768px) {
  .roadmap-container {
    gap: 32px;
  }
  
  .phase-connector {
    bottom: -32px;
  }
}
</style>