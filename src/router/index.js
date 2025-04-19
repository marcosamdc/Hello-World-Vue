// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../components/Dashboard.vue';
import TestIcon from '../components/TestIcon.vue'


const routes = [
    {
        path: '/test',
        name: 'test',
        component: TestIcon
      },
      {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard
      }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
