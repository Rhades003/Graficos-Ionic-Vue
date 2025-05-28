import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Chart1 from '../views/Chart1View.vue';
import Chart2 from '../views/Chart2View.vue';
import Kpi from '../views/KpiView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/chart1'
  },
  {
    path: '/chart1',
    component: Chart1
  },
  {
    path: '/chart2',
    component: Chart2
  },
  {
    path: '/kpi',
    component: Kpi
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
