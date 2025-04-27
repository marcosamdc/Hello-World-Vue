<template>
  <v-container>
    <h1 class="mb-4">Geplande Taken</h1>

    <v-row dense>
      <v-col
        v-for="task in scheduledTasks"
        :key="task.id"
        cols="12"
      >
        <v-card
          class="pa-4 hoverable"
          :class="{ active: selectedTask && selectedTask.id === task.id }"
          elevation="2"
          @click="selectTask(task)"
        >
          <v-card-title class="text-h6">
            {{ formatDate(task.date) }} - {{ task.location }}
          </v-card-title>
          <v-card-subtitle class="text-caption">
            Inspecteur: {{ task.inspector }} | Status: {{ task.status }}
          </v-card-subtitle>

          <v-card-actions class="pt-2">
            <v-btn color="success" @click.stop="goToInspectionForm(task)">Inspectierapport invullen</v-btn>
            <v-btn color="info" @click.stop="goToEditInspection(task)">Inspectie bewerken</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <div v-if="selectedTask" class="details mt-6">
      <h3>Inspectiedetails</h3>
      <p><strong>Datum:</strong> {{ selectedTask.date }}</p>
      <p><strong>Locatie:</strong> {{ selectedTask.location }}</p>
      <p><strong>Inspecteur:</strong> {{ selectedTask.inspector }}</p>
      <p><strong>Status:</strong> {{ selectedTask.status }}</p>
      <p><strong>Opmerkingen:</strong> {{ selectedTask.remarks }}</p>
    </div>

    <v-btn class="mt-6 mr-4" color="success" @click="goToNewInspectionForm">
      Nieuwe Inspectie Plannen
    </v-btn>

    <v-btn class="mt-6" color="primary" @click="goToDashboard">
      Terug naar Dashboard
    </v-btn>
  </v-container>
</template>

<script>
import { useInspectionStore } from '@/stores/useInspectionStore'
import { computed } from 'vue'

export default {
  setup() {
    const store = useInspectionStore()

    const scheduledTasks = computed(() => {
      return store.inspections.filter(task => task.status === 'Gepland')
    })

    return {
      store,
      scheduledTasks
    }
  },
  data() {
    return {
      selectedTask: null
    }
  },
  methods: {
    goToDashboard() {
      this.$router.push({ name: 'dashboard' })
    },
    goToInspectionForm(task) {
      this.$router.push({ name: 'inspection-form', params: { id: task.id } })
    },
    goToEditInspection(task) {
      this.$router.push({ name: 'plan-inspection', params: { id: task.id } })
    },
    goToNewInspectionForm() {
      this.$router.push({ name: 'plan-inspection' })
    },
    selectTask(task) {
      this.selectedTask = task
    },
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('nl-NL', options)
    }
  }
}
</script>

<style scoped>
.hoverable {
  transition: box-shadow 0.3s, background-color 0.3s;
  cursor: pointer;
}

.hoverable:hover {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.active {
  background-color: var(--color3);
}

.details {
  background-color: var(--color3);
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
}
</style>
