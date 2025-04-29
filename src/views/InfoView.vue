<template>
    <v-container>
      <h1 class="mb-4">Informatie & Mededelingen</h1>
  
      <v-card class="pa-4 mb-4">
        <v-card-title class="text-h6">
          Gepland Onderhoud
        </v-card-title>
        <v-card-text>
          Ons systeem wordt geüpdatet op <strong>15 mei 2025</strong> tussen <strong>02:00</strong> en <strong>04:00</strong>.
          Tijdens dit onderhoud kan de applicatie tijdelijk niet beschikbaar zijn.
        </v-card-text>
      </v-card>
  
      <v-card class="pa-4">
        <v-card-title class="text-h6">
          Interne Mededeling
        </v-card-title>
        <v-card-text>
          Vanaf volgende maand worden nieuwe inspectieprocedures geïmplementeerd. Controleer de nieuwe richtlijnen in de Kennisbank.
        </v-card-text>
      </v-card>
  
      <v-btn class="mt-6" color="primary" @click="goToDashboard">
        Terug naar Dashboard
      </v-btn>
    </v-container>
  </template>
  
  <script>
    export default {
      methods: {
        goToDashboard() {
          window.location.href = '/dashboard'
        }
      }
    }
  </script>
  
  <style scoped>
    .v-card {
      margin-bottom: 10px;
    }
  </style>
  