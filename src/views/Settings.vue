<template>
  <v-container>
    <h1 class="mb-4">Instellingen</h1>

    <v-row dense>
      <v-col cols="12">
        <v-card class="pa-4">
          <v-card-title class="text-h6">Taal</v-card-title>
          <v-card-text>
            <v-select
              v-model="language"
              :items="languages"
              label="Selecteer uw taal"
              dense
            ></v-select>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12">
        <v-card class="pa-4">
          <v-card-title class="text-h6">Meldingen</v-card-title>
          <v-card-text>
            <v-switch
              v-model="notifications"
              label="Meldingen aan/uit"
            ></v-switch>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12">
        <v-card class="pa-4">
          <v-card-title class="text-h6">Donkere modus</v-card-title>
          <v-card-text>
            <v-checkbox
              v-model="darkMode"
              label="Activeer donkere modus"
            ></v-checkbox>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Opslaan knop -->
    <v-btn class="mt-6 mr-4" color="success" @click="saveSettings">
      Instellingen opslaan
    </v-btn>

    <!-- Terug naar dashboard knop -->
    <v-btn class="mt-6" color="primary" @click="goToDashboard">
      Terug naar Dashboard
    </v-btn>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      language: 'Nederlands', // 🔥 standaard waarde
      languages: ['Nederlands', 'Engels', 'Duits'],
      notifications: false,
      darkMode: false
    }
  },
  methods: {
    goToDashboard() {
      this.$router.push({ name: 'dashboard' })
    },
    saveSettings() {
      alert(`Instellingen opgeslagen:\nTaal: ${this.language}\nMeldingen: ${this.notifications ? 'Aan' : 'Uit'}\nDonkere modus: ${this.darkMode ? 'Aan' : 'Uit'}`)
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
</style>
