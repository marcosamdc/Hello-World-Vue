<template>
  <v-container>
    <h1 class="mb-4">Alle Inspecties</h1>

    <v-row dense>
      <v-col
        v-for="inspection in allInspections"
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
            <v-btn color="success" @click.stop="goToInspectionForm(inspection)">
              Inspectierapport invullen/bekijken
            </v-btn>
            <v-btn color="info" @click.stop="goToEditInspection(inspection)">
              Inspectie bewerken
            </v-btn>
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
  import { computed, ref } from 'vue'
  
  export default {
    setup() {
      const store = useInspectionStore()
      const selectedInspection = ref(null)
  
      const allInspections = computed(() => {
        return store.inspections
      })
  
      function goToDashboard() {
        window.location.href = '/dashboard'
      }
  
      function goToInspectionForm(inspection) {
        window.location.href = `/inspection-form/${inspection.id}`
      }
  
      function goToEditInspection(inspection) {
        window.location.href = `/plan-inspection/${inspection.id}`
      }
  
      function selectInspection(inspection) {
        selectedInspection.value = inspection
      }
  
      function formatDate(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        return new Date(date).toLocaleDateString('nl-NL', options)
      }
  
      return {
        allInspections,
        selectedInspection,
        goToDashboard,
        goToInspectionForm,
        goToEditInspection,
        selectInspection,
        formatDate
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
  