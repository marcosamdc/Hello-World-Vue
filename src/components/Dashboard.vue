<template>
    <v-app>
      <!-- HEADER -->
      <v-app-bar app color="primary" dark flat>
        <v-row align="center" class="px-4" no-gutters>
          <v-col cols="8" class="d-flex align-center">
            <img :src="logo" alt="RealEstateCare logo" class="logo" role="img" aria-label="RealEstateCare logo" />
          </v-col>
          <v-col cols="4" class="text-right d-flex justify-end">
            <v-btn icon variant="text" aria-label="Notifications">
              <v-icon>mdi-bell</v-icon>
            </v-btn>
            <v-btn icon variant="text" aria-label="Settings">
              <v-icon>mdi-cog</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-app-bar>
  
      <!-- MAIN DASHBOARD -->
      <v-main>
        <v-container class="pa-4 fill-container">
          <v-row dense justify="center">
            <v-col cols="6">
              <v-card class="pa-4 text-center" @click="goTo('scheduled')" elevation="2">
                <v-icon size="48">mdi-bookmark-outline</v-icon>
                <div class="mt-2">Scheduled</div>
              </v-card>
            </v-col>
  
            <v-col cols="6">
              <v-card class="pa-4 text-center" @click="goTo('completed')" elevation="2">
                <v-icon size="48">mdi-check-circle</v-icon>
                <div class="mt-2">Completed</div>
              </v-card>
            </v-col>
  
            <v-col cols="6">
              <v-card class="pa-4 text-center" @click="goTo('knowledge')" elevation="2">
                <v-icon size="48">mdi-apps</v-icon>
                <div class="mt-2">Knowledge base</div>
              </v-card>
            </v-col>
  
            <v-col cols="6">
              <v-card class="pa-4 text-center" @click="goTo('settings')" elevation="2">
                <v-icon size="48">mdi-cog</v-icon>
                <div class="mt-2">Settings</div>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
  
      <!-- BOTTOM TABS -->
      <v-bottom-navigation app color="primary" grow>
        <v-btn @click="goTo('active-task')" aria-label="Active task">
          <v-icon>mdi-wrench</v-icon>
          <span>active task</span>
        </v-btn>
  
        <v-btn @click="goTo('search')" aria-label="Search">
          <v-icon>mdi-magnify</v-icon>
          <span>Search</span>
        </v-btn>
  
        <v-btn @click="goTo('info')" aria-label="Information">
          <v-icon>mdi-information</v-icon>
          <span>Information</span>
        </v-btn>
      </v-bottom-navigation>
    </v-app>
  </template>
  
  <script>
  import logo from '@/assets/logo-white.png';
  
  export default {
    data() {
      return {
        logo
      };
    },
    methods: {
      goTo(routeName) {
        this.$router.push({ name: routeName });
      }
    }
  };
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
  
  .logo {
    max-height: 36px;
  }
  </style>
  