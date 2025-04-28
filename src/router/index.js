// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

import Login from '@/views/Login.vue'
import Dashboard from '@/views/Dashboard.vue'
import Scheduled from '@/views/Scheduled.vue'
import Completed from '@/views/Completed.vue'
import Knowledge from '@/views/Knowledge.vue'
import Settings from '@/views/Settings.vue'
import InspectionForm from '@/views/InspectionForm.vue' 
import PlanInspectionForm from '@/views/PlanInspectionForm.vue'
import ActiveTasksView from '@/views/ActiveTasksView.vue'
import AllInspectionsView from '@/views/AllInspectionsView.vue'
import InfoView from '@/views/InfoView.vue'

import Layout from '@/components/Layout.vue'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        redirect: '/dashboard'
      },
      {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard
      },
      {
        path: '/scheduled',
        name: 'scheduled',
        component: Scheduled
      },
      {
        path: '/completed',
        name: 'completed',
        component: Completed
      },
      {
        path: '/knowledge',
        name: 'knowledge',
        component: Knowledge
      },
      {
        path: '/settings',
        name: 'settings',
        component: Settings
      },
      {
        path: '/active-tasks',
        name: 'active-tasks',
        component: ActiveTasksView
      },
      {
        path: '/all-inspections',
        name: 'all-inspections',
        component: AllInspectionsView
      },
      {
        path: '/info',
        name: 'info',
        component: InfoView
      },
      {
        path: '/inspection-form/:id',
        name: 'inspection-form',
        component: InspectionForm
      },
      {
        path: '/plan-inspection/:id?',
        name: 'plan-inspection',
        component: PlanInspectionForm
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Router guard
router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('loggedIn')
  if (to.name !== 'login' && !loggedIn) next({ name: 'login' })
  else next()
})

export default router
