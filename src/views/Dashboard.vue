<template>
  <v-container class="pa-4 fill-container">
    <v-row dense justify="center">
      <v-col cols="6">
        <v-card class="pa-4 text-center" @click="goTo('scheduled')" elevation="2">
          <v-icon size="48">mdi-bookmark-outline</v-icon>
          <div class="mt-2">Gepland</div>
        </v-card>
      </v-col>

      <v-col cols="6">
        <v-card class="pa-4 text-center" @click="goTo('completed')" elevation="2">
          <v-icon size="48">mdi-check-circle</v-icon>
          <div class="mt-2">Voltooid</div>
        </v-card>
      </v-col>

      <v-col cols="6">
        <v-card class="pa-4 text-center" @click="goTo('knowledge')" elevation="2">
          <v-icon size="48">mdi-apps</v-icon>
          <div class="mt-2">Kennisbank</div>
        </v-card>
      </v-col>

      <v-col cols="6">
        <v-card class="pa-4 text-center" @click="goTo('settings')" elevation="2">
          <v-icon size="48">mdi-cog</v-icon>
          <div class="mt-2">Instellingen</div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

  <!-- Nieuwe inspectielijst onder de tegels -->
  <InspectionList />
</template>

<script>
  import InspectionList from '@/components/InspectionList.vue'

  export default {
    components: {
      InspectionList
    },
    methods: {
      goTo(routeName) {
        this.$router.push({ name: routeName });
      }
    }
  }
</script>

<style scoped>
  .v-main {
    padding: 0;
    margin: 0;
    min-height: 100vh;
    background-color: transparent;
    width: 100%;
  }

  .fill-container {
    height: calc(100vh - 112px); /* 64px header + 48px bottom-nav */
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .v-row {
    flex: 1;
    align-items: center;
  }

  .v-card {
    height: 100%;
    min-height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>
