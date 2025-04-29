<template>
    <v-container>
        <h2 class="mb-4">Alle inspecties</h2>
    
        <v-row dense>
            <v-col
                v-for="inspection in inspections"
                :key="inspection.id"
                cols="12"
            >
                <v-card
                    class="pa-4 hoverable"
                    :class="{ active: selectedInspection && selectedInspection.id === inspection.id }"
                    @click="selectInspection(inspection)"
                    elevation="2"
                >
                    <v-card-title class="text-h6">
                    {{ formatDate(inspection.date) }} - {{ inspection.location }}
                    </v-card-title>
                    <v-card-subtitle class="text-caption">
                    Inspector: {{ inspection.inspector }} | Status: {{ inspection.status }}
                    </v-card-subtitle>
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
    </v-container>
</template>
  
<script>
  import InspectionService from '@/services/InspectionService.js'
  
    export default {
        data() {
            return {
                inspections: [],
                selectedInspection: null
            }
        },
            mounted() {
            InspectionService.getInspections()
                .then(response => {
                this.inspections = response.data
                this.inspections.sort((a, b) => new Date(b.date) - new Date(a.date))
                })
                .catch(error => {
                console.error('Error fetching inspections:', error)
                })
            },
            methods: {
            selectInspection(inspection) {
                this.selectedInspection = inspection
            },
            formatDate(date) {
                const options = { year: 'numeric', month: 'long', day: 'numeric' }
                return new Date(date).toLocaleDateString('en-US', options)
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
    
    /* Toegevoegd: actieve kaart markeren */
    .active {
        background-color: var(--color3);
    }

    .v-card-title {
        white-space: unset;
    }
    
    .details {
        background-color: var(--color3);
        padding: 20px;
        border-radius: 10px;
        margin-top: 20px;
    }
</style>
  