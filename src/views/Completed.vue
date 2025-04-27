<template>
  <v-container>
    <h1 class="mb-4">Voltooide Inspecties</h1>

    <v-row dense>
      <v-col
        v-for="inspection in completedInspections"
        :key="inspection.id"
        cols="12"
      >
        <v-card
          class="pa-4 hoverable"
          :class="{ active: selectedInspection && selectedInspection.id === inspection.id }"
          elevation="2"
          @click="selectInspection(inspection)"
        >
          <v-card-title class="text-h6">
            {{ formatDate(inspection.date) }} - {{ inspection.location }}
          </v-card-title>
          <v-card-subtitle class="text-caption">
            Inspecteur: {{ inspection.inspector }} | Status: {{ inspection.status }}
          </v-card-subtitle>

          <v-card-actions class="pt-2">
            <v-btn color="primary" @click.stop="goToInspectionForm(inspection)">Inspectierapport bekijken</v-btn>
            <v-btn color="info" @click.stop="goToEditInspection(inspection)">Inspectie bewerken</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <div v-if="selectedInspection" class="details mt-6">
      <h3>Inspectiedetails</h3>
      <p><strong>Datum:</strong> {{ selectedInspection.date }}</p>
      <p><strong>Locatie:</strong> {{ selectedInspection.location }}</p>
      <p><strong>Inspecteur:</strong> {{ selectedInspection.inspector }}</p>
      <p><strong>Status:</strong> {{ selectedInspection.status }}</p>
      <p><strong>Opmerkingen:</strong> {{ selectedInspection.remarks }}</p>
    </div>

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

    const completedInspections = computed(() => {
      return store.inspections.filter(inspection => inspection.status === 'Voltooid')
    })

    return {
      store,
      completedInspections
    }
  },
  data() {
    return {
      selectedInspection: null
    }
  },
  methods: {
    goToDashboard() {
      this.$router.push({ name: 'dashboard' })
    },
    goToInspectionForm(inspection) {
      this.$router.push({ name: 'inspection-form', params: { id: inspection.id } })
    },
    goToEditInspection(inspection) {
      this.$router.push({ name: 'plan-inspection', params: { id: inspection.id } })
    },
    selectInspection(inspection) {
      this.selectedInspection = inspection
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
